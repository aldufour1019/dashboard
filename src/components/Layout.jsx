import Sidebar from './Sidebar'

function Layout({children}) {
    return (
         <div className="bg-gradient-to-br from-[#880011] via-[#616366] to-[#D3902F] min-h-screen text-white flex">
                <Sidebar />
                <div className="flex-1 p-10">
                    {children}
                </div>
                </div>
    )
}

export default Layout