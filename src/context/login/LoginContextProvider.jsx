import { useHandleChange } from "../../hooks/useHandleChange"
import { loginContext } from "./loginContext"
import { useState } from "react"

const INITIAL_STATE_LOGIN = {
  email: "",
  password: "",
}

export default function LoginContextProvider({ children }) {
  const [user, setUser, handleChange] = useHandleChange(INITIAL_STATE_LOGIN)
  const [isLogged, setIsLogged] = useState(false)
  const valueToProvide = {
    user,
    setUser,
    handleChange,
    isLogged,
    setIsLogged,
  }
  return (
    <loginContext.Provider value={valueToProvide}>
      {children}
    </loginContext.Provider>
  )
}
