import { Link } from 'react-router-dom'
import { getMostCommonLeaves } from '../utils/bowlingStats'

function MostCommonLeave() {

  const games = JSON.parse(localStorage.getItem("games")) || []

  const topLeaves = getMostCommonLeaves(games)

     return (
      <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl  w-full mt-8">

      <h2 className="text-xl text-[#880011] font-bold mb-4">
        Most Common Leaves
      </h2>
      <div className="bg-[#F8F7F5]">

      {topLeaves.map(([leave,count],index) => (
           <div
           key={leave}
           className="flex justify-between border-b py-2">
            <span className="text-slate-700 font-bold">
                {index + 1}.{" "}
                {leave.includes("-") ? leave : `${leave} Pin`}
            </span>
            <p className="text-slate-500 font-bold">{count}</p>

           </div>
        ))}
      {/* <Link to = "/game-history" className="inline-block bg-[#1c1c1c]/70 backdrop-blur-md text-white px-4 py-2 mt-2 rounded-lg hover:bg-[#d3902f] transition">View Games</Link> */}

    </div>
  </div>
     )
    }
    export default MostCommonLeave