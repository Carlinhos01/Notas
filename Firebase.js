import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXdXYyjqEAdtjA3c7ku3MkGzhZIsIijWI",
  authDomain: "notasbd-185cb.firebaseapp.com",
  projectId: "notasbd-185cb",
  storageBucket: "notasbd-185cb.appspot.com",
  messagingSenderId: "669084094187",
  appId: "1:669084094187:web:3f0f91950b5c0c4a5b38ae"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);