
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Realisations from "./pages/Realisations";
import Experiences from "./pages/Experiences";
import Projets from "./pages/Projets";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Contacts from "./pages/Contacts";
import Donation from "./pages/Donation";
import Partenaire from "./pages/Partenaire";
import Benevole from "./pages/Benevole";
import ProposerProjet from "./pages/ProposerProjet";
import Search from "./pages/Search";
import TeteaMazingira from "@/pages/TeteaMazingira";
import WatotoRadio from "@/pages/WatotoRadio";
import FRESE from "@/pages/FRESE";
import MushakuluFM from "@/pages/MushakuluFM";
import InjiliEverywhere from "@/pages/InjiliEverywhere";
import LEVERSGN from "@/pages/LEVERSGN";
import FamilyRecessCamp from "@/pages/FamilyRecessCamp";
import TeteaMedia from "@/pages/TeteaMedia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/departements" element={<Projets />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/partenaire" element={<Partenaire />} />
          <Route path="/benevole" element={<Benevole />} />
          <Route path="/proposer-projet" element={<ProposerProjet />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tetea-mazingira" element={<TeteaMazingira />} />
          <Route path="/watoto-radio" element={<WatotoRadio />} />
          <Route path="/frese" element={<FRESE />} />
          <Route path="/mushakulu-fm" element={<MushakuluFM />} />
          <Route path="/injili-everywhere" element={<InjiliEverywhere />} />
          <Route path="/leversgn" element={<LEVERSGN />} />
          <Route path="/family-recess-camp" element={<FamilyRecessCamp />} />
          <Route path="/tetea-media" element={<TeteaMedia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
