import { initializeApp } from 'firebase/app'
import { getFireStore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpG7ZDq8x8qwP0QaCQ3-_Inp4by5RNQHs",
    authDomain: "realstate-8e32b.firebaseapp.com",
    databaseURL: "https://realstate-8e32b-default-rtdb.firebaseio.com",
    projectId: "realstate-8e32b",
    storageBucket: "realstate-8e32b.appspot.com",
    messagingSenderId: "69969134520",
    appId: "1:69969134520:web:a643b414a9a8df6b0b854d"
  };

// init firebase app
const app = initializeApp(firebaseConfig)

// init services
const db = getFireStore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef).then(() => {
    console.log(snapshot.docs)
})