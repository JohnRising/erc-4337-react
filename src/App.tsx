import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import {getSimpleAccount} from "./getSimpleAccount";

declare global {
  interface Window {
    handleCredentialResponse?: any;
  }
}

const config = {
  "bundlerUrl": "https://app.stackup.sh/api/v1/bundler/53d0330784afd774991fae557b292422f3671668e38b8b282cd30b81cd1d411e",
  "rpcUrl": "https://rpc-mumbai.maticvigil.com/",
  "signingKey": "0x094ddde528fa30e0ab36eaabc6256a7bc78fb2953d21d31447b9577f855e1795",
  "entryPoint": "0x1306b01bC3e4AD202612D3843387e94737673F53",
  "simpleAccountFactory": "0xc99963686CB64e3B98DF7E877318D02D85DFE326"
}


const helloWorld = () => {
    console.log("Hello World!")

    // console.log("Buffer:", Buffer)
    
    async function main() {
        const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
        const accountAPI = getSimpleAccount(
        provider,
        config.signingKey,
        config.entryPoint,
        config.simpleAccountFactory
        );
        const address = await accountAPI.getCounterFactualAddress();
    
        console.log(`SimpleAccount address: ${address}`);
    }
    
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}

// module.exports = { helloWorld };

// helloWorld()

function App() {
  window.handleCredentialResponse = () => { 
    console.log("handleCredentialResponse")
    helloWorld()
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Hi</div>
        <div id="g_id_onload"
          data-client_id="247332257621-9rev3pq5eef71olb55jvu8b2gkbd5c1h.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleCredentialResponse"
          data-auto_prompt="false">
        </div>

        <div className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="continue_with"
          data-size="large"
          data-logo_alignment="left">
        </div>
      </header>
    </div>
  );
}

export default App;
