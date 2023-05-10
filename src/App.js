import React, {useState, useEffect} from "react";
import "./App.css";
import Timer from "./Timer";
import Login from "./Login";
import WebPlayback from "./WebPlayback";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">About</header>
      <Timer />

      <>{token === "" ? <Login /> : <WebPlayback token={token} />}</>
    </div>
  );
}

export default App;
