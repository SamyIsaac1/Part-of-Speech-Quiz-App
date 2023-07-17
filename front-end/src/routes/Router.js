import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Practice from "../pages/Practice";
import Rank from "../pages/Rank";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Start />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
