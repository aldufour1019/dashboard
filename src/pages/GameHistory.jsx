import Layout from "../components/layout"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function GameHistory() {
    const games = 
    JSON.parse(localStorage.getItem("games")) || [] 

    
return (
    <Layout>
        <h1 className = "text-4x1 font-bold">Game History</h1>
    
    <div className = "mt-6 space-y-4">
        {games.map((game, index) => {
            const cleanFrames = game.frameHistory.filter (frame => frame.includes("X") || frame.includes("/")).length

            const cleanPct = Math.round((cleanFrames/10) * 100)
    return (
            <div key={index} className = "bg-[#F8F7F5] border border-[#C9B07A] rounded-xl p-4">
                <p className ="font-bold text-slate-700">
                    Game #{games.length - index}
                </p>



                <p className="font-bold text-slate-700">
                    Score: {game.score}
                </p>
                <p className="font-bold text-slate-700">
                    {new Date(game.date).toLocaleDateString()}
                </p>
                <p className="font-bold text-slate-700">
                    Splits: {game.splitFrames.length}
                </p>

                <p className="font-bold text-slate-700">
                    Clean Frames: {cleanFrames} ({cleanPct}%)
                </p>

                <Link to="/game-details" state = {{ game }} className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition w-30 text-center">View Details</Link>
            </div>
        )
    })}
    </div>
    </Layout>
)

}
export default GameHistory