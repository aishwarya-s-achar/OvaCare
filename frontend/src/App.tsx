import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage';
import DietPlansPage from './pages/DietPlansPage';
import TrackerPage from './pages/TrackerPage';
// import CommunityChatPage from './pages/CommunityChatPage';
//import { CometChat } from "@cometchat-pro/chat";

function App() {
  // CometChat.init("YOUR_APP_ID", new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion("YOUR_REGION").build())
  // .then(() => {
  //   console.log("CometChat Initialized Successfully");
  // })
  // .catch((error) => {
  //   console.log("CometChat Initialization Failed", error);
  // });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detection" element={<DetectionPage />} />
        <Route path="/diet-plans" element={<DietPlansPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        {/* <Route path="/community" element={<CommunityChatPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
