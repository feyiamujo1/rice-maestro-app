"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaMoneyBillTrendUp, FaTractor } from "react-icons/fa6";
import { GiBarn, GiFertilizerBag, GiPlantSeed } from "react-icons/gi";
import { MdDashboard, MdPestControl } from "react-icons/md";
import { RiLandscapeFill } from "react-icons/ri";
import { TbPlant2Off } from "react-icons/tb";


export default function SideBar() {
    const currentRoute = usePathname();
    return(
        <div className="  py-10 px-6 h-screen w-96 pt-[100px] space-y-4 bg-white shadow-lg">
            <p  
            className={
                currentRoute === "/" ?
                "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                :
                "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                }
            >
                <Link href="/" className="flex gap-2 items-center w-full">
                    <MdDashboard className="text-lg" /> 
                    Home
                </Link>
            </p>
            <p 
            className={
                currentRoute === "/land-information" ?
                "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                :
                "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                }
            >
                <Link href="/land-information" className="flex gap-2 items-center w-full">
                    <RiLandscapeFill className="text-lg" /> 
                    Land Information
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/seed-information" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/seed-information" className="flex gap-2 items-center w-full">
                    <GiPlantSeed className="text-lg" /> 
                    Seedling Information
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/fertilizer-information" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/fertilizer-information" className="flex gap-2 items-center w-full">
                    <GiFertilizerBag className="text-lg" />
                    Fertilizer Information
                </Link>
            </p>
            <p
                className={
                    currentRoute === "/weeding-information" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/weeding-information" className="flex gap-2 items-center w-full">
                    <TbPlant2Off className="text-lg" />
                    Weeding Information
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/pest-disease-control" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/pest-disease-control" className="flex gap-2 items-center w-full">
                    <MdPestControl className="text-lg" />
                    Pests & Diseases Control
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/harvesting-processes" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >                
                <Link href="/harvesting-processes" className="flex gap-2 items-center w-full">
                    <FaTractor className="text-lg" />
                    Harvesting Processes
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/post-harvesting-processes" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/post-harvesting-processes" className="flex gap-2 items-center w-full">
                    <GiBarn className="text-lg" />
                    Post Harvest Processes
                </Link>
            </p>
            <p 
                className={
                    currentRoute === "/market-price-and-information" ?
                    "cursor-pointer flex gap-2 py-1.5 px-2 rounded-md items-center text-base bg-custom-green hover:bg-custom-hover-green transition-all text-white font-semibold"
                    :
                    "cursor-pointer flex gap-2 py-1.5 px-2 bg-[#f9fafb] rounded-md items-center text-base hover:bg-custom-green hover:text-white transition-all text-black font-semibold"
                    }
                >
                <Link href="/market-price-and-information" className="flex gap-2 items-center w-full">
                    <FaMoneyBillTrendUp className="text-lg" />
                    Market Price & Information
                </Link>
            </p>
        </div>
    )
}