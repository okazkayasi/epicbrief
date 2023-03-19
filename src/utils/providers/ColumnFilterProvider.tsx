import React, { ReactNode, useState } from "react";

export type ColumnFilters = "name" | "time" | "account" | "next_steps";

export const ColumnFilterContext = React.createContext<{
  filter: ColumnFilters[];
  setFilter: React.Dispatch<React.SetStateAction<ColumnFilters[]>>;
}>({
  filter: [],
  setFilter: () => {},
});

const sortedColumns = {
  name: 0,
  time: 1,
  account: 2,
  next_steps: 3,
};

export const ColumnFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<ColumnFilters[]>([
    "name",
    "time",
    "account",
    "next_steps",
  ]);

  const sortedFilter = filter.sort(
    (a, b) => sortedColumns[a] - sortedColumns[b]
  );

  return (
    <ColumnFilterContext.Provider
      value={{
        filter: sortedFilter,
        setFilter,
      }}
    >
      {children}
    </ColumnFilterContext.Provider>
  );
};
