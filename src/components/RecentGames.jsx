function RecentGames() {
     const recentGames = [
{
  name: "Trial 1 Short",
  score: 215
},

{
  name:"Trial 2 Long",
  score: 186
},
{
  name:"Trial 3 Medium",
  score: 195
}
     ]

     return (
      <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl  w-full mt-8">

      <h2 className="text-xl text-[#880011] font-bold mb-4">
        Recent Games
      </h2>
      <div className="bg-[#F8F7F5] border border-[#C9B07A">

      {recentGames.map((game,index) => (
           <div
           key={index}
           className="flex justify-between items-center py-4 border-b border-slate-300">
            <p className="text-slate-700 font-bold">{game.name}</p>
            <p className="text-slate-500 font-bold">{game.score}</p>

           </div>
        ))}


    </div>
  </div>
     )
    }
    export default RecentGames