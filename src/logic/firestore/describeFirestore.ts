import { db } from "@/logic/firestore/init";

export const createData = async () => {
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc: any) => {
    console.log(doc.id, "=>", doc.data());
  });
};
