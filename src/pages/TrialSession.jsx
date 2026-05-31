import Layout from '../components/layout'
import PinDeck from '../components/PinDeck'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function TrialSession() {
    const currentTrial = {
        bowler:"Alex",
        game:1,
        frame:3,
        lane:12,
        score:52,
        ball:"Ion Pro",
        status:"Active",
        gamesRequired:3,
        gamesCompleted:1

    }

    const [currentFrame, setCurrentFrame] = useState(1)
    const [currentBall, setCurrentBall] = useState(1)

    function handleNextBall() {
        saveCurrentShot()
        if (currentFrame < 10) {
        if (currentBall === 1 ) {
            if(standingPins.length === 0){
                setCurrentFrame(currentFrame + 1)

                setCurrentBall(1)

                setStandingPins([
                    1,2,3,4,5,6,7,8,9,10
                ])
            }
            else{
            setCurrentBall(2)
            }
        }
        else {
            setCurrentBall(1)
            setCurrentFrame(currentFrame + 1)
            setStandingPins([1,2,3,4,5,6,7,8,9,10])

        }
    
    }
    else{
        if (currentBall === 1){
            setCurrentBall(2)
        }
        else if(currentBall === 2) {
            if(tenthMark){
                setCurrentBall(3)
            }
        }
        

    }
}
 function handlePreviousFrame() {
      if (currentFrame === 1) {
        return
      }

      const newFrame = currentFrame -1

      const updatedFrames = [...frameHistory]

      updatedFrames[newFrame - 1]=""
      
      setFrameHistory(updatedFrames)

      setCurrentFrame(newFrame)
      setCurrentBall(1)

      setStandingPins([1,2,3,4,5,6,7,8,9,10])
    }
    function saveCurrentShot() {
        setShotHistory(prev => ({
            ...prev,
            [`${currentFrame}-${currentBall}`]: [...standingPins]
        }))

        const updatedFrames = [...frameHistory]
        const updatedScores = [...frameScores]

        if (currentBall === 1 && standingPins.length === 0){
            updatedFrames[currentFrame - 1] = "X"
            updatedScores[currentFrame - 1] = 10
        }
        else if(currentBall === 1){
            updatedFrames[currentFrame-1]=
            String(10-standingPins.length)

            setFirstBallLeave(standingPins.length)
        }
        else{
            if(standingPins.length === 0){
                updatedFrames[currentFrame - 1] =
                updatedFrames[currentFrame - 1] + "/"
                updatedScores[currentFrame - 1] = 10
            }
            else {
                const secondBallPins = 
                firstBallLeave-standingPins.length
                updatedFrames[currentFrame - 1] =
                updatedFrames[currentFrame - 1] + 
                (secondBallPins === 0 ? "-" : secondBallPins)

                const firstBallPins = 10 - firstBallLeave
                updatedScores[currentFrame - 1] =
                firstBallPins + secondBallPins
            }
        }
        setFrameHistory(updatedFrames)
        setFrameScores(updatedScores)
    }

const [standingPins, setStandingPins] = useState([1,2,3,4,5,6,7,8,9,10])

    const [tenthMark, setTenthMark] = useState(true)

    const [frameHistory, setFrameHistory] = 
        useState(Array(10).fill(""))
    const [firstBallLeave, setFirstBallLeave] = useState(0)  
    const [shotHistory, setShotHistory] = useState({})
    const [frameScores, setFrameScores] = useState(Array(10).fill(0))
    

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
                <p>Frame/Ball: {currentFrame}/{currentBall}</p>
                <p>Lane: {currentTrial.lane}</p>
                <p>Current Score: {currentTrial.score}</p>
                <p>Ball Used: {currentTrial.ball}</p>
                <p>Games: {currentTrial.gamesCompleted}/{currentTrial.gamesRequired}</p>
            </div>
            <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6">
            <h2 className="font-bold text-slate-700">Current Game Frames: </h2>
            <div className="flex gap-2">
                {frameHistory.map((frame,index)=>(
                    <div key={index} className={currentFrame === index + 1 ? "w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-white-700 bg-[#D3902F] scale-110 transition-all duration-300" : "w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-slate-700 bg-white transition-all duration-300"}>
                    {frame}    
                    </div>

                ))}
            </div>
            <p className="mt-2 text-slate-700">
                {frameScores.join(" | ")}
            </p>
            <label className="block font-bold mb-2 text-slate-700">Ball Used</label>
            <select className="w-full bg-[#1c1c1c]/70 backdrop-blur-md rounded-xl p-3 text-white">
            {balls.map((ball,index)=>(
                <option key={index}>{ball}</option>
        ))}
            </select>
            <PinDeck standingPins={standingPins} setStandingPins={setStandingPins}/>
            
                <p className="font-bold text-slate-700">10th Mark: {tenthMark ? "Yes" : "No"}</p>
                <h2 className="font-bold text-slate-700 mb-2">Pocket Hit</h2>


                <input type="checkbox" className="w-5 h-5 accent-[#880011]" />
            <div className="mt-6">
                <label className="block font-bold mb-2 text-slate-700">Notes</label>
                <textarea placeholder="Any Notes on frame that you have" className="w-full h-24 bg-[#F8F7F5] border border-[#C9B07A] rounded-xl p-3 text-slate-700 resize-none" />
            </div>
            <div className="flex items-center justify-center">
                <button onClick={handlePreviousFrame} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300">Previous Frame</button>
                <button onClick={() => setTenthMark(!tenthMark)} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300">Toggle 10th Mark</button>
                <button onClick={handleNextBall} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300">{currentBall == 1 ? "Next Ball" : "Advance Frame"}</button>
                <Link to = "/game-breakdown" className="inline-block bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#d3902f] transition">Finish Game</Link>
            </div>
            </div>
        </Layout>
    )
}
export default TrialSession