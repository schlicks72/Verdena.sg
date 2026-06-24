
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import PrivacyPolicy from "./app/PrivacyPolicy.tsx";
  import "./styles/index.css";

  // Lightweight path-based routing. The server's SPA fallback serves index.html
  // for every non-API route, so a direct load of /privacy renders here.
  const path = window.location.pathname.replace(/\/+$/, "");
  const Page = path === "/privacy" ? PrivacyPolicy : App;

  createRoot(document.getElementById("root")!).render(<Page />);
