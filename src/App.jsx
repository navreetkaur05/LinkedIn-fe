import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "./pages/People";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import JoinNow from "./pages/JoinNow";
import Feed from "./pages/Feed";
import TopContent from "./pages/TopContent";
import GamesPage from "./pages/GamesPage";
import Learning from "./pages/Learning";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
            <Route path="/" element={<Home />} />
        </Route>

        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<JoinNow />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/people" element={<People />} />
        <Route path="/topcontent" element={<TopContent />} />
        <Route path="/gamespage" element={<GamesPage />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
};

export default App;
