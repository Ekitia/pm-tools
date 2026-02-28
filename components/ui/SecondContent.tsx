import {
    Search, SquarePen, House, Inbox, Briefcase, UsersRound, Lightbulb, LayoutDashboard, Ellipsis,
    Search as SearchIcon, Rocket, Layers, RefreshCcwDot, AlarmClock
} from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";

function SecondContent() {
    return (
        <div className="w-64 border-r border-gray-200 bg-white h-full p-6">
            <h1>Projects</h1>
            <div className="flex items-center justify-between mt-3">
                <div className="relative flex space-x-2">
                    <div className="text-blue-800 absolute left-2 top-1/2 -translate-y-1/2">
                        <SquarePen size={18} />
                    </div>
                    <Input className="pl-8 placeholder:tracking-tight placeholder:text-grey-800"
                        placeholder="Search projects"
                    />
                    <Button className="bg-sky-400 text-white">
                        <Search size={18} />
                    </Button>
                </div>
            </div>
            <SecondMenu />
        </div>
    )
}

function SecondMenu() {
    return (
        <div className="flex flex-col mt-5">
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <House className="flex mr-3" size={16} />
                <h2 className="text-sm">Home</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <Inbox className="flex mr-3" size={16} />
                <h2 className="text-sm">Inbox</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <Briefcase className="flex mr-3" size={16} />
                <h2 className="text-sm">Projects</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <UsersRound className="flex mr-3" size={16} />
                <h2 className="text-sm">Teamspaces</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <Lightbulb className="flex mr-3" size={16} />
                <h2 className="text-sm">Initiatives</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <LayoutDashboard className="flex mr-3" size={16} />
                <h2 className="text-sm">Dashboards</h2>
            </div>
            <div className="flex items-center text-black p-1.5 rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                <Ellipsis className="flex mr-3" size={16} />
                <h2 className="text-sm">More</h2>
            </div>
            <Teamspaces />
            <Projects />
        </div>
    )
}

function Teamspaces() {
    return (
        <div className="flex flex-col text-gray-400 ml-2 mt-5">
            <h2 className="text-sm">Teamspaces</h2>
            <div className="flex items-center text-black mt-3">
                <div className="flex items-center text-black p-1.5 w-full rounded-md hover:bg-sky-100 cursor-pointer transition-all duration-200">
                    <Search className="flex mr-3" size={16} />
                    <h2 className="text-sm">Marketing</h2>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="flex flex-col text-gray-400 ml-2 mt-5">
            <h2 className="text-sm">Projects</h2>
            <div className="flex items-center text-black mt-4">
                <Rocket className="flex mr-3" size={16} />
                <h2 className="text-sm">Auto-campaigns launch</h2>
            </div>
            <div className="flex items-center text-black mt-3 pl-3">
                <Layers className="flex mr-3" size={16} />
                <h2 className="text-sm">Work items</h2>
            </div>
            <div className="flex items-center text-black mt-3 pl-3">
                <RefreshCcwDot className="flex mr-3" size={16} />
                <h2 className="text-sm">Cycles</h2>
            </div>
            <div className="flex items-center text-black mt-4">
                <AlarmClock className="flex mr-3" size={16} />
                <h2 className="text-sm">Post-launch nurture</h2>
            </div>
        </div>
    )
}

export default SecondContent;