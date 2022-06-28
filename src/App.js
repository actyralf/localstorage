import "./App.css";
import { useState } from "react";

const languages = [
  {
    key: "german",
    value: "Deutsch",
  },
  {
    key: "english",
    value: "Englisch",
  },
  {
    key: "spanish",
    value: "Spanisch",
  },
];

function App() {
  const [language, setLanguage] = useState("english");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <select value={language} onChange={handleChange}>
        {languages.map((language) => {
          return (
            <option value={language.key} key={language.key}>
              {language.value}
            </option>
          );
        })}
      </select>
      <p>Selected language: {language}</p>
    </div>
  );
}

export default App;
