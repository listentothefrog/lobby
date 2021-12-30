import React, { Suspense } from "react";
import Login from "./components/Login/Login";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Login />
    </Suspense>
  );
}

export default App;
