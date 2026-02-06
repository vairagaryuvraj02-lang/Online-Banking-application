import { useState } from "react";
import api from "../services/api";

function AccountDetails() {
  const [id, setId] = useState("");
  const [account, setAccount] = useState(null);

  const fetchAccount = async () => {
    const response = await api.get(`/accounts/${id}`);
    setAccount(response.data);
  };

  return (
    <div className="card">
      <h3>Account Details</h3>
      <input
        placeholder="Account ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchAccount}>Fetch</button>

      {account && (
        <div>
          <p><b>Name:</b> {account.accountHolderName}</p>
          <p><b>Balance:</b> ₹{account.balance}</p>
        </div>
      )}
    </div>
  );
}

export default AccountDetails;
