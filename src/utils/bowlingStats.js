

  export function calculateHighGame(games) { 
  return games.length === 0 ? 0 : Math.max(...games.map(game => game.score))
   }

  export function calculateAverage(games) {
    const totalGames = games.length
    return totalGames === 0 ? 0 : (games.reduce((sum, game) => sum + game.score, 0) / totalGames).toFixed(1)
  }

  export function calculateCleanFramePct(games) { 
      const totalCleanFrames = games.reduce((sum, game) => sum + (game.frameHistory || []).filter(
    frame => frame.includes("X") || frame.includes("/")).length, 0
  )

  const possibleFrames = games.length * 10
  return possibleFrames === 0
  ? 0 : Math.round((totalCleanFrames/possibleFrames) * 100)
  }

  export function calculateSplitLeavePct(games) {

  const totalSplits = games.reduce((sum, game) => sum + (game.splitFrames?.length || 0), 0)
    
  const totalFrames = games.length * 10
  return totalFrames === 0 ? 0 : Math.round((totalSplits/totalFrames) * 100)
  }

export function calculateSplitConversionPct(games) {
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

export function calculateMakeableSparePct(games) {
    let attempts = 0
    let conversion = 0

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