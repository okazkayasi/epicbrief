import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { VscChevronDown } from "react-icons/vsc";

export function ActionsMenu() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        rightIcon={<Icon as={VscChevronDown} />}
        backgroundColor="white"
        color="black"
      >
        Actions
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
}
