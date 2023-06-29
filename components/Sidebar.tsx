"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillTrendUp, FaTractor } from "react-icons/fa6";
import { GiBarn, GiFertilizerBag, GiPlantSeed } from "react-icons/gi";
import { MdDashboard, MdPestControl } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import { TbPlant2Off } from "react-icons/tb";

import { cn } from "~/lib/utils";

const routes = [
  {
    name: "Home",
    icon: <MdDashboard className="text-2xl md:text-lg" />,
    path: "/",
  },
  {
    name: "Land Information",
    icon: <RiLandscapeFill className="text-2xl md:text-lg" />,
    path: "/land-information",
  },
  {
    name: "Seedling Information",
    icon: <GiPlantSeed className="text-2xl md:text-lg" />,
    path: "/seedling-information",
  },
  {
    name: "Fertilizer Information",
    icon: <GiFertilizerBag className="text-2xl md:text-lg" />,
    path: "/fertilizer-information",
  },
  {
    name: "Weeding Information",
    icon: <TbPlant2Off className="text-2xl md:text-lg" />,
    path: "/weeding-information",
  },
  {
    name: "Pests & Diseases Control",
    icon: <MdPestControl className="text-2xl md:text-lg" />,
    path: "/pests-and-diseases-control",
  },
  {
    name: "Harvesting Processes",
    icon: <FaTractor className="text-2xl md:text-lg" />,
    path: "/harvesting-processes",
  },
  {
    name: "Storage Processes",
    icon: <GiBarn className="text-2xl md:text-lg" />,
    path: "/storage-processes",
  },
  {
    name: "Market Price & Information",
    icon: <FaMoneyBillTrendUp className="text-2xl md:text-lg" />,
    path: "/market-price-and-information",
  },
];

export default function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const currentRoute = usePathname();

  return (
    <div
      className={cn(
        "fixed h-screen space-y-4 bg-white px-2 py-10 pt-[100px] shadow-lg transition-all md:w-80 md:px-6 md:opacity-100",
        isOpen && "w-80 opacity-100",
        !isOpen && "w-0 overflow-hidden opacity-0"
      )}
    >
      {routes.map((route) => (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-base font-semibold ",
            currentRoute === route.path &&
              "bg-custom-green text-white hover:bg-custom-hover-green",
            currentRoute !== route.path &&
              "bg-[#f9fafb] text-black hover:bg-custom-green hover:text-white"
          )}
        >
          <Link href={route.path} className="flex w-full items-center gap-2">
            {route.icon}
            <span>{route.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
