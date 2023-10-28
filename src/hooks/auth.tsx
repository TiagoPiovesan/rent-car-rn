import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import { database } from "../database";
import axios from "axios";

import { User as ModelUser } from "../database/model/User";

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  error: string | null;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User)
  const [error, setError] = useState<string | null>(null);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;

      await database.write(async () => {
        const userCollection = await database.get<ModelUser>('users')
          .create(newUser => {
              newUser.user_id = user.id,
              newUser.email = user.email,
              newUser.name = user.name,
              newUser.driver_license = user.driver_license,
              newUser.avatar = user.avatar,
              newUser.token = token
          })
      })

      loadUserData()

    } catch (error) {
      if (error instanceof axios.AxiosError) {
        if (error.response.status === 500) {
          setError(error.response.data.message || "An error occurred. Please try again.");
        }
      } else {
        throw new Error(error)
      }
    }
  }

  async function signOut() {
    try {
      await database.write(async () => {
        const userSelected = await database.get<ModelUser>('users').find(data.id)
        await userSelected.destroyPermanently()
      })

      setData({} as User)
     } catch (error) {
      throw new Error(error)
    }
  }

  async function updateUser(user: User) {
    try {
      await database.write(async () => {
        const userSelected = await database.get<ModelUser>('users').find(data.id)
        await userSelected.update((userData) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        })
      })

      setData(user)
     } catch (error) {
      throw new Error(error)
    }
  }

  async function loadUserData() {
    const userCollection = database.get<ModelUser>('users')
    const response = await userCollection.query().fetch();

    if (response.length > 0) {
      const userData = response[0]._raw as unknown as User;
      api.defaults.headers.authorization = `Bearer ${userData.token}`;
      setData(userData)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{user: data, signIn, signOut, updateUser, error}}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
