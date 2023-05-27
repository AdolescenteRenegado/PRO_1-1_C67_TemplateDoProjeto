import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA15WYZ7OcB6eIDViXpq5g-mmBdh8qGtNU",
  authDomain: "votacao-lula-vs-bolsonaro.firebaseapp.com",
  databaseURL: "https://votacao-lula-vs-bolsonaro-default-rtdb.firebaseio.com",
  projectId: "votacao-lula-vs-bolsonaro",
  storageBucket: "votacao-lula-vs-bolsonaro.appspot.com",
  messagingSenderId: "106956140099",
  appId: "1:106956140099:web:e09f716457586b1720eef6"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
