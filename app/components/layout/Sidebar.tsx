import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="fixed top-[108px] left-6 z-50 w-[72px] max-h-[calc(100vh-120px)] no-scrollbar overflow-y-auto overflow-x-clip border rounded-2xl px-4 py-6 mb-5 space-y-4">
            <Image
                src={"/images/icons/dashboard.svg"}
                alt="dashboard-icon"
                width={40}
                height={40}
            />
            <SidebarItem iconPath={"/images/icons/mortarboard-02.svg"} />
            <SidebarItem iconPath={"/images/icons/marketing.svg"} />
            <SidebarItem iconPath={"/images/icons/bars.svg"} />
            <SidebarItem iconPath={"/images/icons/message-02.svg"} />
            <SidebarItem iconPath={"/images/icons/bars-02.svg"} />
            <SidebarItem iconPath={"/images/icons/user-group.svg"} />
            <SidebarItem iconPath={"/images/icons/calendar-03.svg"} />

            <div className="h-px bg-black/20" />

            <SidebarItem iconPath={"/images/icons/analytics-up.svg"} />
            <SidebarItem iconPath={"/images/icons/money-bag-02.svg"} />
            <SidebarItem iconPath={"/images/icons/ranking.svg"} />

            <div className="h-px bg-black/20" />

            <SidebarItem iconPath={"/images/icons/customer-support.svg"} />
            <SidebarItem iconPath={"/images/icons/user-group.svg"} />
            <SidebarItem iconPath={"/images/icons/search.svg"} />
        </div>
    );
}

function SidebarItem({ iconPath }: { iconPath: string }) {
    return (
        <div className="w-10 h-10 flex items-center justify-center">
            <Image src={iconPath} alt="sidebar icon" width={20} height={20} />
        </div>
    );
}
