import React, { ReactElement } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { SellerHeader } from "./components/shared/SellerHeader";
import { getListing } from "./routes";

function App(): ReactElement {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <SellerHeader />
          <div className="bg-background flex flex-1">
            <div className="w-64">Left Menu placeholder</div>
            <div>
              <Switch>
                <Route path={getListing()}>Listing</Route>
                <Route>Default route TBD</Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
