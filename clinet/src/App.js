import Messenger from "./componemt/Messenger";
import AccountProvider from "./context/AccountProvide";

function App() {
  return (
    <AccountProvider>
      <Messenger />
    </AccountProvider>
      
    
  );
}

export default App;
