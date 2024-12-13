import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { useState } from "react";
import { Data } from "./Store/Data";

function App() {
  const [front, setFront] = useState(true);
  return (
    <Data>
      <div
        className={`h-screen flex flex-col ${
          front ? "bg-cover bg-center opacity-80 bg-scroll" : "bg-slate-800"
        }`}
        style={front ? { backgroundImage: "url('images/jungle.jpg')" } : {}}
      >
        <Header />
        <MainContent value={setFront} front={front} />
        {!front && <Outlet />}
      </div>
    </Data>
  );
}

export default App;
