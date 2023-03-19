import React, { ReactNode, useState } from "react";

export const DateFilterContext = React.createContext<{
  selectedDates: Date[];
  setSelectedDates: React.Dispatch<React.SetStateAction<Date[]>>;
}>({
  selectedDates: [new Date(), new Date()],
  setSelectedDates: () => {},
});

export const DateFilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date("2023-12-31"),
  ]);
  return (
    <DateFilterContext.Provider
      value={{
        selectedDates,
        setSelectedDates,
      }}
    >
      {children}
    </DateFilterContext.Provider>
  );
};
