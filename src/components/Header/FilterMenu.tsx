import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

export function FilterMenu() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        size="sm"
        leftIcon={<Icon as={MdOutlineFilterList} />}
        backgroundColor="white"
        color="black"
      >
        Filter
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup
          title="Filter"
          type="checkbox"
          onChange={(value) => {
            console.log(value);
          }}
        >
          <MenuItemOption value="email">Email</MenuItemOption>
          <MenuItemOption value="phone">Phone</MenuItemOption>
          <MenuItemOption value="country">Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
