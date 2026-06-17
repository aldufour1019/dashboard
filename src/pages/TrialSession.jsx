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

    const washoutLeave = [
        [1,2,4,6,7,10],
        [1,3,4,6,7,10],
        [1,2,4,10],
        [1,2,7,10],
        [1,3,6,7],
        [1,3,7,10],
        [1,2,4,6,10],
        [1,3,4,6,7]
    ]

    const [currentFrame, setCurrentFrame] = useState(1)
    const [currentBall, setCurrentBall] = useState(1)
    console.log("Current Ball:", currentBall)

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
            if (standingPins.length === 0) {
                    setStandingPins([1,2,3,4,5,6,7,8,9,10])
            }
            setCurrentBall(2)
        }
        else if(currentBall === 2) {
            const earnedFillBall = firstBallLeave === 0 || standingPins.length === 0
            console.log({
    firstBallLeave,
    standingPinsLength: standingPins.length,
    earnedFillBall
})

            if(earnedFillBall) {
                if (standingPins.length === 0) {
                    setStandingPins([1,2,3,4,5,6,7,8,9,10])
                }
                setCurrentBall(3)
                console.log("Setting Ball 3")
            }
        }
        

    }
}
function isSplit(leave) {
    const sortedLeave = [...leave].sort((a,b) => a-b)

    return splitLeaves.some(split => 
        split.length === sortedLeave.length && split.every((pin, index) => pin === sortedLeave[index])
    )
}
 function handlePreviousFrame() {
      if (currentFrame === 1) {
        return
      }

      const newFrame = currentFrame - 1

      let updatedRolls = [...rolls]

      if (frameHistory[newFrame - 1] === "X") {
        updatedRolls.pop()
      } else {
        updatedRolls.pop()
        updatedRolls.pop()
      }

      const updatedFrames = [...frameHistory]

      updatedFrames[newFrame - 1] = ""

      const updatedSplits = splitFrames.filter(
        split => split.frame !== newFrame
      )
      
      setSplitFrames(updatedSplits)
      setRolls(updatedRolls)
      setFrameScores(calculateScores(updatedRolls))
      setFrameHistory(updatedFrames)

      setCurrentFrame(newFrame)
      setCurrentBall(1)

      setStandingPins([1,2,3,4,5,6,7,8,9,10])
    }
    function calculateScores(rolls) {
        const scores = Array(10).fill("")
        let rollIndex = 0
        let runningTotal = 0

        for(let frame=0; frame < 10; frame++) {
            if(rolls[rollIndex] === 10) {
                if(
                    rolls[rollIndex + 1] === undefined ||
                    rolls[rollIndex + 2] === undefined
                ) { 
                    break
                }
                runningTotal += 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2]
                scores[frame] = runningTotal
                rollIndex += 1
            }
            else if(
                rolls[rollIndex] + rolls[rollIndex + 1] === 10

            ){
                if (rolls[rollIndex + 2] === undefined) {
                    break
                }
                runningTotal += 10 + rolls[rollIndex + 2]
                scores[frame] = runningTotal
                rollIndex += 2
            }
            else {
                if (rolls[rollIndex + 1] === undefined) {
                    break
                }
                runningTotal += rolls[rollIndex] + rolls[rollIndex + 1]
                scores [frame] = runningTotal
                rollIndex += 2
            }
        }
        return scores

    }

    function saveCurrentShot() {
        console.log("saveCurrentShot called", currentFrame, currentBall)
        let pinsKnockedDown 

        console.log({
            currentFrame,
            currentBall,
            firstBallLeave,
            standingPins
        })

        if (currentBall === 1) {
            pinsKnockedDown = 10 - standingPins.length
            if(isSplit(standingPins)) {
                setSplitFrames(prev => [
                    ...prev,
                    {frame: currentFrame,
                        converted: false
                    }
                ])
            }
        }
        else {
            if (currentFrame === 10 && firstBallLeave === 0) {
                pinsKnockedDown = 10 - standingPins.length
            }
            else {
            pinsKnockedDown = firstBallLeave - standingPins.length
        }
    }

        const newRolls = [...rolls, pinsKnockedDown]

        setRolls(newRolls)

        console.log("pinsKnockedDown =", pinsKnockedDown)
        console.log("newRolls =", newRolls)

        const calculatedScores = calculateScores(newRolls)

        setFrameScores(calculatedScores)

        setShotHistory(prev => ({
            ...prev,
            [`${currentFrame}-${currentBall}`]: [...standingPins]
        }))

        const updatedFrames = [...frameHistory]
        //const updatedScores = [...frameScores]

        if (currentBall === 1 && standingPins.length === 0){
            updatedFrames[currentFrame - 1] = "X"

            setFirstBallLeave(0)
            //updatedScores[currentFrame - 1] = 10
        }
        else if(currentBall === 1){
            updatedFrames[currentFrame-1]=
            String(10-standingPins.length)

            setFirstBallLeave(standingPins.length)
        }
        else{
            if(standingPins.length === 0){
                setSplitFrames(prev => 
                    prev.map(split =>
                        split.frame === currentFrame
                        ? {...split, converted: true }
                        : split
                    )
                )
                console.log(
                    "Frame: ", currentFrame,
                    "Ball: ", currentBall,
                    "FirstBallLeave: ",
                    firstBallLeave,
                    "frameBefore:", updatedFrames[9]
                )
                console.log ("standingPins.length =", standingPins.length)
                if (standingPins.length === 0) {
                    //10th Ball 2
                    if (
                        currentFrame === 10 &&
                        currentBall === 2
                    ) {
                        if (firstBallLeave === 0) {
                        updatedFrames[9] += "X"
                        } else {
                        updatedFrames[9] += "/"
                        setFirstBallLeave(0)
                    }
                } else if (currentFrame === 10 && currentBall === 3) {
                        if (firstBallLeave === 0) {
                        updatedFrames[9] += "X"
                        }
                        else {
                            updatedFrames[9] += "/"
                        }
                    } else {
                        updatedFrames[currentFrame - 1] += "/"
                    }
                }
            }

            else {
                let secondBallPins
                if (currentFrame === 10 && firstBallLeave === 0) {
                    secondBallPins = 10 - standingPins.length
                }
                else {
                    secondBallPins = firstBallLeave - standingPins.length
                }
                if (currentFrame === 10 && currentBall === 2 && firstBallLeave === 0) {
                    setFirstBallLeave(standingPins.length)
                }
                updatedFrames[currentFrame - 1] =
                updatedFrames[currentFrame - 1] + 
                (secondBallPins === 0 ? "-" : secondBallPins)

                const firstBallPins = 10 - firstBallLeave
                //updatedScores[currentFrame - 1] =
                firstBallPins + secondBallPins
            }
        }
        setFrameHistory(updatedFrames)
        //setFrameScores(updatedScores)
    }
    function invertPins() {
        const allPins = [1,2,3,4,5,6,7,8,9,10]

        setStandingPins(allPins.filter(
            pin => !standingPins.includes(pin)
        ))
    }

