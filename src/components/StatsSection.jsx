import StatCard from './StatCard'

function StatsSection() {
    const stats = [
  {title:"Average", value:205},
  {title:"Strike Percentage", value:"45%"},
  {title:"Spare Percentage", value:"75%"},
  {title:"Split Percenage", value:"83%"},
  {title: "Makeable Spare Percentage", value:"78%"},
  {title:"Split Percentage", value:"15%"},
  {title: "First Ball Average", value:"8.5"},
  {title: "Fill Percentage", value:"76%"}
]
return (
    <div className="grid grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
    {stats.map((stat,index)=>(
      <StatCard
      key={index}
      title={stat.title}
      value={stat.value} />
    ))}
   </div>

)
}
export default StatsSection

