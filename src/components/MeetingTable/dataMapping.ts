import { ColumnFilters } from "@/utils/providers/ColumnFilterProvider";
import { MeetingData } from "@/utils/types";

export const keyToName: Record<ColumnFilters, string> = {
  name: "Name",
  time: "Time",
  account: "Account",
  next_steps: "Next steps",
};
export const keyToData: Record<ColumnFilters, keyof MeetingData[number]> = {
  name: "meetingTitle",
  time: "meetingStartDate",
  account: "companyName",
  next_steps: "internalMeetingNotes",
};
