import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import Home from "./pages/Home";
import Pacotes from "./pages/Pacotes";
import Oficinas from "./pages/Oficinas";
import QuemSomos from "./pages/QuemSomos";
import Corporativo from "./pages/Corporativo";
import Contato from "./pages/Contato";
import Contratar from "./pages/Contratar";
import GuiaParaPais from "./pages/GuiaParaPais";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pacotes" element={<Pacotes />} />
              <Route path="/oficinas" element={<Oficinas />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/corporativo" element={<Corporativo />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/contratar" element={<Contratar />} />
              <Route path="/guia-para-pais" element={<GuiaParaPais />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
