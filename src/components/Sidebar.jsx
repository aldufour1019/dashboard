import { Link } from 'react-router-dom'

function Sidebar() {
const navItems =[
    {name: "Dashboard", path:"/"},
    {name: "Tournamnets", path:"/tounaments"},
    {name: "Trials", path:"/team-trials"},
    {name: "Analytics", path:"/analytics"},
    {name: "Profile", path: "/profile"}
]

    return (
    <div className="w-64 bg-[#1c1c1c]/70 backdrop-blur-md p-6 border-[#CFCAC3]">

    <h1 className="text-2xl font-bold mb-8">Player Dashboard</h1>
  <div className="space-y-4 text-[#FFFFFF]">
    {navItems.map((item,index)=>(
    <Link key = {index} to={item.path} className="hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition block"> {item.name}</Link>
    ))}
    
  </div>
  </div>
    )
}
export default Sidebar