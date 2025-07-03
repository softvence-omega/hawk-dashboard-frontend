// Required imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/features/Sidebar/Sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import { useThemeStore } from "@/store/useThemeStore";
import { useSidebarStore } from "@/store/useSidebarStore";
import { IoMoon, IoSunny } from "react-icons/io5";
import {
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineDarkMode,
  MdDoNotDisturbOn,
} from "react-icons/md";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import logoSVG from "@/assets/logoSVG.svg";
import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const fakeNotifications = [
  {
    id: 1,
    type: "approval",
    message:
      "A new bid of $285,000 for 123 W Main St is awaiting your approval.",
    time: "1 hour ago",
  },
  {
    id: 2,
    type: "error",
    message:
      "Scraper 'BuyAZForeclosures' has failed. No new data since 10:15 AM.",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "new",
    message:
      "New 'Bidlist' property found with an estimated 41% equity ($180k).",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "alert",
    message:
      "Auction for 456 N Oak Ave starts in less than 1 hour and has no approved bid.",
    time: "1 hour ago",
  },
];

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { logout } = useAuthStore();
  const { toggle: toggleSidebar } = useSidebarStore();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <header className="bg-gray-200 dark:bg-primary-dark border-b p-2 sm:p-4 flex justify-between items-center relative">
          <div className="flex items-center mr-2 sm:space-x-4">
            {/* Mobile hamburger menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden p-1 sm:p-2"
              aria-label="Toggle sidebar"
            >
              <HiMenuAlt3 className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <img src={logoSVG} alt="logo" className="w-6 sm:w-8" />
          </div>

          <div className="flex items-center justify-center mx-auto space-x-4 flex-1 max-w-md">
            <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
              <Input 
                className="pl-8 sm:pl-9 border-gray-400 text-sm sm:text-base h-8 sm:h-10" 
                placeholder="Search" 
              />
              <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 relative">
            {/* Notification Icon */}
            <div ref={notificationRef} className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Toggle notifications"
                className="p-1 sm:p-2"
              >
                <div className="relative">
                  <FaBell className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
                  {fakeNotifications.length > 0 && (
                    <span className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-red-600 text-white text-xs rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[10px] sm:text-xs">
                      {fakeNotifications.length}
                    </span>
                  )}
                </div>
              </Button>
              {showNotifications && (
                <div className="absolute top-10 sm:top-14 right-0 w-[280px] sm:w-[300px] md:w-[350px] max-h-[300px] sm:max-h-[400px] bg-white border shadow-xl rounded-md overflow-auto z-50">
                  <div className="p-3 sm:p-4 font-semibold border-b flex justify-between text-sm sm:text-base">
                    Notifications
                    <span className="text-xs sm:text-sm text-blue-600 cursor-pointer">
                      Mark all as read
                    </span>
                  </div>
                  <ul className="divide-y">
                    {fakeNotifications.map((n) => (
                      <li key={n.id} className="p-2 sm:p-3 hover:bg-gray-50">
                        <p className="text-xs sm:text-sm text-gray-800 leading-tight">{n.message}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{n.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1 sm:p-2"
            >
              {theme === "dark" ? (
                <IoSunny className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              ) : (
                <IoMoon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              )}
            </Button>

            {/* User Avatar */}
            <div className="relative" ref={userMenuRef}>
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
              </div>
              {showUserMenu && (
                <div className="absolute right-0 top-8 sm:top-10 md:top-12 w-48 sm:w-52 md:w-56 bg-white shadow-xl rounded-md z-50 border">
                  <div className="px-3 sm:px-4 py-2 sm:py-3 border-b">
                    <h4 className="text-xs sm:text-sm font-semibold">Marcus Aurelius</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">Admin</p>
                  </div>
                  <div className="p-1 sm:p-2 divide-y">
                    <div className="space-y-1 sm:space-y-2 pb-1 sm:pb-2">
                      <p className="text-xs sm:text-sm hover:bg-gray-100 p-1 sm:p-2 rounded cursor-pointer flex items-center gap-1 sm:gap-2">
                        <FaUser className="w-3 h-3 sm:w-4 sm:h-4" /> My Profile
                      </p>
                      <p className="text-xs sm:text-sm hover:bg-gray-100 p-1 sm:p-2 rounded cursor-pointer flex items-center gap-1 sm:gap-2">
                        <MdOutlineSettings className="w-3 h-3 sm:w-4 sm:h-4" /> My Settings
                      </p>
                    </div>
                    <div className="space-y-1 sm:space-y-2 pt-1 sm:pt-2">
                      <p className="text-xs sm:text-sm hover:bg-gray-100 p-1 sm:p-2 rounded cursor-pointer flex items-center gap-1 sm:gap-2">
                        <MdOutlineDarkMode className="w-3 h-3 sm:w-4 sm:h-4" /> Dark Mode
                      </p>
                      <p className="text-xs sm:text-sm hover:bg-gray-100 p-1 sm:p-2 rounded cursor-pointer flex items-center gap-1 sm:gap-2">
                        <MdDoNotDisturbOn className="w-3 h-3 sm:w-4 sm:h-4" /> Do Not Disturb
                      </p>
                    </div>
                    <div className="pt-1 sm:pt-2">
                      <p
                        className="text-xs sm:text-sm text-red-600 hover:bg-red-50 p-1 sm:p-2 rounded cursor-pointer flex items-center gap-1 sm:gap-2"
                        onClick={logout}
                      >
                        <MdOutlineLogout className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" /> Logout
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-2 sm:p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
