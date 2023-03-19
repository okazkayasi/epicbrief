import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { ErrorMessage } from "@/pages/api/getAllClients";
import { SimplePublicObjectWithAssociations } from "@hubspot/api-client/lib/codegen/crm/companies";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  companies: SimplePublicObjectWithAssociations[];
};

type ResponseType = NextApiResponse<Data | ErrorMessage>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
  }
  const { getAllCompanies } = describeHubspot();
  const allContact = await getAllCompanies();
  res.status(200).json({ companies: allContact });
}
