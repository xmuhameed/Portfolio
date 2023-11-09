"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

export interface ContextProps {
  filtertion: string;
  setFiltertion: Dispatch<SetStateAction<string>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}
const GlobalContext = createContext<ContextProps>({
  filtertion: "",
  setFiltertion: (): string => "",
  mode: "",
  setMode: (): string => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filtertion, setFiltertion] = useState("all");
  const [mode, setMode] = useState("light");
  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const localMode = localStorage.getItem("mode");
    dark ? setMode("dark") : setMode("light");
    if (localMode) {
      setMode(localMode);
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ mode, setMode, filtertion, setFiltertion }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