const [standingPins, setStandingPins] = useState([1,2,3,4,5,6,7,8,9,10])

    const [frameHistory, setFrameHistory] = 
        useState(Array(10).fill(""))
    const [firstBallLeave, setFirstBallLeave] = useState(0)  
    const [shotHistory, setShotHistory] = useState({})
    const [frameScores, setFrameScores] = useState(Array(10).fill(0))
    const [rolls, setRolls] = useState([])
    const [splitFrames, setSplitFrames] = useState([])
    console.log("rolls :", rolls)

    const currentScore = 
    frameScores
    .filter(score => score !== "")
    .slice(-1)[0] || 0

    

        const balls = [
        "Ion Pro",
        "Ion Max Solid",
        "Ion Max Pearl",
        "Purple Hammer",
        "Stealth",
        "T-Zone"


    ]

   function saveGame() {
    const completedGame = {
        date: new Date().toISOString(),
        score: currentScore,
        frameHistory,
        frameScores,
        rolls,
        splitFrames,
        shotHistory
    }
    
    const existingGames = 
        JSON.parse(localStorage.getItem("games")) || []

        localStorage.setItem(
            "games",
            JSON.stringify([...existingGames, completedGame])   
        )
        console.log("Game Saved", completedGame)

   }
   const showInvertButton = currentBall === 1 || (currentFrame === 10 && firstBallLeave === 0)
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
                <p>Current Score: {currentScore}</p>
                <p>Ball Used: {currentTrial.ball}</p>
                <p>Games: {currentTrial.gamesCompleted}/{currentTrial.gamesRequired}</p>
            </div>
            <div className="bg-[#f8f7f5] border border-[#C9B07A] rounded-2xl p-6 mt-6">
            <h2 className="font-bold text-slate-700">Current Game Frames: </h2>
            <div className="flex gap-2">
                {frameHistory.map((frame,index)=>{
                    const splitInfo = splitFrames.find (
                        split => split.frame === index + 1
                    )
                    return (
                    <div key={index} className={
                        `w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-white-700 bg-[#D3902F] scale-110 transition-all duration-300" 
                        ${
                        splitInfo?.converted
                        ? "border-4 border-green-500 rounded-full"
                        : splitInfo
                        ? "border-4 border-red-500 rounded-full"
                        : "border border-[#C9B07A]"
                    }
                    ${
                        currentFrame === index + 1
                        ? "bg-[#D3902F] scale-110"
                        : "bg-white text-slate-700"
                    }`}>
                    {frame}    
                    </div>
                    )
})}

            </div>
            <div className="flex gap-2">
                {frameScores.map((score,index)=>(
                    
                    <div key={index} className={"w-12 h-12 border border-[#C9B07A] flex items-center justify-center font-bold text-slate-700 bg-[#FFFFFF] scale-110 transition-all duration-300"}>
                    {score}    
                    </div>
                ))}
                </div>
            
            <div className="bg-[#D3902F] text-white rounded-xl p-4 mt-6 text-center">
    <h2 className="text-lg font-bold">Current Score</h2>
    <p className="text-4xl font-bold">
        {currentScore}
    </p>
