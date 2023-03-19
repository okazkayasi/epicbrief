import { NextApiRequest } from "next";

export const notAllowed = (unallowedMethods: string[], req: NextApiRequest) =>
  !!(req.method && unallowedMethods.indexOf(req.method) !== -1);
