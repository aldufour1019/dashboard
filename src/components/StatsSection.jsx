import StatCard from './StatCard'
import { calculateAverage, calculateHighGame, calculateCleanFramePct, calculateSplitConversionPct, calculateSplitLeavePct, calculateMakeableSparePct } from '../utils/bowlingStats'

function StatsSection() {

  const games = JSON.parse(localStorage.getItem("games")) || []

  const average = calculateAverage(games)

  const highGame = calculateHighGame(games)

  const cleanFramePct = calculateCleanFramePct(games)

  const splitLeavePct = calculateSplitLeavePct(games)

  const splitConversionPct = calculateSplitConversionPct(games)

  const makeableSparePct = calculateMakeableSparePct(games)


  const stats = [
    {title: "Average", value: average},
    {title: "High Game", value: highGame},
    {title: "Clean Frame %", value: `${cleanFramePct}%`},
    {title: "Split %", value: `${splitLeavePct}%`},
    {title: "Splits Made %", value: `${splitConversionPct}%`},
    {title: "Makeable Spare %", value:`${makeableSparePct}%`}

  ]
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
    {stats.map((stat,index)=>(
      <StatCard
      key={index}
      title={stat.title}
      value={stat.value}
      trend={stat.trend} />
    ))}
   </div>

)
}

export default StatsSection
