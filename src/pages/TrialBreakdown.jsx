import Layout from '../components/layout'
import { Link } from 'react-router-dom'

function TrialsBreakdown() {
    const sessionInfo ={
        bowler:"Alex",
        date:"5/29"
    }

    const score=[
        {game: 1, score:192},
        {game: 2, score:215},
        {game: 3, score:174}


    ]

    const trialPer = [
        {stat: "Single Pin", num: 67},
        {stat: "Strike", num:50},
        {stat: "Spare", num:83},
        {stat: "Pocket", num:70}
    ]

    const leaves = [
        {leave:"10", count:2},
        {leave:"2-4", count:1},
        {leave:"3-10", count:1},
        {leave:"2-4-5-8", count:1}
    ]
    
    const series = score.reduce(
        (total, game) => total + game.score, 0)

    const high = Math.max(...score.map(game => game.score))
    return (
<Layout>
        <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6 gap-6 flex flex-col">
            
            <h1 className = "text-slate-700 text-4xl font-bold items text-center">
                Trial Breakdown
            </h1>
            <div className="grid grid-cols-2 gap-4 gap-x-48 gap-y-4 max-w-md mx-auto">
                <div><p className = "text-slate-700 font-bold">Game {sessionInfo.game}</p></div>
                <div><p className = "text-slate-700 font-bold">Date: {sessionInfo.date}</p></div>
                <div><p className = "text-slate-700 font-bold">Series Total: {series}</p></div>
                <div><p className = "text-slate-700 font-bold">High Game: {high}</p></div>

            </div>
            <div className="flex items-center mt-8 mb-6">
            <div className="flex-1 border-t border-[#880011]"></div>
                <h2 className="font-bold text-center text-3xl text-slate-700 px-4">Trial Scores</h2>
                <div className="flex-1 border-t border-[#880011]"></div>
                </div>
                <div className="flex justify-center gap-4">
                {score.map((game, index)=>(
                    <div key={index} className="font-bold text-2xl text-slate-700">
                    <p>{game.score}</p>
                    </div>
                ))}
                </div>
                <div className="flex items-center mt-8 mb-6">
                <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className="text-2xl font-bold text-slate-700 px-4">Common Pin Leaves:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-48 gap-y-4 max-w-md mx-auto">
                    {leaves.map((leave,index)=>(
                                <div key={index} className="font-bold text-slate-700">
                                    <p>{leave.leave} → {leave.count}</p>
                                    </div>
                    ))}
                    </div>
                    <div className="flex items-center mt-8 mb-6">
                    <div className="flex-1 border-t border-[#880011]"></div>
                    <h2 className=" text-2xl font-bold text-slate-700 px-4">Performance Breakdown:</h2>
                     <div className = "flex-1 border-t border-[#880011]"></div>
                     </div>
                    <div className="grid grid-cols-2 gap-x-48 gap-y-4 max-w-md mx-auto">
                    {trialPer.map((stat, index)=>(
                        <div key={index} className="font-bold text-slate-700">
                            <p>{stat.stat}: {stat.num}%</p>
                            </div>
                    ))}
                    </div>
                        <div className ="grid grid-cols-2 items-center mt-8">
                        <div className="justify-self-center">
                        <Link to = "/team-trials" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition w-30 text-center">Trials</Link>
                        </div>
                        <div className="justify-self-center whitespace-nowrap">
                        <Link to = "/" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition w-30 text-center">Dashboard</Link>
                        </div>
                     </div>                   
        </div>
</Layout>
    )
}
export default TrialsBreakdown