import logo from "./logo.svg";
import "./App.css";
import {Fragment} from "react";
import Out from "./Out";
import Appbar from "./components/Header";
import Header from "./components/Header";
import {createTheme, ThemeProvider} from "@mui/material";
import Main from "./components/Main";


function App() {
  return (
    
    <>
      <Header/>
      <Main/>
    </>
  
  );
}

export default App;