</div>
            <label className="block font-bold mb-2 text-slate-700">Ball Used</label>
            <select className="w-full bg-[#1c1c1c]/70 backdrop-blur-md rounded-xl p-3 text-white">
            {balls.map((ball,index)=>(
                <option key={index}>{ball}</option>
        ))}
            </select>
            <PinDeck standingPins={standingPins} setStandingPins={setStandingPins}/>
            <div className ="flex justify-center mt-2">
                {showInvertButton && ( 
                <button onClick={invertPins}
                className = "bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300"
                >
                    Invert Pins
                </button>
                )}
            </div>
                

                <h2 className="font-bold text-slate-700 mb-2">Pocket Hit</h2>


                <input type="checkbox" className="w-5 h-5 accent-[#880011]" />
            <div className="mt-6">
                <label className="block font-bold mb-2 text-slate-700">Notes</label>
                <textarea placeholder="Any Notes on frame that you have" className="w-full h-24 bg-[#F8F7F5] border border-[#C9B07A] rounded-xl p-3 text-slate-700 resize-none" />
            </div>
            <div className="flex items-center justify-center">
                <button onClick={handlePreviousFrame} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300">Previous Frame</button>
                <button onClick={handleNextBall} className="bg-[#1c1c1c]/70 backdrop-blur-md border border-[#c9B07A] rounded-lg px-3 py-2 text-[#FFFFFF] shadow-sm mr-2 hover:bg-[#d3902f] transition duration-300">{currentBall == 1 ? "Next Ball" : "Advance Frame"}</button>
                <Link to = "/game-breakdown" state={{frameHistory, frameScores}} onClick={saveGame} className="inline-block bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-[#d3902f] transition">Finish Game</Link>
            </div>
            </div>
        </Layout>
    )
}
export default TrialSession