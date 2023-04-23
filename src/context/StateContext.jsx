import { useContext } from "react";
import { createContext } from "react";

const StateContext = createContext();

const name = "Wai Tun Soe";
const age = 21;
const data = { name, age };

export const StateContextProvider = ({ children }) => {
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContextCustom = () => useContext(StateContext);
