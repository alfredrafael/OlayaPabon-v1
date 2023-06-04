import "./app.css";
import JSONToCSVConverter from "./components/JSONToCSVConverter";
import FetchJSONFromURL from "./components/FetchJSONFromURL";

function App() {
  return (
    <div id="app">
      <header class="header">
        <h3>OlayaPabon v0.1</h3>
      </header>
      <main>
        <FetchJSONFromURL />
        <JSONToCSVConverter />
      </main>
    </div>
  );
}

export default App;
