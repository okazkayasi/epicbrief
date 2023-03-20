import { keyToData } from "@/components/MeetingTable/dataMapping";
import { formatDate } from "@/utils/formatDate";
import { matchMap } from "@/utils/general";
import { ColumnFilters } from "@/utils/providers/ColumnFilterProvider";
import { MeetingData } from "@/utils/types";
import { Td, Textarea } from "@chakra-ui/react";
import styled from "@emotion/styled";
import debounce from "lodash.debounce";
import Link from "next/link";
import React, { useCallback, useState } from "react";

export const TdElement = ({
  c,
  meeting,
}: {
  c: ColumnFilters;
  meeting: MeetingData[number];
}) => {
  const [notes, setNotes] = useState(
    meeting.internalMeetingNotes ?? "No notes yet"
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value, "debounce", meeting.meetingId);
  };
  const debouncedHandleChange = useCallback(debounce(handleChange, 1000), []);

  return matchMap(c, {
    next_steps: (
      <STd p={0} key={c}>
        <Textarea
          value={notes}
          size="lg"
          outline="none"
          border="none"
          onChange={(e) => {
            setNotes(e.target.value);
            debouncedHandleChange(e);
          }}
        />
      </STd>
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
