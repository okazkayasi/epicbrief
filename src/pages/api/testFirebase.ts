import {
  createData,
  describeFirestore,
} from "@/logic/firestore/describeFirestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { getNextSteps } = describeFirestore();
  const snap = await getNextSteps("16492017392");
  res.status(200).json(snap);
}
