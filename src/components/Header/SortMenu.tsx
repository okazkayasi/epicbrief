import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { RiSortDesc } from "react-icons/ri";

export function SortMenu() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        leftIcon={<Icon as={RiSortDesc} />}
        backgroundColor="white"
        color="black"
      >
        Sort: {"Recent"}
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuItem>Name (Alphabetic)</MenuItem>
        <MenuItem>Recent</MenuItem>
        <MenuItem>Account (Alphabetic)</MenuItem>
      </MenuList>
    </Menu>
  );
}
