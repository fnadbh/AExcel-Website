import "./SideMenu.css";

import {
  House,
  MessageSquareText,
  Bookmark,
  Bell,
  Settings,
  LogOut,
  User,
} from "lucide-react";

function Sidebar() {

  return (

    <aside className="forum-sidebar">

      {/* ==========================
          User
      ========================== */}

      <div className="sidebar-profile">

        <div className="sidebar-avatar">

          <User size={24} />

        </div>

        <div>

          <h3>Adibah</h3>

          <p>Centre for Academic Excellence</p>

        </div>

      </div>

      {/* ==========================
          Menu
      ========================== */}

      <nav className="sidebar-menu">

        <button className="active">

          <House size={18} />

          <span>Home</span>

        </button>

        <button>

          <MessageSquareText size={20} />

          <span>My Discussions</span>

        </button>

        <button>

          <Bookmark size={20} />

          <span>Saved</span>

        </button>

        <button>

          <Bell size={20} />

          <span>Notifications</span>

        </button>

        <button>

          <Settings size={20} />

          <span>Settings</span>

        </button>

      </nav>

      {/* ==========================
          Logout
      ========================== */}

      <button className="logout-btn">

        <LogOut size={20} />

        <span>Logout</span>

      </button>

    </aside>

  );

}

export default Sidebar;