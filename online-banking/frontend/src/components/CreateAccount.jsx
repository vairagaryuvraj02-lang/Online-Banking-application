import { useState } from "react";
import api from "../services/api";

function CreateAccount() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const createAccount = async () => {
    await api.post("/accounts", {
      name,
      balance: Number(balance),
    });
    alert("Account created successfully");
    setName("");
    setBalance("");
  };

  return (
    <div className="card">
      <h3>Create Account</h3>
      <input
        placeholder="Account Holder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Initial Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <button onClick={createAccount}>Create</button>
    </div>
  );
}

export default CreateAccount;
