import { useSidebarStore } from "@/store/useSidebarStore";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Star,
  Activity,
  Send,
  Database,
  Code,
  Users,
  FileText,
} from "lucide-react";
import { IoHome } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggle = useSidebarStore((state) => state.toggle);

  const sidebarVariants = {
    open: { width: "16rem" },
    closed: { width: "4rem" },
  };

  const menuSections = [
    {
      items: [
        {
          to: "/dashboard",
          icon: <LayoutDashboard className="w-5 h-5" />,
          text: "Dashboard",
        },
      ],
    },
    {
      title: "REAL ESTATE",
      items: [
        {
          to: "/property",
          icon: <IoHome className="w-5 h-5" />,
          text: "Property Management",
        },
        {
          to: "/bid-approvals",
          icon: <Star className="w-5 h-5" />,
          text: "Bid Approvals",
        },
        {
          to: "/scraper",
          icon: <Activity className="w-5 h-5" />,
          text: "Scraper Status",
        },
      ],
    },
    {
      title: "MARKETING AI",
      items: [
        {
          to: "/campaigns",
          icon: <Send className="w-5 h-5" />,
          text: "Campaigns",
        },
        {
          to: "/leads",
          icon: <Database className="w-5 h-5" />,
          text: "Lead Database",
        },
        {
          to: "/ai-scripts",
          icon: <Code className="w-5 h-5" />,
          text: "AI Script Manager",
        },
      ],
    },
    {
      title: "SYSTEM",
      items: [
        {
          to: "/users",
          icon: <Users className="w-5 h-5" />,
          text: "User Management",
        },
        {
          to: "/logs",
          icon: <FileText className="w-5 h-5" />,
          text: "Activity Logs",
        },
        {
          to: "/settings",
          icon: <IoMdSettings className="w-5 h-5" />,
          text: "Settings",
        },
      ],
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
          <div className="space-y-6">
            {menuSections.map((section, index) => (
              <div key={index}>
                {section.title && isOpen && (
                  <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 px-2">
                    {section.title}
                  </h3>
                )}
                <ul className="space-y-2">
                  {section.items.map((item) => (
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
                            ${
                              isActive
                                ? "bg-white text-black dark:bg-primary"
                                : ""
                            }`
                          }
                        >
                          {item.icon}
                          <span className="ml-3 font-medium">{item.text}</span>
                        </NavLink>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
