import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="max-w-full min-h-vh">
      <Outlet />
    </main>
  );
}

export default App;
