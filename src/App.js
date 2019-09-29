import React, { useMemo, useRef } from "react";
import Toggle from "./Toggle";
import useTitleInput from "./hooks/useTitleInput";
import Counter from "./Counter";

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    console.log("fnc called");
    return word
      .split("")
      .reverse()
      .join("");
  };

  const title = "Angela Dishes";
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        {TitleReversed}
      </h1>
      <Toggle />
      <Counter />
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(value, "email sent");
  setValue("");
};

export default App;
