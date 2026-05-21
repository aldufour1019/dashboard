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
            <PinDeck />
            <div className="mt-6 flex gap-4">
                <h2>Pocket?</h2>

                <button className="bg-green-600 px-4 py-2 rounded-lg text-white">Yes</button>
                <button className="bg-red-600 px-4 py-2 rounded-lg text-white">No</button>
            </div>
            <div className="mt-6">
                <label className="block font-bold mb-2 text-slate-700">Notes</label>
                <textarea placeholder="Any Notes on frame that you have" className="w-full h-24 bg-[#F8F7F5] border border-[#C9B07A] rounded-xl p-3 text-slate-700 resize-none" />
            </div>
        </Layout>
    )
}
export default TrialSession