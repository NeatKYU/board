import React from "react";
import "../App.css";
import HomePage from "./pages/Home";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";
import { ListProvider } from "../context/ListContext";
import { DecoProvider } from "../context/DecoSetContext";

function App() {
  return (
    <ListProvider>
      <DecoProvider>
        <div className="App">
          <Switch>
            <Route component={HomePage} exact path="/"></Route>
            <Route component={ListPage} path="/list"></Route>
            <Route component={WritePage} path="/write"></Route>
            <Route component={LoginPage} path="/login"></Route>
          </Switch>
        </div>
      </DecoProvider>
    </ListProvider>
  );
}

export default App;
