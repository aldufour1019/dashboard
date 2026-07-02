import { splitLeaves } from "./splitLeaves"

function isSplit(leave) {
const sortedLeave = [...leave].sort((a,b) => a - b)

return splitLeaves.some(
  split => split.length === sortedLeave.length && split.every((pin, index) => pin === sortedLeave[index])
)
}

export function calculateStrikePct(data) {

  const games = Array.isArray(data) ? data : [data]

const strikes = games.reduce(
  (sum, game) => sum + (game.frameHistory || []).filter(frame => frame.includes("X")).length, 0
)

const totalFrames = games.length * 10

return totalFrames === 0
? 0 : Math.round((strikes/totalFrames) * 100)
}


export function getMostCommonLeaves(data) {

  const games = Array.isArray(data) ? data : [data]
  
  const leaveCounts = {}

      games.forEach(game => {
        const shotHistory =
        game.shotHistory || {}

        Object.entries(shotHistory).forEach(
            ([key, leave]) => {
                if (!key.endsWith("-1")) return

                if (leave.length === 0) return
                const leaveKey =
                leave.join("-")

                leaveCounts[leaveKey] = (leaveCounts[leaveKey] || 0) + 1

            }
        )
})
     
    return Object.entries(leaveCounts)
        .sort((a,b) => b[1] - a[1])
        .slice(0,3)

}

export function calculateSparePct(data) {
  
  const games = Array.isArray(data) ? data : [data]

  let opportunities = 0
  let conversions = 0

  games.forEach(game => {const shotHistory = game.shotHistory || {} 
    for (let frame = 1; frame <= 10; frame++) {
        const firstBall = shotHistory[`${frame}-1`]
        const secondBall = shotHistory[`${frame}-2`]

        if (!firstBall) continue

        if(firstBall.length === 0) continue

        opportunities++

        if (secondBall && secondBall.length === 0) {
          conversions++
        }
    }})

    return opportunities === 0
    ? 0 : Math.round((conversions / opportunities) * 100)
  
}

  export function calculateCleanFramePct(data) { 

    const games = Array.isArray(data) ? data : [data]

    const totalCleanFrames = games.reduce((sum, game) => sum + (game.frameHistory || []).filter(
    frame => frame.includes("X") || frame.includes("/")).length, 0
  )

  const possibleFrames = games.length * 10
  return possibleFrames === 0
  ? 0 : Math.round((totalCleanFrames/possibleFrames) * 100)
  }

  export function calculateSplitLeavePct(data) {

    const games = Array.isArray(data) ? data : [data]

  const totalSplits = games.reduce((sum, game) => sum + (game.splitFrames?.length || 0), 0)
    
  const totalFrames = games.length * 10
  return totalFrames === 0 ? 0 : Math.round((totalSplits/totalFrames) * 100)
  }

export function calculateSplitConversionPct(data) {

  const games = Array.isArray(data) ? data : [data]

  const totalSplits = games.reduce(
    (sum, game) => sum + (game.splitFrames?.length || 0),
    0
    )
  const convertedSplits = games.reduce((sum, game) => sum + (game.splitFrames || []).filter(split => split.converted).length, 0)
  return totalSplits === 0
  ? 0
  : Math.round(
    (convertedSplits / totalSplits) * 100
  )
}

export function calculateMakeableSparePct(data) {

  const games = Array.isArray(data) ? data : [data]

    let attempts = 0
    let conversions = 0

    games.forEach(game => {const shotHistory = game.shotHistory || {} 
    for (let frame = 1; frame <= 10; frame++) {
        const firstBall = shotHistory[`${frame}-1`]
        const secondBall = shotHistory[`${frame}-2`]

        if (!firstBall) continue

        if(firstBall.length === 0) continue

        if(isSplit(firstBall)) continue

        attempts++

        if (secondBall && secondBall.length === 0) {
          conversions++
        }
    }})

    return attempts === 0
    ? 0 : Math.round((conversions / attempts) * 100)
}

export function calculateSinglePinSparePct(data) {

  const games = Array.isArray(data) ? data : [data]

    let attempts = 0
    let conversions = 0

    games.forEach(game => {
      const shotHistory = game.shotHistory || {} 
    for (let frame = 1; frame <= 10; frame++) {
        const firstBall = shotHistory[`${frame}-1`]
        const secondBall = shotHistory[`${frame}-2`]

        if (!firstBall) continue

        if(firstBall.length !== 1) continue

        attempts++

        if (secondBall && secondBall.length === 0) {
          conversions++
        }
    }})

    return attempts === 0
    ? 0 : Math.round((conversions / attempts) * 100)
  }

  export function calculateHighGame(games) { 
  return games.length === 0 ? 0 : Math.max(...games.map(game => game.score))
   }

  export function calculateAverage(games) {
    const totalGames = games.length
    return totalGames === 0 ? 0 : (games.reduce((sum, game) => sum + game.score, 0) / totalGames).toFixed(1)
  }
