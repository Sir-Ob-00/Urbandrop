// src/layouts/SimpleLayout.jsx
import { Outlet } from "react-router-dom";

const SimpleLayout = () => {
  return (
    <div className="min-h-screen bg-[#f2f5f9] text-dark font-sans">
      <main className="py-10 px-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SimpleLayout;
