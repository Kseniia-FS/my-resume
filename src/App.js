import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Summary from "./components/Summary/Summary";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";

function App() {
  return (
    <div className="App">
      <SideBar />
      <section>
        <Summary />
        <Projects />
        <Work />
        <Education />
        <Languages />
      </section>
    </div>
  );
}

export default App;
