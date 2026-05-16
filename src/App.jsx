import './App.css'

function App() {
 return (
  <div className="bg-gradient-to-br from-[#880011] via-[#616366] to-[#D3902F] min-h-screen text-white flex">
    <div className="w-64 bg-[#1c1c1c]/70 backdrop-blur-md p-6 border-[#CFCAC3]">

    <h1 className="text-2xl font-bold mb-8">Player Dashboard</h1>
  <div className="space-y-4 text-[#FFFFFF]">
    <p className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition">Dashboard</p>
    <p className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition">Tournaments</p>
    <p className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition">Trial Tracker</p>
    <p className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition">Analytics</p>
    <p className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition">Profile</p>
  </div>

  </div>
  <div className="flex-1 p-10">
    <div className="flex justify-between items-center">
  <h1 className="text-4xl font-bold">Welcome Alex!</h1>

  <div className="bg-[#F8F7F5] border border-[#C9B07A] px-4 py-2 rounded-xl">
    <p className="text-[#880011]">
      Alex
    </p>
  </div>
</div>

  

  <div className="grid grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
    
    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Average</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2 ">205</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Strike %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2">45%</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Spare %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2">75%</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Single Pin %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2">83%</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Makeable Spare %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2">78%</p>
    </div>
    
    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Split %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2 ">15%</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">First Ball Avg</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2 ">8.5</p>
    </div>

    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl">
      <h2 className="text-[#880011]">Fill %</h2>
      <p className="text-3xl text-slate-500 font-bold mt-2 ">76%</p>
    </div>

  </div>
    <div className="bg-[#F8F7F5] border border-[#C9B07A] p-6 rounded-2xl mt-8">

      <h2 className="text-xl text-[#880011] font-bold mb-4">
        Recent Games
      </h2>

      <div className="bg-[#F8F7F5] border border-[#C9B07A] flex justify-between">
        <p className="text-slate-500">
          Trial #1
        </p>
        <p className="text-slate-500">
          215
        </p>
      </div>

    </div>
  </div>
</div>
 ) 
}
export default App
