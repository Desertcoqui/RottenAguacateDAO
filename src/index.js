import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

//This imports ThirdWeb SDK
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

//Chains that are supported. 4= Rinkeby
const supportedChainIds = [4];

//Here is the type of wallet I decide to support
//We are using MetaMask which is an "injected wallet"

const connectors = {
  injected: {},
};

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
