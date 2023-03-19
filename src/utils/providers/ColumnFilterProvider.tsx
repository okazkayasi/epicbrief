import React, { ReactNode, useState } from "react";

export type ColumnFilters = "name" | "time" | "account" | "next_steps";

export const ColumnFilterContext = React.createContext<{
  filter: ColumnFilters[];
  setFilter: React.Dispatch<React.SetStateAction<ColumnFilters[]>>;
}>({
  filter: [],
  setFilter: () => {},
});

export const ColumnFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<ColumnFilters[]>([
    "name",
    "time",
    "account",
    "next_steps",
  ]);
  return (
    <ColumnFilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </ColumnFilterContext.Provider>
  );
};
