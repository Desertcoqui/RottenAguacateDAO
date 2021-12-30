import { useEffect, useMemo, use } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  //The connectWallet hook thirdweb gives us
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);

  //If user does'nt connect their wallet if statement is triggered.

  if (!address) {
    return (
      <div className="landing">
        <h1>Rotten Aguacate</h1>
        <h2>Dao</h2>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet, Porfavor
        </button>
      </div>
    );
  }

  //Once user connects wallet we return this statement
  return (
    <div className="landing">
      <h1>Rotten Aguacate</h1>
      <h2>DAO</h2>
    </div>
  );
};

export default App;
