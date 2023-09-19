"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import {
  BsFillFileEarmarkPersonFill,
  BsFillInfoCircleFill
} from "react-icons/bs";
import { FaMoneyBillTrendUp, FaTractor } from "react-icons/fa6";
import {
  GiAppleSeeds,
  GiBarn,
  GiCampCookingPot,
  GiChipsBag,
  GiDigDug,
  GiFertilizerBag,
  GiGloves,
  GiGroundSprout,
  GiHammerSickle,
  GiHotMeal,
  GiPlantSeed,
  GiPlantWatering,
  GiWindmill
} from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDashboard, MdLandslide, MdPestControl } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import { TbPlant2Off } from "react-icons/tb";
import { cn } from "~/lib/utils";

// const routes = [
//   {
//     name: "Home",
//     icon: <MdDashboard className="text-2xl md:text-lg" />,
//     path: "/"
//   },
//   {
//     name: "Land Information",
//     icon: <RiLandscapeFill className="text-2xl md:text-lg" />,
//     path: "/land-information"
//   },
//   {
//     name: "Seedling Information",
//     icon: <GiPlantSeed className="text-2xl md:text-lg" />,
//     path: "/seedling-information"
//   },
//   {
//     name: "Fertilizer Information",
//     icon: <GiFertilizerBag className="text-2xl md:text-lg" />,
//     path: "/fertilizer-information"
//   },
//   {
//     name: "Weeding Information",
//     icon: <TbPlant2Off className="text-2xl md:text-lg" />,
//     path: "/weeding-information"
//   },
//   {
//     name: "Pests & Diseases Control",
//     icon: <MdPestControl className="text-2xl md:text-lg" />,
//     path: "/pests-and-diseases-control"
//   },
//   {
//     name: "Harvesting Processes",
//     icon: <FaTractor className="text-2xl md:text-lg" />,
//     path: "/harvesting-processes"
//   },
//   {
//     name: "Storage Processes",
//     icon: <GiBarn className="text-2xl md:text-lg" />,
//     path: "/storage-processes"
//   },
//   {
//     name: "Market Price & Information",
//     icon: <FaMoneyBillTrendUp className="text-2xl md:text-lg" />,
//     path: "/market-price-and-information"
//   }
// ];

const newRoutes = [
  {
    name: "Home",
    data: [
      {
        name: "Home",
        icon: <MdDashboard className="text-2xl md:text-lg" />,
        path: "/"
      }
    ]
  },
  {
    name: "Pre-Planting Information",
    icon: <GiAppleSeeds className="text-2xl md:text-lg" />,
    data: [
      {
        name: "Site Selection",
        icon: <MdLandslide className="text-2xl md:text-lg" />,
        path: "/site-selection"
      },
      {
        name: "Land Preparation",
        icon: <RiLandscapeFill className="text-2xl md:text-lg" />,
        path: "/land-preparation"
      },
      {
        name: "Seedling Information",
        icon: <GiPlantSeed className="text-2xl md:text-lg" />,
        path: "/seedling-information"
      },
      {
        name: "Seed Treatment",
        icon: <GiPlantWatering className="text-2xl md:text-lg" />,
        path: "/seed-treatment"
      },
      {
        name: "Planting Information",
        icon: <GiDigDug className="text-2xl md:text-lg" />,
        path: "/planting-information"
      }
    ]
  },
  {
    name: "Post-Planting Information",
    icon: <GiGroundSprout className="text-2xl md:text-lg" />,
    data: [
      {
        name: "Fertilizer Information",
        icon: <GiFertilizerBag className="text-2xl md:text-lg" />,
        path: "/fertilizer-information"
      },
      {
        name: "Weeding Information",
        icon: <TbPlant2Off className="text-2xl md:text-lg" />,
        path: "/weeding-information"
      },
      {
        name: "Pest Control",
        icon: <MdPestControl className="text-2xl md:text-lg" />,
        path: "/pest-control"
      },
      {
        name: "Rogueing Information",
        icon: <GiGloves className="text-2xl md:text-lg" />,
        path: "/rogueing-information"
      },
      {
        name: "Harvesting Information",
        icon: <FaTractor className="text-2xl md:text-lg" />,
        path: "/harvesting-information"
      }
    ]
  },
  {
    name: "Post-Harvesting Information",
    icon: <GiHammerSickle className="text-2xl md:text-lg" />,
    data: [
      {
        name: "Rice Paddy Drying",
        icon: <GiHotMeal className="text-2xl md:text-lg" />,
        path: "/rice-paddy-drying"
      },
      {
        name: "Parboiling Information",
        icon: <GiCampCookingPot className="text-2xl md:text-lg" />,
        path: "/parboiling-information"
      },
      {
        name: "Milling Information",
        icon: <GiWindmill className="text-2xl md:text-lg" />,
        path: "/milling-information"
      },
      {
        name: "Storage Information",
        icon: <GiBarn className="text-2xl md:text-lg" />,
        path: "/storage-information"
      },
      {
        name: "Bagging Information",
        icon: <GiChipsBag className="text-2xl md:text-lg" />,
        path: "/bagging-information"
      }
    ]
  },
  {
    name: "Other Information",
    icon: <BsFillInfoCircleFill className="text-2xl md:text-lg" />,
    data: [
      {
        name: "Market Information",
        icon: <FaMoneyBillTrendUp className="text-2xl md:text-lg" />,
        path: "/market-information"
      },
      {
        name: "Recommended Source for Seed",
        icon: <BiSolidContact className="text-2xl md:text-lg" />,
        path: "/recommended-source-for-seed"
      },
      {
        name: "Recommended Source for Fertilizer",
        icon: <BsFillFileEarmarkPersonFill className="text-2xl md:text-lg" />,
        path: "/recommended-source-for-fertilizer"
      }
    ]
  }
];

