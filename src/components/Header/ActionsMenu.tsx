import { deleteMeetings } from "@/utils/deleteMeetings";
import { useMeetings } from "@/utils/hooks/useMeetings";
import { TableSelectorContext } from "@/utils/providers/TableSelectorProvider";
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { VscChevronDown } from "react-icons/vsc";

export function ActionsMenu() {
  const { selectedIds } = useContext(TableSelectorContext);
  const { mutate } = useMeetings();
  const deleteThem = () => {
    deleteMeetings(selectedIds)
      .then(() => {
        setTimeout(() => {
          mutate().then(() => {
            alert("Deleted");
          });
        }, 500);
      })
      .catch((e) => {
        alert("Error: " + e);
      });
  };
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
        <MenuItem onClick={deleteThem}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
}
