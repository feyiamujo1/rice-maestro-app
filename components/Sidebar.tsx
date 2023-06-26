"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillTrendUp, FaTractor } from "react-icons/fa6";
import { GiBarn, GiFertilizerBag, GiPlantSeed } from "react-icons/gi";
import { MdDashboard, MdPestControl } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import { TbPlant2Off } from "react-icons/tb";

export default function SideBar() {
  const currentRoute = usePathname();
  return (
    <div className="h-screen space-y-4 bg-white px-2 py-10 pt-[100px] shadow-lg md:w-96 md:px-6">
      <p
        className={
          currentRoute === "/"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link href="/" className="flex w-full items-center gap-2">
          <MdDashboard className="text-2xl md:text-lg" />
          <span className="hidden md:block">Home</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/land-information"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/land-information"
          className="flex w-full items-center gap-2"
        >
          <RiLandscapeFill className="text-2xl md:text-lg" />
          <span className="hidden md:block">Land Information</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/seedling-information"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/seedling-information"
          className="flex w-full items-center gap-2"
        >
          <GiPlantSeed className="text-2xl md:text-lg" />
          <span className="hidden md:block">Seedling Information</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/fertilizer-information"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/fertilizer-information"
          className="flex w-full items-center gap-2"
        >
          <GiFertilizerBag className="text-2xl md:text-lg" />
          <span className="hidden md:block">Fertilizer Information</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/weeding-information"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/weeding-information"
          className="flex w-full items-center gap-2"
        >
          <TbPlant2Off className="text-2xl md:text-lg" />
          <span className="hidden md:block">Weeding Information</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/pests-and-diseases-control"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/pests-and-diseases-control"
          className="flex w-full items-center gap-2"
        >
          <MdPestControl className="text-2xl md:text-lg" />
          <span className="hidden md:block">Pests & Diseases Control</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/harvesting-processes"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/harvesting-processes"
          className="flex w-full items-center gap-2"
        >
          <FaTractor className="text-2xl md:text-lg" />
          <span className="hidden md:block">Harvesting Processes</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/post-harvesting-processes"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/post-harvesting-processes"
          className="flex w-full items-center gap-2"
        >
          <GiBarn className="text-2xl md:text-lg" />
          <span className="hidden md:block">Post Harvest Processes</span>
        </Link>
      </p>
      <p
        className={
          currentRoute === "/market-price-and-information"
            ? "flex cursor-pointer items-center gap-2 rounded-md bg-custom-green px-2 py-1.5 text-base font-semibold text-white transition-all hover:bg-custom-hover-green"
            : "flex cursor-pointer items-center gap-2 rounded-md bg-[#f9fafb] px-2 py-1.5 text-base font-semibold text-black transition-all hover:bg-custom-green hover:text-white"
        }
      >
        <Link
          href="/market-price-and-information"
          className="flex w-full items-center gap-2"
        >
          <FaMoneyBillTrendUp className="text-2xl md:text-lg" />
          <span className="hidden md:block">Market Price & Information</span>
        </Link>
      </p>
    </div>
  );
}
