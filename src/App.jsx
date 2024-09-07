import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <div className="font-inter min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path=":country" element={<Country />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
