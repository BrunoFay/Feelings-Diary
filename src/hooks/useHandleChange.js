import { useState } from "react";

export const useHandleChange = (initialState) => {
  const [state, setState] = useState(initialState);
  const handleChange = ({ target: { name, value } }) => {
      setState({ ...state, [name]: value });
  }
  return [state,setState, handleChange];
}