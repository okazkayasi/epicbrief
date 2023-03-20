import { keyToName } from "@/components/MeetingTable/dataMapping";
import { TdElement } from "@/components/MeetingTable/TdElement";
import { ColumnFilterContext } from "@/utils/providers/ColumnFilterProvider";
import { TableSelectorContext } from "@/utils/providers/TableSelectorProvider";
import { MeetingData } from "@/utils/types";
import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useContext } from "react";

export const MeetingTable = ({ meetings }: { meetings?: MeetingData }) => {
  const { filter: columnFilter } = useContext(ColumnFilterContext);
  const { selectedIds, setSelectedIds } = useContext(TableSelectorContext);

  const changeAllCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(meetings?.map((m) => m.meetingId) ?? []);
    } else {
      setSelectedIds([]);
    }
  };
  const changeOneCheckbox =
    (meetingId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedIds([...selectedIds, meetingId]);
      } else {
        setSelectedIds(selectedIds.filter((id) => id !== meetingId));
      }
    };

  return (
    <TableContainer>
      <Table colorScheme="facebook" variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th pl={2} pr={0} lineHeight={1}>
              <Checkbox
                isChecked={selectedIds.length === meetings?.length}
                onChange={changeAllCheckbox}
              />
            </Th>
            {columnFilter.map((c) => (
              <STh key={c}>{keyToName[c]}</STh>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {meetings &&
            meetings.map((meeting) => (
              <Tr key={meeting.meetingId}>
                <Td pl={2} pr={0} lineHeight={1}>
                  <Checkbox
                    isChecked={selectedIds.includes(meeting.meetingId)}
                    onChange={changeOneCheckbox(meeting.meetingId)}
                  />
                </Td>
                {columnFilter.map((c) => (
                  <TdElement key={c} c={c} meeting={meeting} />
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const STh = styled(Th)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  text-transform: none;
`;
