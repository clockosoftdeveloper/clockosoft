import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";

export function FloatingMessenger() {
  return (
    <Link
      href="https://m.me/your-facebook-page-id" // Replace with your Facebook Page username/ID
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on Messenger"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#0084FF] to-[#00C6FF] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out group"
    >
      {/* Messenger SVG Icon */}
      <FaFacebookMessenger />

      {/* <svg
        className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-6"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.45 5.515 3.717 7.218V22l3.355-1.843c.928.257 1.91.396 2.928.396 5.523 0 10-4.145 10-9.258S17.523 2 12 2zm1.066 12.441l-2.55-2.723-4.98 2.723 5.48-5.818 2.613 2.723 4.918-2.723-5.481 5.818z" />
      </svg> */}

      {/* Tooltip on Hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none">
        Chat with us
      </span>
    </Link>
  );
}