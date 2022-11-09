import React, { useState, createContext } from "react";
import { fullState } from "../utils/startApplication";

// Create Context Object
export const AppSettings = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppStateContextProvider = (props) => {
  const [appState, setAppState] = useState({ ...fullState });

  return (
    <AppSettings.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppSettings.Provider>
  );
};
