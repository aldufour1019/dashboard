import Layout from '../components/layout'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { calculateStrikePct, calculateSparePct, calculateSinglePinSparePct, calculateMakeableSparePct, getMostCommonLeaves} from "../utils/bowlingStats"

function GameBreakdown() {
    

    const currentTrial = JSON.parse(localStorage.getItem("currentTrial"))



    const location = useLocation()
    const game = location.state?.game

    const frameHistory = game?.frameHistory || Array(10).fill("")
    
    const frameScores = game?.frameScores || Array(10).fill(0)

    const splitFrames = game?.splitFrames || []

    const shotHistory = game?.shotHistory || {}

    const rolls = game?.rolls || []
    

    const gamePer = [
        {stat: "Single Pin", num: calculateSinglePinSparePct(game)},
        {stat: "Strike", num: calculateStrikePct(game)},
        {stat: "Spare", num: calculateSparePct(game)},
        {stat: "Makeable", num: calculateMakeableSparePct(game)}
    ]

    const notes = game?.notes || {}

    const leaves = getMostCommonLeaves(game)

    return (
<>
        <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6 gap-6 flex flex-col">
            
            <h1 className = "text-slate-700 text-4xl font-bold items text-center">
                Game Breakdown
            </h1>
            <div className="grid grid-cols-2 gap-4 gap-x-48 gap-y-4 max-w-md mx-auto">
                <div><p className = "text-slate-700 font-bold">Game {currentTrial?.game}</p></div>
                <div><p className = "text-slate-700 font-bold">Final Score: {game?.score}</p></div>
                <div><p className = "text-slate-700 font-bold">Date: {new Date(game?.date).toLocaleDateString()}</p></div>
            </div>
            <div className="flex items-center mt-8 mb-6">
            <div className = "flex-1 border-t border-[#880011]"></div>
            <h2 className="text-2xl font-bold text-slate-700 px-4">Frame Breakdown: </h2>
             <div className = "flex-1 border-t border-[#880011]"></div>
            </div>
            <div className="flex justify-center gap-2">
                {frameHistory.map((frame,index)=>(
                    <div key={index} className="w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-slate-700 bg-white">
                    {frame}    
                    </div>
                ))}
                </div>
                <p className="text-slate-700">{frameScores.join(" | ")}</p>
                <div className="flex items-center mt-8 mb-6">
                <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className="text-2xl font-bold text-slate-700 px-4">Common Pin Leaves:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                    </div>
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
                    <div className="flex items-center mt-8 mb-6">
                    <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className=" text-2xl font-bold text-slate-700 px-4">Notes:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                     </div>
                     <div className="text-slate-700">
                        {Array.from({ length: 10 }, (_, i) =>(
                            <div key={i} className="flex justify-between border-b py-2 gap-4">
                            <p>Frame {i + 1}:</p> <p className="max-w-[60%] text-right break-words">{notes[i+1] || "-"}</p>
                            </div>
                        ))}
                        <div className ="grid grid-cols-3 items-center mt-8">
                        <div className="justify-self-start">
                        {currentTrial?.gamesCompleted < currentTrial?.gamesRequired ?  (
                        <Link to = "/trial-session" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition ">Start Next Game</Link>
                        ) : (
                            <Link to = "/trial-breakdown" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition ">Trial Recap</Link>
                        )}
                        </div>
                        <div className="justify-self-center">
                        <Link to = "/team-trials" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition ">Trials Homepage</Link>
                        </div>
                        <div className="justify-self-end">
                        <Link to = "/" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition">Back to Dashboard</Link>
                        </div>
                     </div>
                     </div>                    
        </div>
</>
    )
}
export default GameBreakdown