import { BrowserRouter, Routes, Route }
from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Tournaments from './pages/Tournaments'
import TeamTrials from './pages/TeamTrials'
import TrialSession from './pages/TrialSession'
import Profile from './pages/Profile'
import GameBreakdown from './pages/GameBreakdown'
import TrialBreakdown from './pages/TrialBreakdown'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/team-trials" element={<TeamTrials />}/>
      <Route path="/trial-session" element={<TrialSession />}/>
      <Route path="/game-breakdown" element={<GameBreakdown />}/>
      <Route path="/trial-breakdown" element={<TrialBreakdown />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App