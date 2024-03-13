import { createContext, useState } from "react";

const exampleContext = createContext();

const ExampleProvider = (text) => {
  const [example, setExample] = useState();

  return (
    <exampleContext.Provider value={{ example, setExample }}>
      {text}
    </exampleContext.Provider>
  );
};

export { exampleContext, ExampleProvider };
