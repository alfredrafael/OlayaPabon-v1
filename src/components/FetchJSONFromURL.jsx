import React, { useState } from "react";

function FetchJSONFromURL() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      setData(json);
      setError(null);
    } catch (error) {
      setError("Error fetching data");
    }
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFetchClick = () => {
    fetchData();
  };

  const handleCopyClick = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    }
  };

  return (
    <div id="FetchJSONFromURL">
      <div style={{ display: "inline" }}>
        <input
          type="text"
          id="url"
          value={url}
          placeholder="Enter URL here"
          onChange={handleUrlChange}
        />
        <button onClick={handleFetchClick}>Fetch JSON Data</button>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        data && (
          <div
            class="displayed-json"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "31%",
            }}
          >
            <textarea
              rows={10}
              cols={50}
              value={JSON.stringify(data, null, 2)}
              readOnly
              class="json-output"
            />
            <button onClick={handleCopyClick}>Copy JSON to clipboard</button>
          </div>
        )
      )}
    </div>
  );
}

export default FetchJSONFromURL;
