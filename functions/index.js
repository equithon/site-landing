const firebase = require('firebase');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
require('firebase/firestore');

const express = require('express');
const cors = require('cors');

/* ----------- INITIALIZE FIREBASE APP ----------- */
const config = {
  apiKey: 'AIzaSyBqfsxK5YJ44FRi_8mJtR3HiorXKtYzKM0',
  authDomain: 'equithon-platform-2019.firebaseapp.com',
  databaseURL: 'https://equithon-platform-2019.firebaseio.com',
  projectId: 'equithon-platform-2019',
  storageBucket: 'equithon-platform-2019.appspot.com',
  messagingSenderId: '740846697122'
};
admin.initializeApp(config);
firebase.initializeApp(config);
let db = firebase.firestore();
let mailingListCollection = db.collection('mailinglist');

/* ----------- INITIALIZE EXPRESS APP ----------- */
const app = express();
app.use(cors({ origin: true }));

/* ----------- ENDPOINTS FOR API ----------- */
// GET ALL MAILING LIST SIGNUPS
app.get('/signups', (req, res) => {
  mailingListCollection
    .get()
    .then(mailingList => {
      let allSignups = mailingList.docs.map(doc => doc.data());
      res.status(200).json(allSignups); // got snapshot, return all products
      return true; // successfully fetched signups
    })
    .catch(err => console.log(err));
});

/* ----------- EXPORT API AS FUNCTION ----------- */
exports.mainAPI = functions.https.onRequest(app);
