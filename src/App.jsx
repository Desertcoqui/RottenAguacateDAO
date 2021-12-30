// eslint-disable-next-line
import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  //The connectWallet hook thirdweb gives us
  // eslint-disable-next-line
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);

  //If user does'nt connect their wallet if statement is triggered.

  if (!address) {
    return (
      <div className="landing">
        <h1>Rotten Aguacate</h1>
        <h2>|<em>Project Detres</em>|</h2>
        <h3>DAO</h3>
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
      <h1>|<><em>Project Detres</em></>|</h1>
      <h3>DAO</h3>
    </div>
  );
};

export default App;
