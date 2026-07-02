import { Link } from 'react-router-dom'
function RecentGames() {

  const games = JSON.parse(localStorage.getItem("games")) || []


  const recentGames = 
      [...games].reverse().slice(0, 4)
     

     return (
      <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl  w-full mt-8">

      <h2 className="text-xl text-[#880011] font-bold mb-4">
        Recent Games
      </h2>
      <div className="bg-[#F8F7F5]">

      {recentGames.map((game,index) => (
           <Link
           key={index}
           to="/game-details"
           state={{ game }}
           className="flex justify-between items-center py-4 border-b border-slate-300 cursor-pointer hover:bg-[#D3902F] hover:text-[#880011] transition rounded-lg">
            <span className="text-slate-700 font-bold">{new Date(game.date).toLocaleDateString()}</span>
            <p className="text-slate-500 font-bold">{game.score}</p>

           </Link>
        ))}
      <Link to = "/game-history" className="inline-block bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 mt-2 rounded-lg hover:bg-[#d3902f] transition">View Games</Link>

    </div>
  </div>
     )
    }
    export default RecentGames