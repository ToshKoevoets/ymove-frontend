import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "../../lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  logo?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
    domain? :string;
  };
  children: ReactNode;
}) {
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />

      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm main-logo"
            ></Image>
            <p>Precedent</p>
          </Link>

        </div>
      </div>
      <main style={{zIndex:10000000}}>
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
        <p className="text-gray-500">
          Powered By  <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://ymove.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Move
          </a>
        </p>
      </div>
    </>
  );
}
