import { DateFilterContext } from "@/utils/providers/DateFilterProvider";
import { Box, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import React, { useContext } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

export function DateMenu() {
  const { selectedDates, setSelectedDates } = useContext(DateFilterContext);

  return (
    <Box>
      <div style={{ position: "relative" }}>
        <RangeDatepicker
          propsConfigs={propsConfigs}
          closeOnSelect={false}
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
        />
        <SIconWrapper>
          <Icon as={AiOutlineCalendar} />
        </SIconWrapper>
      </div>
    </Box>
  );
}

const propsConfigs = {
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
};

const SIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  z-index: 1;
`;
