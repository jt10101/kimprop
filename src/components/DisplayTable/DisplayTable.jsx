import { useEffect, useState } from "react";

const DisplayTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxKiM1swxAfj6uffIV1WCzbSHhkWEEwgne7WLir9aVRbq6ZjPyqmnBMQ5DucQ4IA2-I7Q/exec"
        );
        const data = await response.json();
        setRows(data);
      } catch (err) {
        console.error("Error fetching sheet data:", err);
      }
    };

    fetchData();
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
