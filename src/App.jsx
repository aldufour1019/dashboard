import { BrowserRouter, Routes, Route }from 'react-router-dom'
import Layout from "./components/Layout"
import Dashboard from './pages/Dashboard'
import Tournaments from './pages/Tournaments'
import TeamTrials from './pages/TeamTrials'
import TrialSession from './pages/TrialSession'
import Profile from './pages/Profile'
import GameBreakdown from './pages/GameBreakdown'
import TrialBreakdown from './pages/TrialBreakdown'
import GameHistory from './pages/GameHistory'
import GameDetails from './pages/GameDetails'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/team-trials" element={<TeamTrials />}/>
      <Route path="/trial-session" element={<TrialSession />}/>
      <Route path="/game-breakdown" element={<GameBreakdown />}/>
      <Route path="/trial-breakdown" element={<TrialBreakdown />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/game-history" element={<GameHistory />}/>
      <Route path="/game-details" element={<GameDetails />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App