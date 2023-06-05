import "./app.css";
import JSONToCSVConverter from "./components/JSONToCSVConverter";
import FetchJSONFromURL from "./components/FetchJSONFromURL";
import Header from "./components/Header";
import MobileDisclaimer from "./components/MobileDisclaimer";

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <MobileDisclaimer />
        <FetchJSONFromURL />
        <JSONToCSVConverter />
      </main>
    </div>
  );
}

export default App;
//
