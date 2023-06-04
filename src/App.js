import "./app.css";
import JSONToCSVConverter from "./components/JSONToCSVConverter";
import FetchJSONFromURL from "./components/FetchJSONFromURL";

function App() {
  return (
    <div id="app">
      <header class="header">
        <h3>OlayaPabon v0.1</h3>
        <span>
          <h3>
            <a
              href="https://github.com/alfredrafael/OlayaPabon-v1/tree/main/src"
              target="_blank"
            >
              Github Code
            </a>
          </h3>
          <h3>
            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
            >
              Exmple URL
            </a>
          </h3>
        </span>
      </header>
      <main>
        <p
          className="mobile-disclaimer"
          style={{ textAlign: "center", marginBottom: "2em", color: "red" }}
        >
          Por favor, usa desktop porque este App no está optimizado para
          móbiles. Es super MVP
        </p>
        <FetchJSONFromURL />
        <JSONToCSVConverter />
      </main>
    </div>
  );
}

export default App;
//
