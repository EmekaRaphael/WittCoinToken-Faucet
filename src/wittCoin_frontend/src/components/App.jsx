import React from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import Footer from "./Footer.jsx";

function App() {

  return (
    <div>
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
      <Footer />
    </div>
  );
}

export default App;
