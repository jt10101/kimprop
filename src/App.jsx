function App() {
  return (
    <>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="OA">CPF OA Balance</label>
        <input type="number" id="CPF" name="CPF" />

        <label for="Cash">Cash</label>
        <input type="number" id="Cash" name="Cash" />
      </form>
    </>
  );
}

export default App;
