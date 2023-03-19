import React, { ReactNode, useState } from "react";

export type SortingTypes = "name" | "time" | "account";
export const SortingContext = React.createContext<{
  sort: SortingTypes;
  setSort: React.Dispatch<React.SetStateAction<SortingTypes>>;
}>({
  sort: "time",
  setSort: () => {},
});

export const SortingProvider = ({ children }: { children: ReactNode }) => {
  const [sort, setSort] = useState<SortingTypes>("time");

  return (
    <SortingContext.Provider
      value={{
        sort,
        setSort,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
};
