import React, { Suspense } from "react";
import Login from "./components/Login/Login";
import { auth } from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat/Chat";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="Loading...">{user ? <Chat /> : <Login />}</Suspense>
      </header>
    </div>
  );
}

export default App;
