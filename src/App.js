import React from "react";
import { useRecoilValue } from "recoil";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { resultState } from "./utils/state";

import Search from "./containers/search";
import Result from "./containers/result";

function App() {
  const result = useRecoilValue(resultState);
  return (
    <Router>
      <Route exact path="/" component={Search} />
      <Route
        exact
        path="/result"
        render={props =>
          result.length === 0 ? <Redirect to="/" /> : <Result {...props} />
        }
      />
    </Router>
  );
}

export default App;
