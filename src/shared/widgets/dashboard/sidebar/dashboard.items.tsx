import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
  const pathName = usePathname();

  const LogoutHandler = () => {
    signOut();
    redirect("/sign-in");
  };

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  const items = bottomContent ? sideBarBottomItems : sideBarItems;

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isActive = item.url === activeRoute || 
          (activeRoute?.startsWith(item.url) && item.url !== "/");

        return (
          <Link
            key={index}
            href={
              bottomContent && item.url === "/"
                ? `/subscribe?username=${user?.username || user?.primaryEmailAddress?.emailAddress?.split('@')[0] || "My"}`
                : item.url
            }
            className={`group flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#22D3EE]/10 to-[#3B82F6]/10 text-white border border-[#22D3EE]/20 shadow-lg shadow-[#22D3EE]/5"
                : "text-gray-400 hover:text-white hover:bg-white/[0.07] hover:shadow-lg hover:shadow-white/5"
            }`}
          >
            <span
              className={`text-2xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent"
                  : "group-hover:scale-125 group-hover:text-white"
              }`}
            >
              {item.icon}
            </span>

            <span
              className={`text-base font-semibold tracking-wide ${
                isActive
                  ? "bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent"
                  : "group-hover:translate-x-0.5 transition-transform duration-200"
              }`}
            >
              {item.title}
            </span>

            {isActive && (
              <div className="ml-auto h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] shadow-lg shadow-[#22D3EE]/30" />
            )}
          </Link>
        );
      })}

      {bottomContent && (
        <button
          onClick={LogoutHandler}
          className="group flex items-center gap-4 px-5 py-3.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 w-full text-left hover:shadow-lg hover:shadow-red-500/5"
        >
          <span className="text-2xl group-hover:scale-125 group-hover:text-red-400 transition-all duration-300">
            {ICONS.logOut}
          </span>
          <span className="text-base font-semibold tracking-wide group-hover:translate-x-0.5 transition-transform duration-200">
            Sign Out
          </span>
        </button>
      )}
    </div>
  );
};

export default DashboardItems;
