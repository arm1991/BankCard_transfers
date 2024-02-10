import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});
  const [toggle, setToggle] = useState(true);

  const changeFormValues = (values) => {
    setFormValues(values);
  };

  const toggleCard = () => {
    setToggle((prev) => !prev);
  };

  const contextProps = {
    formValues,
    changeFormValues,
    toggle,
    toggleCard,
  };

  return <Context.Provider value={contextProps}>{children}</Context.Provider>;
};

export default ContextProvider;
