import React, { ReactNode } from "react";

export const TableSelectorContext = React.createContext<{
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  selectedIds: [],
  setSelectedIds: () => {},
});

export const TableSelectorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  return (
    <TableSelectorContext.Provider
      value={{
        selectedIds,
        setSelectedIds,
      }}
    >
      {children}
    </TableSelectorContext.Provider>
  );
};
