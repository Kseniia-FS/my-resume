import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Summary from "./components/Summary/Summary";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";
import Navigation from "./components/Navigation/Navigation";
import Let from "./components/Let/Let";

function App() {
  return (
    <div className="App">
      <SideBar />
      <section>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Let />
          </Route>
          <Route path="/overview">
            <Summary />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/languages">
            <Languages />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
