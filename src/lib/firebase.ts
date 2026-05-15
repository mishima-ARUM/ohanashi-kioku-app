import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMWXkkUN6yvy1xz1CDRIt2bPim9E-gAis",
  authDomain: "ohanashi-kioku.firebaseapp.com",
  projectId: "ohanashi-kioku",
  storageBucket: "ohanashi-kioku.firebasestorage.app",
  messagingSenderId: "37636373895",
  appId: "1:37636373895:web:1e94d24564b836b336a722",
  measurementId: "G-J8L50M69ZR"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
