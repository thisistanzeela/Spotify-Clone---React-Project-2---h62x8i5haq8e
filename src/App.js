import React from "react";
import Sidebar from "../src/components/Sidebar";
import BottomBar from "../src/components/BottomBar/Player";
import Content from "../src/components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router> {/* This is the outer Router */}
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
        <BottomBar />
      </Router>
    </>
  );
}

export default App;
