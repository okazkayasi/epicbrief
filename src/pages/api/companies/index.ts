import { describeFirestore } from "@/logic/firestore/describeFirestore";
import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { ErrorMessage } from "@/pages/api/getAllClients";
import { MeetingData } from "@/utils/types";
import { SimplePublicObjectWithAssociations } from "@hubspot/api-client/lib/codegen/crm/companies";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseType = NextApiResponse<
  { meetingData: MeetingData } | ErrorMessage
>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
  }
  const { getAllCompanies, getCompanyById, getMeetingById } = describeHubspot();
  const { getNextSteps } = describeFirestore();
  const allCompanies = await getAllCompanies();
  const companyIds = allCompanies.map((company) => company.id);

  const getCompaniesById = companyIds.map((id) => getCompanyById(id));
  const companyData = await Promise.all(getCompaniesById);

  const meetingIds = companyData
    .map((company) => company.associations?.meetings)
    .flatMap((x) => x?.results ?? [])
    .map((x) => x.id);

  const getMeetingsById = meetingIds.map((id) => getMeetingById(id));
  const meetingRetrievedData = await Promise.all(getMeetingsById);

  const getNextStepsById = meetingIds.map((id) => getNextSteps(id));
  const nextSteps = await Promise.all(getNextStepsById);
  const meetingData = meetingRetrievedData.map((meeting) => {
    const associatedCompanyId = meeting.associations?.companies?.results[0].id;
    return {
      internalMeetingNotes: nextSteps.find((n) => n.meetingId === meeting.id)
        ?.nextSteps,
      meetingTitle: meeting.properties.hs_meeting_title,
      meetingBody: meeting.properties.hs_meeting_body,
      meetingStartDate: meeting.properties.hs_meeting_start_time,
      meetingId: meeting.id,
      companyId: associatedCompanyId,
      companyName: companyData.find((c) => c.id === associatedCompanyId)
        ?.properties.name,
    };
  });

  res.status(200).json({ meetingData: meetingData });
}
