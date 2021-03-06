import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBHtyWOYaXyVM9e6ff-YAezXOJhUzs8-KY",
  authDomain: "react-chat-97759.firebaseapp.com",
  projectId: "react-chat-97759",
  storageBucket: "react-chat-97759.appspot.com",
  messagingSenderId: "202379867536",
  appId: "1:202379867536:web:5609217224344ba7646f15",
  measurementId: "G-JQRHTDWTKQ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={SignInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  return (
    <h1>ChatRoom</h1>
  )
}

export default App;
