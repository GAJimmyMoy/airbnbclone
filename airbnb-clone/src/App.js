import Home from "./Home";
import Header from "./Header";
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/*Home*/}
      {/*Header*/}
      {/*banner*/}
      {/* search  */}
      {/*cards*/}
      {/*footer*/}
      {/* search page */}
    </div>
  );
}

export default App;
