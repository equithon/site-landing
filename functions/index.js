// [START all]
// [START import]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();
// [END import]

// [START addMessage]
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:documentId/original
// [START addMessageTrigger]
exports.mailingListSignUp = functions.https.onCall((data, context) => {
  // [END addMessageTrigger]
  // Grab the text parameter.
  const email = data.text;
  // [START adminSdkAdd]
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin
    .firestore()
    .collection('mailinglist')
    .add({ email: email });
  // [END adminSdkAdd]
});
// [END addMessage]
// [END all]
