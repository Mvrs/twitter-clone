import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HashtagIcon, HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { SidebarMenuItem } from "./sidebar-menu-item";

export function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="Twitter Logo"
        />
      </div>

      {/** Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Tweet Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* User Profile */}

      <div className="hover-effect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            "https://media.licdn.com/dms/image/D5603AQE2MJqyXUhOMw/profile-displayphoto-shrink_400_400/0/1667242045179?e=1679529600&v=beta&t=j9IJtL5XvlZTNkvb6bLK56Bd418rmf1MjicPG4Ev9qA"
          }
          className="h-10 w-10 rounded-full xl:mr-2"
          alt="Headshot"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Marlon Johnson</h4>
          <p className="text-gray-500">@MarlonJohnsxn</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 xl:inline" />
      </div>
    </div>
  );
}
