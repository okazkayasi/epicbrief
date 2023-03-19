export type MeetingData = {
  meetingId: string;
  companyId: string | undefined;
  companyName: string | undefined;
  internalMeetingNotes: string | undefined;
  meetingTitle: string | undefined;
  meetingBody: string | undefined;
  meetingStartDate: string | undefined;
}[];
