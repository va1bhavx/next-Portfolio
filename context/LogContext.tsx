"use client";

import { Logs } from "@/helper/data/LogData";
import { createContext, SetStateAction, useContext, useState } from "react";

interface InitialStateProps {
  logs: typeof Logs;
  searchLogs: (query: string) => void;
}
const initialState = {
  logs: [],
  searchLogs: () => {},
};

export const LogsContext = createContext<InitialStateProps>(initialState);

export const LogsProvider = ({ children }: { children: React.ReactNode }) => {
  const [logs, setLogs] = useState(Logs);

  const searchLogs = (query: string) => {
    if (!query) {
      return setLogs(Logs);
    }

    const updatedLogs = Logs.filter((log) =>
      log.title.toLowerCase().includes(query.toLowerCase()),
    );
    setLogs(updatedLogs);
  };

  return (
    <LogsContext.Provider value={{ logs, searchLogs }}>
      {children}
    </LogsContext.Provider>
  );
};

export const useLogContext = () => {
  const context = useContext(LogsContext);

  if (!context) throw Error(`Logs context must be used within Logs Provider`);

  return context;
};