export default function SideBar({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const currentRoute = usePathname();
  const [showOtherInfo, setShowOtherInfo] = useState(true);
  const [showPrePlantingInfo, setShowPrePlantingInfo] = useState(false);
  const [showPostPlantingInfo, setShowPostPlantingInfo] = useState(false);
  const [showPostHarvestingInfo, setShowPostHarvestingInfo] = useState(false);

  const handleToggle = (routeName: string | undefined) => {
    switch (routeName) {
      case "Pre-Planting Information":
        setShowPrePlantingInfo(prev => !prev);
        break;
      case "Post-Planting Information":
        setShowPostPlantingInfo(prev => !prev);
        break;
      case "Post-Harvesting Information":
        setShowPostHarvestingInfo(prev => !prev);
        break;
      case "Other Information":
        setShowOtherInfo(prev => !prev);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={cn(
        "fixed h-screen space-y-4 bg-white px-2 py-10 pt-[100px] shadow-lg transition-all md:w-[350px] md:px-6 md:overflow-y-scroll md:opacity-100",
        isOpen && "w-80 overflow-y-scroll opacity-100 ",
        !isOpen && "w-0 overflow-hidden opacity-0"
      )}>
      {newRoutes.map((route, id) =>
        route?.data?.length === 1 ? (
          <div
          key={id}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-base font-semibold ",
              currentRoute === route?.data[0]?.path &&
                "bg-custom-green text-white hover:bg-custom-hover-green",
              currentRoute !== route?.data[0]?.path &&
                "bg-[#f9fafb] text-black hover:bg-custom-green hover:text-white"
            )}>
            <Link
              href={route?.data[0]?.path}
              className="flex w-full items-center gap-2">
              {route?.data[0]?.icon}
              <span>{route?.data[0]?.name}</span>
            </Link>
          </div>
        ) : (
          <div key={id}>
            <button
              onClick={() => {
                handleToggle(route?.name);
              }}
              className="w-full flex justify-between cursor-pointer items-center rounded-md px-2 py-1.5 text-base font-semibold bg-[#f9fafb] text-black hover:bg-custom-green hover:text-white">
              <span className="flex items-center gap-2 w-fit">
                {route?.icon}
                {route?.name}
              </span>
              <span>
                {(route?.name === "Pre-Planting Information" &&
                  showPrePlantingInfo) ||
                (route?.name === "Post-Planting Information" &&
                  showPostPlantingInfo) ||
                (route?.name === "Post-Harvesting Information" &&
                  showPostHarvestingInfo) ||
                (route?.name === "Other Information" && showOtherInfo) ? (
                  <IoIosArrowUp className="group-hover:fill-custom-green text-xl transition-all duration-300 ease-in" />
                ) : (
                  <IoIosArrowDown className="group-hover:fill-custom-green text-xl transition-all duration-300 ease-in" />
                )}
              </span>
            </button>
            <div
              className={cn(
                "h-0 overflow-hidden space-y-2 bg-[#f9fafb]",
                (route?.name === "Pre-Planting Information" &&
                  showPrePlantingInfo) ||
                  (route?.name === "Post-Planting Information" &&
                    showPostPlantingInfo) ||
                  (route?.name === "Post-Harvesting Information" &&
                    showPostHarvestingInfo) ||
                  (route?.name === "Other Information" && showOtherInfo)
                  ? "h-fit"
                  : ""
              )}>
              {route?.data?.map((innerroute, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-md pl-4 px-2 py-1.5 text-base font-medium ",
                    currentRoute === innerroute?.path &&
                      "bg-custom-green text-white hover:bg-custom-hover-green",
                    currentRoute !== innerroute?.path &&
                      "bg-[#f9fafb] text-[#000000] hover:bg-custom-green hover:text-white"
                  )}>
                  <Link
                    href={innerroute?.path}
                    className="flex w-full items-center gap-2">
                    {innerroute?.icon}
                    <span>{innerroute?.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
