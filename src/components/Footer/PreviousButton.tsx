import { FooterType } from "@/components/Footer/Footer";
import { Button } from "@chakra-ui/react";
import React from "react";

export const PreviousButton = ({
  currentPage,
  setPage,
}: Pick<FooterType, "currentPage" | "setPage">) => {
  return (
    <Button
      size="sm"
      backgroundColor="white"
      color="black"
      isDisabled={currentPage === 1}
      onClick={() => {
        setPage((page) => page - 1);
      }}
    >
      Previous
    </Button>
  );
};
