import { User, LayoutDashboard, BookCheck, LogOut, Sidebar} from 'lucide-react'

function SideMenu(){
    return(
        <div className='bg-gray-00 h-screen'>
        <a href="/profile" className='sideBar-links'>
          <span><User/></span>
          <span>Profile</span>
        </a>
        <a href="/dashboard" className='sideBar-links'>
          <span><LayoutDashboard/></span>
          <span>Dashboard</span>
        </a>
        <a href="/manageTask" className='sideBar-links'>
          <span><BookCheck/></span>
          <span>Manage Task</span>
        </a>
        <a href="/logout" className='sideBar-links'>
          <span><LogOut/></span>
          <span>Log out</span>
        </a>
      </div>
    )
}

export default SideMenu