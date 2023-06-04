import React, { useState, useRef } from "react";

function jsonToCSV(jsonData) {
  // Extracting unique column headers from JSON keys
  const columnHeaders = Object.keys(jsonData[0]);

  // Creating the CSV header row
  const csvHeader = columnHeaders.join(",");

  // Creating the CSV data rows
  const csvRows = jsonData.map((data) => {
    const rowValues = columnHeaders.map((header) => data[header]);
    return rowValues.join(",");
  });
  // Combining the header and data rows
  const csvData = [csvHeader, ...csvRows].join("\n");

  return csvData;
}

function JSONToCSVConverter() {
  const [jsonData, setJsonData] = useState("");
  const [csvData, setCSVData] = useState("");
  const csvRef = useRef(null);

  const handleJsonInputChange = (event) => {
    setJsonData(event.target.value);
  };

  const handleConvertClick = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const convertedCSV = jsonToCSV(parsedData);
      setCSVData(convertedCSV);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  const handleCopyClick = () => {
    if (csvRef.current) {
      csvRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div id="JSONToCSVConverter">
      <textarea
        value={jsonData}
        onChange={handleJsonInputChange}
        rows={10}
        cols={50}
        placeholder="Enter your JSON data here..."
      />

      <button style={{ display: "block" }} onClick={handleConvertClick}>
        Convert to CSV
      </button>
      <textarea
        placeholder="CSV data will appear here"
        ref={csvRef}
        value={csvData}
        readOnly
        rows={10}
        cols={50}
      />

      <button style={{ display: "block" }} onClick={handleCopyClick}>
        Copy CSV data to Clipboard
      </button>
    </div>
  );
}

export default JSONToCSVConverter;
