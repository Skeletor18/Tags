import { useState } from "react";
import "./style.css";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([
    {
      text: "PHP",
    },

    {
      text: "JavaScript",
    },

    {
      text: "TypeScript",
    },
  ]);

  const addTags = () => {
    setTags([
      ...tags,
      {
        text: value,
      },
    ]);
    setValue("");
  };

  const errorBlur = () => {
    if (!value) {
      setError(true);
    }
  };

  const deleteTag = (id) => {
    const resultDelete = tags.filter((item, index) => id !== index);
    setTags(resultDelete);
  };

  return (
    <header>
      <h1 className="glitch-text">ADDING TAGS</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onBlur={errorBlur}
          type="text"
          placeholder="Введите текст..."
          value={value}
          onChange={(e) => setValue(e.target.value)(setError(false))}
        />
        <button type="submit" disabled={!value} onClick={addTags}>
          Добавить
        </button>
      </form>
      {error && (
        <div className="error_text">Поле ввода не должно быть пустым...</div>
      )}
      <div className="tags">
        {tags.map((item, index) => {
          return (
            <div className="tag_text" key={index}>
              <span>{item.text}</span>
              <button onClick={() => deleteTag(index)}>✖</button>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default App;
