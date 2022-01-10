import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { auth } from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat/Chat";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      navigate("/lobby");
    }
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lobby" element={<Chat />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
