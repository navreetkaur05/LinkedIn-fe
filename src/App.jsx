import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "./pages/People";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import JoinNow from "./pages/JoinNow";
import Feed from "./pages/Feed";
import TopContent from "./pages/TopContent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element= {<Signin />}/>
        <Route path="/signup" element= {<JoinNow />}/>
        <Route path="/feed" element= {<Feed />}/>
        <Route path="/people" element={<People />} />
        <Route path="/topcontent" element={<TopContent />} />

      </Routes>
    </>
  );
};

export default App;
