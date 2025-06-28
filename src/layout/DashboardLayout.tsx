// Required imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/features/Sidebar/Sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import { useThemeStore } from "@/store/useThemeStore";
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdOutlineLogout, MdOutlineSettings, MdOutlineDarkMode, MdDoNotDisturbOn } from "react-icons/md";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import logoSVG from "@/assets/logoSVG.svg";
import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const fakeNotifications = [
  {
    id: 1,
    type: "approval",
    message: "A new bid of $285,000 for 123 W Main St is awaiting your approval.",
    time: "1 hour ago",
  },
  {
    id: 2,
    type: "error",
    message: "Scraper 'BuyAZForeclosures' has failed. No new data since 10:15 AM.",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "new",
    message: "New 'Bidlist' property found with an estimated 41% equity ($180k).",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "alert",
    message: "Auction for 456 N Oak Ave starts in less than 1 hour and has no approved bid.",
    time: "1 hour ago",
  },
];

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { logout } = useAuthStore();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node | null;
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <header className="bg-gray-200 dark:bg-primary-dark border-b p-4 flex justify-between items-center relative">
          <div>
            <img src={logoSVG} alt="logo" className="w-8" />
          </div>

          <div className="flex items-center justify-center mx-auto space-x-4">
            <div className="relative w-[300px]">
              <Input className="pl-9 border-gray-400" placeholder="Search" />
              <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4 relative">
            {/* Notification Icon */}
            <div ref={notificationRef} className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Toggle notifications"
              >
                <div className="relative">
                  <FaBell className="w-6 h-6 text-gray-600" />
                  {fakeNotifications.length > 0 && (
                    <span className="absolute -top-3 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {fakeNotifications.length}
                    </span>
                  )}
                </div>
              </Button>
              {showNotifications && (
                <div className="absolute top-14 right-20 w-[350px] max-h-[400px] bg-white border shadow-xl rounded-md overflow-auto z-50">
                  <div className="p-4 font-semibold border-b flex justify-between">
                    Notifications
                    <span className="text-sm text-blue-600 cursor-pointer">Mark all as read</span>
                  </div>
                  <ul className="divide-y">
                    {fakeNotifications.map((n) => (
                      <li key={n.id} className="p-3 hover:bg-gray-50">
                        <p className="text-sm text-gray-800">{n.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{n.time}</p>
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
            >
              {theme === "dark" ? (
                <IoSunny className="h-6 w-6" />
              ) : (
                <IoMoon className="h-6 w-6" />
              )}
            </Button>

            {/* User Avatar */}
            <div className="relative" ref={userMenuRef}>
              <div
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User className="w-6 h-6 text-gray-600" />
              </div>
              {showUserMenu && (
                <div className="absolute right-0 top-12 w-56 bg-white shadow-xl rounded-md z-50 border">
                  <div className="px-4 py-3 border-b">
                    <h4 className="text-sm font-semibold">Marcus Aurelius</h4>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                  <div className="p-2 divide-y">
                    <div className="space-y-2 pb-2">
                      <p className="text-sm hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
                        <FaUser /> My Profile
                      </p>
                      <p className="text-sm hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
                        <MdOutlineSettings /> My Settings
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <p className="text-sm hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
                        <MdOutlineDarkMode /> Dark Mode
                      </p>
                      <p className="text-sm hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
                        <MdDoNotDisturbOn /> Do Not Disturb
                      </p>
                    </div>
                    <div className="pt-2">
                      <p
                        className="text-sm text-red-600 hover:bg-red-50 p-2 rounded cursor-pointer flex items-center gap-2"
                        onClick={logout}
                      >
                        <MdOutlineLogout className="text-red-500" /> Logout
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
