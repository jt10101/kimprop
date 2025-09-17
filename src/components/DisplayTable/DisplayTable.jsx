import { useEffect, useState } from "react";

const DisplayTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://script.google.com/macros/s/AKfycbyUpHoJcz0DPgrL4MGlqQzj_6-r_bA8B93RZJGFTI_0EG1Ov9P3H-La6RxOmGJhRF3qXw/exec" +
      "?callback=handleSheetData";
    document.body.appendChild(script);

    window.handleSheetData = (data) => {
      setRows(data);
    };

    return () => {
      delete window.handleSheetData;
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Sheet Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>OA</th>
            <th>Cash</th>
            <th>Outstanding Loan</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.OA}</td>
              <td>{row.Cash}</td>
              <td>{row.OutstandingLoan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { DisplayTable };
