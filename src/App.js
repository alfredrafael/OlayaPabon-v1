import "./app.css";
import JSONToCSVConverter from "./components/JSONToCSVConverter";
import FetchJSONFromURL from "./components/FetchJSONFromURL";

function App() {
  return (
    <div id="app">
      <header class="header">
        <div class="logo">
          <h3>OlayaPabon v0.1</h3>
        </div>
      </header>
      <main>
        <FetchJSONFromURL />
        <JSONToCSVConverter />
      </main>
    </div>
  );
}

export default App;
