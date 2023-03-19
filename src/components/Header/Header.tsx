import { SHeaderWrapper } from "@/components/Header/Header.styled";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg="lightgray" w={"100%"} py={4} px={2} color="#131313">
      <Text fontSize="xl">Meeting</Text>
      <Flex></Flex>
    </Box>
  );
};
