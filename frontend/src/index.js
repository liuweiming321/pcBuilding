import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
      <Suspense fallback={<div>Loading ~~~</div>}>
        <App />
      </Suspense>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
