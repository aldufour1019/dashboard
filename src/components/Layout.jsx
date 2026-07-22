import { useState } from "react"
import { Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import Sidebar from './Sidebar'

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
         <div className="bg-gradient-to-br from-[#880011] via-[#616366] to-[#D3902F] min-h-screen text-white flex">
            {/*Mobile*/}
            {sidebarOpen && (
                <div className= "fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
                />
            )}
            
                <Sidebar 
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                />
                <main className="flex-1 p-4 md:p-10">
                    <button className="md:hidden text-3xl mb-6"
                    onClick={() => setSidebarOpen(true)}>
                        <FiMenu />
                    </button>
                    <Outlet />
                </main>
                </div>
    )
}

export default Layout