import { useState } from "react";
import api from "../services/api";

function TransferForm() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  const transfer = async () => {
    await api.post(
      `/accounts/transfer?fromId=${fromId}&toId=${toId}&amount=${amount}`
    );
    alert("Transfer successful");
  };

  return (
    <div className="card">
      <h3>Transfer Money</h3>
      <input
        placeholder="From Account ID"
        value={fromId}
        onChange={(e) => setFromId(e.target.value)}
      />
      <input
        placeholder="To Account ID"
        value={toId}
        onChange={(e) => setToId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={transfer}>Transfer</button>
    </div>
  );
}

export default TransferForm;
