import React from "react";
import Sidebar from "../src/components/Sidebar";
import BottomBar from "../src/components/BottomBar/Player";
import Content from "../src/components/Content";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './components/AuthContext'; 

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="wrapper">
          <Sidebar />
          <Content />
          <ToastContainer />
        </div>
        <BottomBar />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
