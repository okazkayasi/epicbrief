import { keyToData, keyToName } from "@/components/MeetingTable/dataMapping";
import { formatDate } from "@/utils/formatDate";
import { ColumnFilterContext } from "@/utils/providers/ColumnFilterProvider";
import { SortingContext } from "@/utils/providers/SortingProvider";
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
                    <STd key={c}>
                      {c === "time"
                        ? formatDate(meeting[keyToData[c]])
                        : meeting[keyToData[c]]}
                    </STd>
                  )
                )}
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
const STd = styled(Td)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;
