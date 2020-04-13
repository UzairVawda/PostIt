import config from "./firebaseConfig";
import fire from "firebase";

var firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
};
// Initialize Firebase
fire.initializeApp(firebaseConfig);
fire.analytics();

export const fireAuth = fire.auth();
