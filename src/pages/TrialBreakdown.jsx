import Layout from '../components/layout'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { calculateStrikePct, calculateSparePct, calculateSinglePinSparePct, calculateMakeableSparePct, getMostCommonLeaves, calculateAverage, calculateHighGame} from "../utils/bowlingStats"

function TrialBreakdown() {
    

    const currentTrial = JSON.parse(localStorage.getItem("currentTrial"))

    console.log(currentTrial)



    const location = useLocation()
    const games = currentTrial?.games || []

    const totalPins = games.reduce((sum, game) => sum + game.score, 0)
    

    const gamePer = [
        {stat: "Single Pin", num: calculateSinglePinSparePct(games)},
        {stat: "Strike", num: calculateStrikePct(games)},
        {stat: "Spare", num: calculateSparePct(games)},
        {stat: "Makeable", num: calculateMakeableSparePct(games)}
    ]

    const leaves = getMostCommonLeaves(games)

    return (
<Layout>
        <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6 gap-6 flex flex-col">
            
            <h1 className = "text-slate-700 text-4xl font-bold items text-center">
                Trial Breakdown
            </h1>
            <div className="grid grid-cols-2 gap-4 gap-x-48 gap-y-4 max-w-md mx-auto">
                <div><p className = "text-slate-700 font-bold">Bowler: {currentTrial?.bowler}</p></div>
                <div><p className = "text-slate-700 font-bold">Games: {currentTrial?.gamesCompleted}/{currentTrial?.gamesRequired}</p></div>
                <div><p className = "text-slate-700 font-bold">Status: {currentTrial?.status}</p></div>
                <div><p className = "text-slate-700 font-bold">Average: {calculateAverage(games)}</p></div>
                <div><p className = "text-slate-700 font-bold">High Game: {calculateHighGame(games)}</p></div>
            </div>
            <div className="text-center mb-6 mt-6">
                <h2 className="text-lg font-bold text-slate-700 text-center">Series Total</h2>
                <p className="text-4xl font-bold text-slate-700 text-center">{totalPins}</p>    
            </div>
            <div className="flex items-center mt-8 mb-6">
            <div className = "flex-1 border-t border-[#880011]"></div>
            <h2 className="text-2xl font-bold text-slate-700 px-4">Game Scores: </h2>
             <div className = "flex-1 border-t border-[#880011]"></div>
            </div>
            <div className="max-w-md mx-auto space-y-2">
                {games.map((game, index) => (
                <Link key={index} to="/game-breakdown" state={{ game }}>
                    <div key={index} className= "grid grid-cols-2 items-center w-full border border-[#C9B07A] rounded-lg px-4 py-3 font-bold text-slate-700 bg-white hover:bg-slate-100 transition">
                    <span>Game {index + 1}: </span>
                    <span className="text-xl font-bold text-right">{game.score}</span>    
                    </div>
                </Link>
    ))}
    </div>
                <div className="flex items-center mt-8 mb-6">
                <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className="text-2xl font-bold text-slate-700 px-4">Common Pin Leaves:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                    </div>
                    <div>
                    <div className="grid grid-cols-2 gap-x-48 gap-y-4 max-w-md mx-auto">
                    {leaves.map(([leave, count], index)=>(
                                <div key={index} className="font-bold text-slate-700">
                                    <p>{leave} → {count}</p>
                                    </div>
                    ))}
                    </div>
                    <div className="flex items-center mt-8 mb-6">
                    <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className=" text-2xl font-bold text-slate-700 px-4">Performance Breakdown:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                     </div>
                    <div className="grid grid-cols-2 gap-x-48 gap-y-4 max-w-md mx-auto">
                    {gamePer.map((stat, index)=>(
                        <div key={index} className="font-bold text-slate-700">
                            <p>{stat.stat}: {stat.num}%</p>
                            </div>
                    ))}
                    </div>
                        <div className ="grid grid-cols-3 items-center mt-8">
                        <div className="justify-self-start">
                        <Link to = "/team-trials" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition ">Trials Homepage</Link>
                        </div>
                        <div className="justify-self-center"></div>
                        <div className="justify-self-end">
                        <Link to = "/" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition">Main Dashboard</Link>
                        </div>
                     </div>
                     </div>                    
        </div>
</Layout>
    )
}
export default TrialBreakdown