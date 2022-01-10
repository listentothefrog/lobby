import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (authToken) {
      navigate("/lobby");
    }
    if (!authToken) {
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
