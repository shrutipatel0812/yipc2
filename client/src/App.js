import React from "react";
import { Header } from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Ourteam from "./components/Ourteam";
import Recruiter from "./components/Recruiter";
import Seeker from "./components/Seeker";
import * as ReactRouterDOM from "react-router-dom";
import axios from "axios";
const { BrowserRouter, Switch, Route } = ReactRouterDOM;
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ourteam" exact component={Ourteam} />
          <Route path="/recruiter" exact component={Recruiter} />
          <Route path="/opportunityseeker" exact component={Seeker} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
