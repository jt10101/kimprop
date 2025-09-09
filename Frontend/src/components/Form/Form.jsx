import styles from "./Form.module.css";

const InputForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="oa">CPF OA Balance</label>
        <input type="number" id="oa" name="oa" />

        <label htmlFor="cash">Cash</label>
        <input type="number" id="cash" name="cash" />

        <label htmlFor="outstandingloan">Outstanding Loan</label>
        <input type="number" id="outstandingloan" name="outstandingloan" />

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export { InputForm };
