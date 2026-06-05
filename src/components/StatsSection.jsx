import StatCard from './StatCard'

function StatsSection() {
    const stats = [
        {title:"Average", value:205, trend:"↑"},
        {title:"Strike Percentage", value:"45%", trend:"-"},
        {title:"Spare Percentage", value:"75%", trend:"↓"},
        {title: "Makeable Spare Percentage", value:"78%", trend:"↑"},
        {title:"Split Percenage", value:"83%", trend:"↓"},
        {title: "First Ball Average", value:"8.5", trend:"-"},
        {title: "Fill Percentage", value:"76%", trend:"↓"},
        {title: "Frames Thrown", value:250}
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
