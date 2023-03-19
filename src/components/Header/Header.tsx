import { ActionsMenu } from "@/components/Header/ActionsMenu";
import { DateMenu } from "@/components/Header/DateMenu";
import { FilterMenu } from "@/components/Header/FilterMenu";
import { SortMenu } from "@/components/Header/SortMenu";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import React, { useState } from "react";

export const Header = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  return (
    <Box bg="lightgray" w={"100%"} py={4} px={2} color="#131313">
      <Text fontSize="xl">Meeting</Text>
      <Flex>
        <Flex>
          <FilterMenu />
          <Spacer pr={4} />
          <ActionsMenu />
        </Flex>
        <Spacer />
        <Flex>
          <SortMenu />
          <Spacer pr={4} />
          <DateMenu />
        </Flex>
      </Flex>
    </Box>
  );
};
