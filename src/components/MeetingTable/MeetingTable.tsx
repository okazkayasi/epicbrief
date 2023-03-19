import {
  ColumnFilterContext,
  ColumnFilters,
} from "@/utils/providers/ColumnFilterProvider";
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

const STh = styled(Th)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  text-transform: none;
`;
const STd = styled(Td)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const keyToName: Record<ColumnFilters, string> = {
  name: "Name",
  time: "Time",
  account: "Account",
  next_steps: "Next steps",
};

const keyToData: Record<ColumnFilters, keyof MeetingData[number]> = {
  name: "meetingTitle",
  time: "meetingStartDate",
  account: "companyName",
  next_steps: "internalMeetingNotes",
};

export const MeetingTable = ({ meetings }: { meetings?: MeetingData }) => {
  const { filter: columnFilter } = useContext(ColumnFilterContext);
  console.log(columnFilter, "col filter");

  return (
    <TableContainer>
      <Table colorScheme="facebook" variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th pl={2} pr={0} lineHeight={1}>
              <Checkbox />
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
                  <Checkbox />
                </Td>
                {columnFilter.map((c) =>
                  c === "next_steps" ? (
                    <STd
                      key={c}
                      dangerouslySetInnerHTML={{
                        __html: meeting.internalMeetingNotes ?? "",
                      }}
                    />
                  ) : (
                    <STd key={c}>{meeting[keyToData[c]]}</STd>
                  )
                )}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
