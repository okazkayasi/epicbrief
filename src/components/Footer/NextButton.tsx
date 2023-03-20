import { FooterType } from "@/components/Footer/Footer";
import { Button } from "@chakra-ui/react";
import React from "react";

export const NextButton = ({
  currentPage,
  totalPages,
  setPage,
}: Pick<FooterType, "currentPage" | "totalPages" | "setPage">) => {
  return (
    <Button
      size="sm"
      backgroundColor="white"
      color="black"
      isDisabled={currentPage === totalPages}
      onClick={() => {
        setPage((page) => page + 1);
      }}
    >
      Next
    </Button>
  );
};
