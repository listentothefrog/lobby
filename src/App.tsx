import React, { Suspense } from "react";
import Login from "./components/Login/Login";
import { auth } from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat/Chat";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Suspense fallback="Loading...">{user ? <Chat /> : <Login />}</Suspense>
  );
}

export default App;
