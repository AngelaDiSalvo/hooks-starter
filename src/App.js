import React, { useRef, createContext } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fkae-cls")}>
          Level Up Dishes
        </h1>
        <Toggle />
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
    </UserContext.Provider>
  );
};

const formSubmit = (value, setValue) => {
  console.log(value, "email sent");
  setValue("");
};

export default App;
