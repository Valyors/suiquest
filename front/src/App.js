import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Page404 from './pages/404/404';
import Quest from './pages/Quest/Quest';
import NewHome from './pages/NewHome/NewHome';
import Quests from './pages/Quests/Quests';
import Missions from './pages/Missions/Missions';

function App({ code }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/anime" element={<Home />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/missions" element={<Missions />} />
        <Route path='/quest' element={<Quest title="Quest Title" description="Quest Description" reward="Quest Reward" />} />
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
