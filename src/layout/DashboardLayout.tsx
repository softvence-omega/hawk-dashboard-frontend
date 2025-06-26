import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/features/Sidebar/Sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import { useThemeStore } from "@/store/useThemeStore";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import logoSVG from "@/assets/logoSVG.svg";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { logout } = useAuthStore();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ">
        <header className="bg-gray-200 dark:bg-primary-dark border-b p-4 flex justify-between items-center">
          <div>
            <img src={logoSVG} alt="" className="w-8" />
          </div>
          <div className="flex items-center justify-center mx-auto space-x-4">
            {/* <h1 className="text-xl font-semibold">D</h1> */}

            <div className="relative w-[300px]">
              <Input className="pl-9 border-gray-400" placeholder="Search" />
              <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <IoSunny className="h-5 w-5" />
              ) : (
                <IoMoon className="h-5 w-5" />
              )}
            </Button>

            {/* User profile/avatar can go here */}
            <div className="flex gap-4">
              {/* <div className="h-8 w-8 rounded-full bg-purple-400 dark:bg-gray-600"></div> */}
              <Button
                onClick={logout}
                className="bg-primary-dark hover:bg-black"
              >
                <MdOutlineLogout />
                Logout
              </Button>
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
