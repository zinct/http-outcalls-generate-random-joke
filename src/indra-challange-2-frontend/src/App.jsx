import { useState } from "react";
import { indra_challange_2_backend } from "declarations/indra-challange-2-backend";

function App() {
  const [joke, setJoke] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    indra_challange_2_backend.generate_joke(firstData).then((greeting) => {
      const parsed = JSON.parse(greeting);
      setJoke(parsed.joke);
    });
    return false;
  }

  return (
    <main>
      <h1>Random Joke</h1>
      <div>
        <h1>Generate Random Joke</h1>
        <br />
        <button onClick={handleSubmit}>Random Joke</button>
      </div>
      <div>Result: {joke}</div>
    </main>
  );
}

export default App;
