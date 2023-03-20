const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("../../oguz-epicbrief-d338c3547be1.json");
try {
  initializeApp({
    credential: cert(serviceAccount),
  });
} catch (e) {
  console.log("Project already initialized");
}

export const db = getFirestore();
