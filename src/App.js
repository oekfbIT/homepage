import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LeagueDetail from "./pages/LeagueDetail";
import Landing from "./pages/Landing";
import PlayerDetail from "./pages/PlayerDetail";
import Impressium from "./pages/Impressium";
import LeagueOverview from "./pages/LeagueOverview";
import TeamDetail from "./pages/TeamDetail";
import Nationalteam from "./pages/Nationalteam";
import Ligaordnung from "./pages/Ligaordnung";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing":
        title = "Landing";
        metaDescription = "";
        break;
      case "/ligaordnung":
        title = "Ligaordnung";
        metaDescription = "";
        break;
      case "/player-detail":
        title = "Player Details";
        metaDescription = "";
        break;
      case "/impressium":
        title = "Impressium";
        metaDescription = "";
        break;
      case "/league-overview":
        title = "League Overview";
        metaDescription = "";
        break;
      case "/team-detail":
        title = "Team Detail";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/league-detail/:id" element={<LeagueDetail />} />
      <Route path="/player-detail" element={<PlayerDetail />} />
      <Route path="/impressium" element={<Impressium />} />
      <Route path="/ligaordnung" element={<Ligaordnung />} />
      <Route path="/league/:stateName" element={<LeagueOverview />} />
      <Route path="/team-detail/:id" element={<TeamDetail />} />
      <Route path="/news/:id" element={<BlogDetail />} />
      <Route path="/nationalteam" element={<Nationalteam />} />
      <Route path="/register" element={<Register />} />
      <Route path="/team/upload/:id" element={<Upload />} />
    </Routes>
  );
}
export default App;
