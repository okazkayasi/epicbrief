import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { SimplePublicObjectWithAssociations } from "@hubspot/api-client/lib/codegen/crm/contacts";
import type { NextApiRequest, NextApiResponse } from "next";

export type ErrorMessage = {
  message: string;
};

type Data = {
  contacts: SimplePublicObjectWithAssociations[];
};

type ResponseType = NextApiResponse<Data | ErrorMessage>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { getAllClients } = describeHubspot();
  const allContact = await getAllClients();
  res.status(200).json({ contacts: allContact });
}
