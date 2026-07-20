import Layout from '../components/layout'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function TeamTrials() {
    const [selectedBowler, setSelectedBowler] = useState("Alex")
    const [selectedLane, setSelectedLane] = useState("1")
    const [selectedGames, setSelectedGames] = useState("3")
    const [showMenu, setShowMenu] = useState(false)
    const trials = JSON.parse(localStorage.getItem("trials")) || []    

    const navigate = useNavigate()
    

    const currentTrial = JSON.parse(localStorage.getItem("currentTrial"))
    const currentGame = currentTrial?.currentGame

    const currentScore = currentGame?.frameScores ?.filter(score => score !== "") ?.slice(-1)[0] || 0

    console.log("Current Trial: ", currentTrial)
    console.log(localStorage.getItem("currentTrial"))


    function handleStartTrial() {
        const newTrial = {
            id: Date.now(),
            bowler: selectedBowler,
            startingLane: Number(selectedLane),
            gamesRequired: Number(selectedGames),
            gamesCompleted: 0,
            status: "Active",
            createdAt: new Date().toISOString(),
            games: [],
            currentGame: null
        }
        localStorage.setItem("currentTrial", JSON.stringify(newTrial))
        console.log("Trial Saved", currentTrial)
        navigate("/trial-session")
    }
    return (
        <Layout>
            <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6 gap-6 flex flex-col">
            <h1 className="font-bold text-xl text-slate-700">
                Team Trials
            </h1>
            
            <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm hover:scale-105 transition duration-300" onClick={() => setShowMenu(!showMenu)}>
                + Start New Trial
            </button>
            
            <div className={`transition-all duration-300 ${showMenu ?"opacity-100 max-h-screen mt-4" :"opacity-0 max-h-0 overflow-hidden pointer-event-none"} `}>
            <div className="mt-6 bg-[#F8F7F5] p-6 rounded-2xl">
                <h2 className="font-bold text-xl text-slate-700">
                    Start Trial
                </h2>
                <select value={selectedBowler} onChange={(e) => setSelectedBowler(e.target.value)} className="text-slate-700">
                    <option>Alex</option>
                    <option>Bowler 2</option>
                </select>
                <select value={selectedLane} onChange={(e) => setSelectedLane(e.target.value)} className="text-slate-700 mr-2">
                    {Array.from({ length: 32 }, (_, i) => (
                        <option key={i+1} value={i+1}>Lane {i + 1}</option>
                    ))}
                </select>
                <select value={selectedGames} onChange={(e) => setSelectedGames(e.target.value)} className="text-slate-700 mr-2">
                    <option value="3">3 Games</option>
                    <option value="4">4 Games</option>
                    <option value="5">5 Games</option>
                </select>

                <button onClick={handleStartTrial} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
                    Begin Trial
                </button>
            </div>
            </div>
            {currentTrial ? (
            <div className="mt-6 bg-[#f8f7f5] p-6 rounded 2xl">
            <h2 className="font-bold text-xl text-slate-700">
                Current Trial
            </h2>
            <div className="grid grid-cols-2 gap-4 gap-x-48 gap-y-4 max-w-2xl mx-auto">
                    <p className="text-slate-700">Bowler: {currentTrial?.bowler}</p>
                    <p className="text-slate-700">Game: {(currentGame?.gamesCompleted || 0) + 1}{ " / "} {currentTrial?.gamesRequired}</p>
                    <p className="text-slate-700">Frame: {currentGame?.currentFrame || 1}{"/Ball"}{currentGame?.currentBall || 1 }</p>
                    <p className="text-slate-700">Starting Lane: {currentTrial?.startingLane}</p>
                    <p className="text-slate-700">Status: {currentTrial?.status}</p>
                    <p className="text-slate-700">Date Created: {currentTrial?.createdAt ? new Date(currentTrial.createdAt).toLocaleDateString() : "-"}</p>
                    <p className="text-slate-700">Current Score: {currentScore}</p>
                    </div>
{currentTrial?.status === "Active" && (
                    <Link to = "/trial-session" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition">
                    Resume Trial
                    </Link>
)}
            </div>
            ) : (
                    <div className="mt-6 bg-[#f8f7f5] p-6 rounded-2xl text-center">

        <h2 className="font-bold text-xl text-slate-700">
            Current Trial
        </h2>

        <p className="text-slate-500 mt-4">
            No active trial.
        </p>

    </div>

)}
            

            <h2 className="font-bold text-xl text-slate-700">
                Recent Trials
            </h2>
           
            {trials.map((trial,index)=> {
             const totalPins = trial.games.reduce(
                (sum, game) => sum + game.score, 0
             )
             const average = trial.games.length > 0 
             ? (totalPins / trial.games.length).toFixed(1)
             : "-"
            
            return (

                 <Link to="/trial-breakdown" state={{ trial }} key={index}>
                 <div className="border-b border-slate-300 py-4 hover:bg-slate-100 transition rounded-lg px-4">
                    <div className="flex justify-between text-slate-700">
                    <p>{trial.bowler}</p>
                    <span className = "text-sm text-slate-500">
                        {trial.status}
                    </span>
                    </div>
                    <div className ="grid grid-cols-2 mt-2 text-slate-600 text-sm">
                        <p>Games: {trial.games.length}/{trial.gamesRequired}</p>
                        <p>Average: {average} </p>
                        <p>Total Pins: {totalPins} </p>
                        <p>{new Date(trial.createdAt).toLocaleDateString()}</p>
                    </div>
                    </div>
                    </Link>
            )
        })}
            </div>
    </Layout>
    )
}
export default TeamTrials