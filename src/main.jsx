import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./authProvider";
import { Structure } from "./structure";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Structure />
    </AuthProvider>
  </React.StrictMode>,
);
