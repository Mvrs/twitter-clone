/* eslint-disable @next/next/no-img-element */

import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://media.licdn.com/dms/image/D5603AQE2MJqyXUhOMw/profile-displayphoto-shrink_400_400/0/1667242045179?e=1679529600&v=beta&t=j9IJtL5XvlZTNkvb6bLK56Bd418rmf1MjicPG4Ev9qA"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows={2}
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotoIcon className="h-10 w-10 hover-effect p-2 text-sky-500 hover:bg-sky-100" />
            <FaceSmileIcon className="h10 w-10 hover-effect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
