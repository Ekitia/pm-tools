import { Settings, SquareKanban } from "lucide-react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../avatar";

interface MenuItemProps {
    icon: React.ReactNode;
    label: string,
    active?: boolean
}

function MenuItem({ icon, label, active }: MenuItemProps) {
    const activeClass = active ? "bg-sky-400 text-black" : "text-slate-600";

    return (
        <div className="w-10 h-10 text-center flex flex-col items-center justify-center group">
            <div className={`mb-1 p-2 w-8 h-8 ${activeClass} rounded group-hover:bg-slate-400 transition-all transition-duration-200`}>
                {icon}
            </div>
            <span className="text-xs text-gray-500">{label}</span>
        </div>
    );
}

function MainSidebar() {
    return (
        <aside className="w-16 border-r border-gray-200 flex flex-col items-center justify-between py-4">
            {/* Start: Main Menu */}
            <div>
                <div className="brand w-10 h-10 bg-sky-600 rounded-lg mb-8"></div>

                <nav className="flex flex-col items-center justify-center space-y-6">
                    <MenuItem icon={<SquareKanban className="w-4 h-4" />} label="Projects" active={true} />
                    <MenuItem icon={<SquareKanban className="w-4 h-4" />} label="Wiki" active={false} />
                    <MenuItem icon={<SquareKanban className="w-4 h-4" />} label="Pi" active={false} />
                </nav>
            </div>
            {/* End: Main Menu */}

            <div id="user-menu" className="flex flex-col items-center justify-center space-y-4">
                <div className="settings">
                    <Settings />
                </div>
                <div className="user-profile">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                        <AvatarBadge className="bg-green-600" />
                    </Avatar>
                </div>
            </div>
        </aside>
    );
}

export default MainSidebar;