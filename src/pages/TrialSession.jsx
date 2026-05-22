import Layout from '../components/layout'
import PinDeck from '../components/PinDeck'

function TrialSession() {
    const currentTrial = {
        bowler:"Alex",
        game:1,
        frame:3,
        lane:12,
        score:52,
        ball:"Ion Pro"
    }

    const frameHistory = [
        "X",
        "9/",
        "9-",
        "8/",
        "X"
    ]

        const balls = [
        "Ion Pro",
        "Ion Max Solid",
        "Ion Max Pearl",
        "Purple Hammer",
        "Stealth",
        "T-Zone"


    ]
    return (
        <Layout>
            <h1 className = "text-4xl font-bold">
                Active Trial
            </h1>

            <div className="mt-8 bg-[#F8F7F5] border border-[#C9B07A] rounded-2xl p-6 text-slate-700">
                <p>Bowler: {currentTrial.bowler}</p>
                <p>Game: {currentTrial.game}</p>
                <p>Frame: {currentTrial.frame}</p>
                <p>Lane: {currentTrial.lane}</p>
                <p>Current Score: {currentTrial.score}</p>
                <p>Ball Used: {currentTrial.ball}</p>
            </div>
            <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6">
            <h2 className="font-bold text-slate-700">Current Game Frames: </h2>
            <div className="flex gap-2">
                {frameHistory.map((frame,index)=>(
                    <div key={index} className="w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-slate-700 bg-white">
                    {frame}    
                    </div>
                ))}
            </div>
            <label className="block font-bold mb-2 text-slate-700">Ball Used</label>
            <select className="w-full bg-[#1c1c1c]/70 backdrop-blur-md rounded-xl p-3 text-white">
            {balls.map((ball,index)=>(
                <option key={index}>{ball}</option>
        ))}
            </select>
            <PinDeck />
            
            
                <h2 className="font-bold text-slate-700 mb-2">Pocket Hit</h2>

                <input type="checkbox" className="w-5 h-5 accent-[#880011]" />
            <div className="mt-6">
                <label className="block font-bold mb-2 text-slate-700">Notes</label>
                <textarea placeholder="Any Notes on frame that you have" className="w-full h-24 bg-[#F8F7F5] border border-[#C9B07A] rounded-xl p-3 text-slate-700 resize-none" />
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2">Previous Frame</button>
                <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2">Save Frame</button>
                <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2">Next Frame</button>
            </div>
            </div>
        </Layout>
    )
}
export default TrialSession