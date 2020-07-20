const firebase = require("firebase/app");
require("firebase/firestore");

const fsConfig = {
  apiKey: "AIzaSyAcyR3QtYj5-pGoysmCtWfMaNRyga4dlfQ",
  authDomain: "file-memo-b47b6.firebaseapp.com",
  databaseURL: "https://file-memo-b47b6.firebaseio.com",
  projectId: "file-memo-b47b6",
  storageBucket: "file-memo-b47b6.appspot.com",
  messagingSenderId: "1046979830897",
  appId: "1:1046979830897:web:46997ce4176f866d83a7d0",
  measurementId: "G-PL8ETG1CY5",
};

firebase.initializeApp(fsConfig);

const firestore = new firebase.firestore();

module.exports = firestore;
