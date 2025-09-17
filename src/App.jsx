import { InputForm } from "./components/Form/Form";
import { DisplayTable } from "./components/DisplayTable/DisplayTable";
import { useState } from "react";

function App() {
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  return (
    <>
      <InputForm onSubmit={() => setLastUpdated(Date.now())} />
      <DisplayTable lastUpdated={lastUpdated} />
    </>
  );
}

export default App;
