import {
  ColumnFilterContext,
  ColumnFilters,
} from "@/utils/providers/ColumnFilterProvider";
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MdOutlineFilterList } from "react-icons/md";

export function FilterMenu() {
  const { filter, setFilter } = useContext(ColumnFilterContext);
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
            setFilter(value as ColumnFilters[]);
          }}
          value={[...filter]}
        >
          <MenuItemOption value="name">Name</MenuItemOption>
          <MenuItemOption value="time">Time</MenuItemOption>
          <MenuItemOption value="account">Account</MenuItemOption>
          <MenuItemOption value="next_steps">Next Steps</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
