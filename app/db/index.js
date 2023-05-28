const admin = require("firebase-admin");
const { firebaseConfig } = require("../config");
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const db = admin.firestore();

module.exports = db;
