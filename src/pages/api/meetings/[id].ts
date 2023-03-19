import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { ErrorMessage } from "@/pages/api/getAllClients";
import { SimplePublicObjectWithAssociations } from "@hubspot/api-client/lib/codegen/crm/objects/meetings";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  meeting: SimplePublicObjectWithAssociations;
};

type ResponseType = NextApiResponse<Data | ErrorMessage>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const requestMeetingId = req.query.id;
  if (!requestMeetingId || typeof requestMeetingId !== "string") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const { getMeetingById } = describeHubspot();
  const meeting = await getMeetingById(requestMeetingId);
  res.status(200).json({ meeting });
}