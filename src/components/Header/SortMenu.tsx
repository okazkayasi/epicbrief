import {
  SortingContext,
  SortingTypes,
} from "@/utils/providers/SortingProvider";
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { RiSortDesc } from "react-icons/ri";

const sortOptions: SortingTypes[] = ["name", "time", "account"];
const sortMap: Record<SortingTypes, string> = {
  name: "Name (Alphabetic)",
  time: "Recent",
  account: "Account (Alphabetic)",
};

export function SortMenu() {
  const { sort, setSort } = useContext(SortingContext);
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        leftIcon={<Icon as={RiSortDesc} />}
        backgroundColor="white"
        color="black"
      >
        Sort: {sortMap[sort] || "None"}
      </MenuButton>
      <MenuList minWidth="240px">
        {sortOptions.map((option) => (
          <MenuItem
            onClick={(e) => {
              console.log(option, "opt");
              setSort(option);
            }}
            value={option}
            key={option}
          >
            {sortMap[option]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
