import { keyToData } from "@/components/MeetingTable/dataMapping";
import { formatDate } from "@/utils/formatDate";
import { matchMap } from "@/utils/general";
import { ColumnFilters } from "@/utils/providers/ColumnFilterProvider";
import { MeetingData } from "@/utils/types";
import { Td } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export const TdElement = ({
  c,
  meeting,
}: {
  c: ColumnFilters;
  meeting: MeetingData[number];
}) => {
  return matchMap(c, {
    next_steps: (
      <STd
        key={c}
        dangerouslySetInnerHTML={{
          __html: meeting.internalMeetingNotes ?? "",
        }}
      />
    ),
    name: (
      <STd key={c}>
        <Link
          href={`/meeting/${meeting.meetingId}`}
          style={{ color: "steelblue" }}
        >
          {meeting[keyToData[c]]}
        </Link>
      </STd>
    ),
    time: <STd key={c}>{formatDate(meeting[keyToData[c]])}</STd>,
    account: <STd key={c}>{meeting[keyToData[c]]}</STd>,
  });
};

const STd = styled(Td)`
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;
