import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";


interface User {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  error: string | null;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [error, setError] = useState<string | null>(null);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      if (error.response.status === 500) {
        setError("An internal server error occurred. Please try again later.");
      } else {
        setError(error.response.data.message || "An error occurred. Please try again.");
      }
    }
  }

  return (
    <AuthContext.Provider value={{user: data.user, signIn, error}}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
