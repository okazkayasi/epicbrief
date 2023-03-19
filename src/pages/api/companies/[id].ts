import { describeHubspot } from "@/logic/hubspot/describeHubspot";
import { notAllowed } from "@/logic/hubspot/unallowedMethods";
import { ErrorMessage } from "@/pages/api/getAllClients";
import { SimplePublicObjectWithAssociations } from "@hubspot/api-client/lib/codegen/crm/companies";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  company: SimplePublicObjectWithAssociations;
};
type ResponseType = NextApiResponse<Data | ErrorMessage>;

export default async function handler(req: NextApiRequest, res: ResponseType) {
  if (notAllowed(["POST", "PUT", "DELETE", "PATCH"], req)) {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const requestCompanyId = req.query.id;
  if (!requestCompanyId || typeof requestCompanyId !== "string") {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  const { getCompanyById } = describeHubspot();
  const company = await getCompanyById(requestCompanyId);
  res.status(200).json({ company: company });
}
