import { useState } from "react";
import api from "../services/api";

function TransactionForm({ type }) {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    await api.post(`/accounts/${id}/${type}`, {
      amount: Number(amount),
    });
    alert(`${type} successful`);
    setAmount("");
  };

  return (
    <div className="card">
      <h3>{type.toUpperCase()}</h3>
      <input
        placeholder="Account ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={submit}>{type}</button>
    </div>
  );
}

export default TransactionForm;
