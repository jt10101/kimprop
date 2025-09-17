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

    const formData = new URLSearchParams();
    formData.append("name", formData.name);
    formData.append("oa", formData.oa);
    formData.append("cash", formData.cash);
    formData.append("outstandingloan", formData.outstandingloan);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyW6EKb0yjYwOujYO7cj_-TY1niJr09Pm0yYN8czGfyzVbm5RayzLZDPsVs2ahpMQuoqA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);
      alert("Form submitted!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* ✅ attach handler here */}
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
