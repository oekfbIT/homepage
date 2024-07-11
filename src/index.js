import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Login from "@pages/Login";
import HomeScreen from "@pages/homepage";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@contexts/themeContext";
import { ShopProvider } from "@contexts/shopContext";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <ShopProvider>
           {/*<App />*/}
          {/*<Login />*/}
            <HomeScreen />
        </ShopProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
