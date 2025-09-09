import styles from "./Form.module.css";
import { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    oa: "",
    cash: "",
    outstandingloan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyLf_Qwxuay-_bNqBI9aOLMQnYtmYkiCq902QsYAChvG9X2dTwtW7PqjuRUaRh6cs-K5w/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        alert("Data saved to Google Sheets!");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending data.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="oa">CPF OA Balance</label>
        <input
          type="number"
          id="oa"
          name="oa"
          value={formData.oa}
          onChange={handleChange}
        />

        <label htmlFor="cash">Cash</label>
        <input
          type="number"
          id="cash"
          name="cash"
          value={formData.cash}
          onChange={handleChange}
        />

        <label htmlFor="outstandingloan">Outstanding Loan</label>
        <input
          type="number"
          id="outstandingloan"
          name="outstandingloan"
          value={formData.outstandingloan}
          onChange={handleChange}
        />

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export { InputForm };
