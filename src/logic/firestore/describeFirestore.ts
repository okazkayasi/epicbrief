import { db } from "@/logic/firestore/init";
import { bound } from "@/logic/hubspot/describeHubspot";

export const createData = async () => {
  const snapshot = await db.collection("users").get();
  snapshot.forEach((doc: any) => {
    console.log(doc.id, "=>", doc.data());
  });
};

export function describeFirestore() {
  return bound({
    createOrUpdateNextSteps: async (meetingId: string, nextSteps: string) => {
      const docRef = db.collection("meetings").doc(meetingId);
      await docRef.set({
        nextSteps,
      });
      return {
        meetingId,
        nextSteps,
      };
    },
    getNextSteps: async (meetingId: string) => {
      const meetingRef = db.collection("meetings").doc(meetingId);
      const doc = await meetingRef.get();
      if (!doc.exists) {
        return {
          meetingId,
          nextSteps: "No Next Step Yet",
        };
      } else {
        return {
          meetingId,
          nextSteps: doc.data()?.nextSteps,
        };
      }
    },
  });
}
