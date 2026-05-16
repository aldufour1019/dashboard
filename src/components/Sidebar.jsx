function Sidebar() {
    return (
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
    )
}
export default Sidebar