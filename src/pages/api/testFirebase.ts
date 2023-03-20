import { createData } from "@/logic/firestore/describeFirestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  createData();
  res.status(200).json({});
}
