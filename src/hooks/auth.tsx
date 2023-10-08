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
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post("/sessions", { email, password })

    const { token, user } = response.data
    // In Axios has a method that send in all request this headers by default
    api.defaults.headers.authorization = `Bearer ${token}`
    setData({ token, user })
    console.log(data)
  }

  return (
    <AuthContext.Provider value={{user: data.user, signIn}}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
