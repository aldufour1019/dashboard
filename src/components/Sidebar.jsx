import { Link } from 'react-router-dom'
import { FiHome, FiAward, FiBarChart2, FiUser, FiMenu, FiX} from "react-icons/fi"
import { FaBowlingBall, FaTrophy } from "react-icons/fa6"

function Sidebar({sidebarOpen, setSidebarOpen}) {
const navItems =[
    {name: "Dashboard", path:"/", icon: FiHome},
    {name: "Tournamnets", path:"/tounaments", icon: FaTrophy},
    {name: "Trials", path:"/team-trials", icon: FaBowlingBall},
    {name: "Analytics", path:"/analytics", icon: FiBarChart2},
    {name: "Profile", path: "/profile", icon: FiUser}
]

    return (
    <div className={`fixed md:sticky top-0 left-0 md:min-h-screen h-screen w-20 px-3 py-6 bg-[#1c1c1c]/70 backdrop-blur-md p-6 border-r border-[#CFCAC3] z-40 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
<div className = "flex justify-between items-center mb-8">
  <button className="md:hidden text-2xl" onClick={() => setSidebarOpen(false)}>
      ✕
    </button>
    </div>
  <div className="space-y-4 text-[#FFFFFF]">
    {navItems.map((item,index)=>{
      const Icon = item.icon
      return(
    <Link key = {index} to={item.path} onClick={() => setSidebarOpen(false)} className="block p-3 w-12 h-12 rounded-xl hover:bg-[#D3902F] hover:text-[#880011] p-3 rounded-xl cursor-pointer transition"> <Icon size={24}></Icon></Link>
      )
  })}
    
  </div>
  </div>
    )
}
export default Sidebar