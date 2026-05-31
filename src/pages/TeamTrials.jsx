import PinDeck from '../components/PinDeck'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function TeamTrials() {
    const [showMenu, setShowMenu] = useState(false)
    const trials = [
        {name:"Trial 1 Short", score: 215},
        {name:"Trial 2 Long", score: 186},
        {name:"Trial 3 Medium", score: 193}
    ]

    const currentTrial = {
        bowler: "Alex",
        game:1,
        frame:3,
        lane:16,
        status:"Active",
        ball: "Ion Pro",
        pocket: "Yes",
        pin: 10
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
                <select className="text-slate-700">
                    <option>Alex</option>
                    <option>Bowler 2</option>
                </select>
                <select className="text-slate-700 mr-2">
                    <option>Lane 1</option>
                    <option>Lane 2</option>
                </select>
                <select className="text-slate-700 mr-2">
                    <option>3 Games</option>
                    <option>4 Games</option>
                </select>

                <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
                    Begin Trial
                </button>
            </div>
            </div>
            
            <div className="mt-6 bg-[#f8f7f5] p-6 rounded 2xl">
            <h2 className="font-bold text-xl text-slate-700">
                Current Trial
            </h2>
            <div className="grid grid-cols-2 gap-4 gap-x-48 gap-y-4 max-w-2xl mx-auto">
                    <p className="text-slate-700">Bowler: {currentTrial.bowler}</p>
                    <p className="text-slate-700">Game: {currentTrial.game}</p>
                    <p className="text-slate-700">Frame: {currentTrial.frame}</p>
                    <p className="text-slate-700">Starting Lane: {currentTrial.lane}</p>
                    <p className="text-slate-700">Status: {currentTrial.status}</p>
                    <p className="text-slate-700">Ball: {currentTrial.ball}</p>
                    <p className="text-slate-700">Pocket: {currentTrial.pocket}</p>
                    <p className="text-slate-700">Pins Left: {currentTrial.pin}</p>
                    </div>

                    <Link to = "/trial-session" className="inline-block mt-4 bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#880011] transition">
                    Resume Trial
                    </Link>
            </div>

            <h2 className="font-bold text-xl text-slate-700">
                Recent Trials
            </h2>
           
            {trials.map((trial,index)=>(
                 <Link to="/trial-breakdown" key={index}>
                 <div className="flex justify-between py-3 border-b border-slate-300 text-slate-700">
                    <p>{trial.name}</p>
                    <p>{trial.score}</p>
                    </div>
                    </Link>
            ))}
            </div>
    </Layout>
    )
}
export default TeamTrials