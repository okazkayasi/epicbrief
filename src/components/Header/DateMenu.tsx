import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

export function DateMenu() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  return (
    <Box>
      <div style={{ position: "relative" }}>
        <RangeDatepicker
          propsConfigs={{
            // inputProps: {
            //   display: "none",
            // },
            inputProps: {
              variant: "outline",
              size: "sm",
              background: "white",
              pl: 8,
              borderRadius: 8,
            },
            popoverCompProps: {
              popoverBodyProps: {
                right: 0,
                transform: "none",
              },
            },
          }}
          defaultIsOpen={true}
          closeOnSelect={false}
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 10,
            zIndex: 1,
          }}
        >
          <Icon as={AiOutlineCalendar} />
        </div>
      </div>
    </Box>
  );
}
