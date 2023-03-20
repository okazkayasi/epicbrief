import { NextButton } from "@/components/Footer/NextButton";
import { PreviousButton } from "@/components/Footer/PreviousButton";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { SetStateAction } from "react";

export type FooterType = {
  numberOfRows: number;
  startInd: number;
  endInd: number;
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<SetStateAction<number>>;
};
export const Footer = ({
  numberOfRows,
  startInd,
  endInd,
  currentPage,
  totalPages,
  setPage,
}: FooterType) => {
  return (
    <Box bg="lightgray" w={"100%"} py={4} px={2} color="#131313">
      <Flex>
        <Text fontSize="sm" alignSelf="center">
          Showing {startInd + 1} to {endInd} of {numberOfRows} results
        </Text>
        <Spacer />
        <Flex>
          <PreviousButton currentPage={currentPage} setPage={setPage} />
          <Spacer w={4} />
          <NextButton
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
