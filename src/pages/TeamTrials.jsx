import PinDeck from '../components/PinDeck'
import Layout from '../components/layout'
function TeamTrials() {
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
            <h1 className="font-bold text-xl">
                Team Trials
            </h1>
            
            <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
                + Start New Trial
            </button>

            <div className="mt-6 bg-[#F8F7F5] p-6 rounded-2xl">
                <h2 className="font-bold text-xl text-slate-700">
                    Start Trial
                </h2>
                <select className="text-slate-700">
                    <option>Alex</option>
                    <option>Bowler 2</option>
                </select>
                <select className="text-slate-700">
                    <option>Lane 1</option>
                    <option>Lane 2</option>
                </select>

                <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
                    Begin Trial
                </button>
            </div>
            <div className="mt-6 bg-[#f8f7f5] p-6 rounded 2xl">
            <h2 className="font-bold text-xl text-slate-700">
                Current Trial
            </h2>
            
                    <p className="text-slate-700">Bowler: {currentTrial.bowler}</p>
                    <p className="text-slate-700">Game: {currentTrial.game}</p>
                    <p className="text-slate-700">Frame: {currentTrial.frame}</p>
                    <p className="text-slate-700">Lane Number: {currentTrial.lane}</p>
                    <p className="text-slate-700">Status: {currentTrial.status}</p>
                    <p className="text-slate-700">Ball: {currentTrial.ball}</p>
                    <p className="text-slate-700">Pocket: {currentTrial.pocket}</p>
                    <p className="text-slate-700">Pins Left: {currentTrial.pin}</p>

                    <button className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm">
                    Continue Trial
                    </button>
            </div>

            <h2 className="font-bold text-xl">
                Recent Trials
            </h2>
           
            {trials.map((trial,index)=>(
                 <div key={index} className="flex justify-between py-3 border-b border-slate-300">
                    <p>{trial.name}</p>
                    <p>{trial.score}</p>
                    </div>
            ))}
            <PinDeck />
    </Layout>
    )
}
export default TeamTrials