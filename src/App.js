import { useState, useEffect, useCallback } from "react";
import NotFound from "./components/NotFound/NotFound";
import DashboardLayout from "./layout/dashboardLayout";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className="font-manrope container">
      {windowSize < 950 ? <NotFound /> : <DashboardLayout />}
    </div>
  );
}

export default App;
