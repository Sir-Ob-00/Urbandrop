// src/App.jsx
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AIChat from "./components/common/AIChat";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToHash />
        <ErrorBoundary>
          <AppRoutes />
          <AIChat />
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
