import CreateAccount from "./components/CreateAccount";
import AccountDetails from "./components/AccountDetails";
import TransactionForm from "./components/TransactionForm";
import TransferForm from "./components/TransferForm";

function App() {
  return (
    <div className="container">
      <h1>Online Banking Application</h1>

      <CreateAccount />
      <AccountDetails />
      <TransactionForm type="deposit" />
      <TransactionForm type="withdraw" />
      <TransferForm />
    </div>
  );
}

export default App;
