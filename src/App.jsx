import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Providers } from "./store";
import { Routing } from "./Routing/Routing";

export const App = () => (
  <Providers>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Providers>
);
