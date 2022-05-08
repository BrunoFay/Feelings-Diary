import { useState } from "react";

export const useHandleChange = (initialState) => {
  const [state, setState] = useState(initialState);
  const handleChange = ({ target: { name, value } }, payload = null) => {
    payload ? setState({ ...state, payload, [name]: value }) :
      setState({ ...state, [name]: value });
  }
  return [state,setState, handleChange];
}