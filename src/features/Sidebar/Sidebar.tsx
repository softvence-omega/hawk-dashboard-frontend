import { useSidebarStore } from "@/store/useSidebarStore";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggle = useSidebarStore((state) => state.toggle);

  const sidebarVariants = {
    open: { width: "16rem" },
    closed: { width: "4rem" },
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setOpen(window.innerWidth >= 768);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [setOpen]);

  const menuItems = [
    { to: "/dashboard", icon: <IoHome className="w-5 h-5" />, text: "Home" },
    {
      to: "/property",
      icon: <IoBarChartSharp className="w-5 h-5" />,
      text: "Property Listing",
    },
    {
      to: "/settings",
      icon: <IoMdSettings className="w-5 h-5" />,
      text: "Settings",
    },
  ];

  return (
    <motion.aside
      initial={isOpen ? "open" : "closed"}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-[#10207c] text-white dark:bg-primary-dark border-r min-h-screen p-4 overflow-hidden flex flex-col"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">{isOpen ? "Az Deal Hub" : ""}</h2>
        <Button className="mt-3" variant="ghost" size="sm" onClick={toggle}>
          {isOpen ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
        </Button>
      </div>

      <nav className="flex-1 mt-12">
        <TooltipProvider delayDuration={100}>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {!isOpen ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `w-10 h-10 flex items-center justify-center p-2 rounded-lg transition-colors text-white
                          hover:bg-white hover:text-black dark:hover:bg-primary
                          ${
                            isActive
                              ? "bg-white text-black dark:bg-primary"
                              : ""
                          }`
                        }
                      >
                        {item.icon}
                      </NavLink>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-2">
                      {item.text}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-start p-2 rounded-lg transition-colors
                      hover:bg-white hover:text-black dark:hover:bg-primary
                      ${isActive ? "bg-white text-black dark:bg-primary" : ""}`
                    }
                  >
                    {item.icon}
                    <span className="ml-2 font-medium">{item.text}</span>
                  </NavLink>
                )}
              </motion.li>
            ))}
          </ul>
        </TooltipProvider>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
