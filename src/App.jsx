// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AIChat from "./components/common/AIChat";
// import Preloader from "./components/common/Preloader"; // Removed Preloader import

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          {/* {isLoading ? (
            <Preloader onComplete={() => setIsLoading(false)} />
          ) : ( */}
          <AppRoutes />
          <AIChat />
          {/* )} */}
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
