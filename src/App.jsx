import './App.css'
import StatsSection from './components/StatsSection'
import Sidebar from './components/Sidebar'
import RecentGames from './components/RecentGames'

const bowler = {
  name:"Alex"
}



function App() {
 return (
   <div className="bg-gradient-to-br from-[#880011] via-[#616366] to-[#D3902F] min-h-screen text-white flex">
 <Sidebar />
  <div className="flex-1 p-10">
    <div className="flex justify-between items-center">
  <h1 className="text-4xl font-bold">Welcome {bowler.name}</h1>

  <div className="bg-[#F8F7F5] border border-[#C9B07A] px-4 py-2 rounded-xl">
    <p className="text-[#880011]">
      Alex
    </p>
  </div>
</div>
   <StatsSection />
   <RecentGames />
  </div>
  </div>
 ) 
}
export default App
