import StatsSection from '../components/StatsSection'
import Layout from '../components/layout'
import RecentGames from '../components/RecentGames'
import ProfileCard from '../components/ProfileCard.jsx'
import CommonLeaves from '../components/MostCommonLeaves.jsx'

function Dashboard() {

 return (
  <>
    
    <div className="flex justify-between items-center">
  <h1 className="text-4xl font-bold mb-8">Welcome Alex</h1>
   <div className="mt-4"><label className="text-[#FFFFFF] mr-2">Season</label>
    <select className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
    <option>Career</option>
    <option>26-27</option>
    <option>25-26</option>
    </select>
    </div>
</div>
    <ProfileCard />
   <StatsSection />
   <RecentGames />
   <CommonLeaves />
   </>
 ) 
}
export default Dashboard