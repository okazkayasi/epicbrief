import { formatDate } from "@/utils/formatDate";
import { MeetingData } from "@/utils/types";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const STh = styled(Th)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  text-transform: none;
`;
const STd = styled(Td)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

export const MeetingTable = ({ meetings }: { meetings?: MeetingData }) => {
  return (
    <TableContainer>
      <Table colorScheme="facebook" variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th pl={2} pr={0} lineHeight={1}>
              <Checkbox />
            </Th>
            <STh pl={2}>Name</STh>
            <STh>Time</STh>
            <STh>Account</STh>
            <STh>Next steps</STh>
          </Tr>
        </Thead>
        <Tbody>
          {meetings &&
            meetings.map((meeting) => (
              <Tr key={meeting.meetingId}>
                <Td pl={2} pr={0} lineHeight={1}>
                  <Checkbox />
                </Td>
                <STd pl={2}>{meeting.meetingTitle}</STd>
                <STd>
                  {meeting.meetingStartDate
                    ? formatDate(new Date(meeting.meetingStartDate))
                    : "No date"}
                </STd>
                <STd>{meeting.companyName}</STd>
                <STd
                  dangerouslySetInnerHTML={{
                    __html: meeting.internalMeetingNotes ?? "",
                  }}
                ></STd>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
