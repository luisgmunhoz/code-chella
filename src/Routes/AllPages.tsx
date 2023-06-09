import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Experience } from "../pages/Experience";
import { SectorMap } from "../pages/SectorMap";
import { Information } from "../pages/Information";
import { BuyTicket } from "../pages/BuyTicket";
import { Ticket } from "../pages/Ticket";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiencia" element={<Experience />} />
      <Route path="/setores" element={<SectorMap />} />
      <Route path="/informacoes" element={<Information />} />
      <Route path="/compraringresso" element={<BuyTicket />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
}
