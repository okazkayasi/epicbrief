import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { ErrorMessage } from "@/pages/api/getAllClients";
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from "@hubspot/api-client/lib/codegen/crm/objects/meetings";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  meetings: CollectionResponseWithTotalSimplePublicObjectForwardPaging;
};

type ResponseType = NextApiResponse<Data | ErrorMessage>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { getAllMeetings } = describeHubspot();
  const meetings = await getAllMeetings();
  res.status(200).json({ meetings });
}
