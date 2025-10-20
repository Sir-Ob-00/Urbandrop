// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Preloader from "./components/common/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show preloader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          {isLoading ? (
            <Preloader onComplete={() => setIsLoading(false)} />
          ) : (
            <AppRoutes />
          )}
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
