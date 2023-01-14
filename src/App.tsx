import React from 'react';
import './App.css';
import {GoogleLoginButton, getAccount} from "erc-4337-react-login/src";

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

function App() {
  window.handleCredentialResponse = async () => { 
    console.log("handleCredentialResponse")

    const account = await getAccount(config)
    console.log(account)
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Get Simple Adress on Google Login</div>
        <GoogleLoginButton clientId="247332257621-9rev3pq5eef71olb55jvu8b2gkbd5c1h.apps.googleusercontent.com" 
          callbackFunction="handleCredentialResponse" />
      </header>
    </div>
  );
}

export default App;
