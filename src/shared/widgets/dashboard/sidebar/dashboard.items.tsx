import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
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

  const itemClass = "flex items-center gap-2 p-3";
  const activeClass = "text-indigo-600";

  const items = bottomContent ? sideBarBottomItems : sideBarItems;

  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          href={
            bottomContent && item.url === "/"
              ? `/subscribe?username=${user?.username}`
              : item.url
          }
          className={itemClass}
        >
          <span
            className={`text-2xl ${
              item.url === activeRoute ? activeClass : ""
            }`}
          >
            {item.icon}
          </span>

          <span
            className={`text-lg ${
              item.url === activeRoute ? activeClass : ""
            }`}
          >
            {item.title}
          </span>
        </Link>
      ))}

      {bottomContent && (
        <>
          {/* Sign Out */}
          <button
            onClick={LogoutHandler}
            className="flex items-center gap-2 p-3 border-b w-full text-left"
          >
            <span className="text-2xl">{ICONS.logOut}</span>
            <span className="text-lg">Sign Out</span>
          </button>

          {/* Footer */}
          <div className="mt-8 flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-primary (1).svg"
                alt="Logo"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <p className="mt-4 mb-8 text-center text-sm text-gray-500">
            © 2024 Becodemy, Inc. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

export default DashboardItems;