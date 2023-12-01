import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isSidebarOpen, setSidebarVisibility] = useState(false);

  const closeSidebar = () => setSidebarVisibility(false);
  const openSidebar = () => setSidebarVisibility(true);

  return (
    <nav className="h-navbar  -height fixed top-0 left-0 w-full z-[1000]">
      <header className="nav-color relative">
        <div className="container-wrapper h-[72px] flex items-center justify-between">
          <a href="/">
            <img
              src="/images/logo.png"
              alt=""
              width="150px"
              height="28px"
              className="cursor-pointer"
            />
          </a>

          <button
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="flex lg:hidden text-white text-3xl"
          >
            {isSidebarOpen ? <MdClose /> : <AiOutlineMenu />}
          </button>

          <aside
            className={twMerge(
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] max-lg:h-[calc(100vh-72px)] max-lg:bg-text nav-color  flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-white lg:[&>*]:text-white [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            <a
              className="font-medium cursor-pointer text-white uppercase font-bitsu text-xl"
              onClick={() => setSidebarVisibility(false)}
            >
              Whitepaper
            </a>
            <a
              onClick={closeSidebar}
              href="#roadmap"
              className="font-medium cursor-pointer uppercase font-bitsu text-xl"
            >
              Roadmap
            </a>

            <a
              href="#token"
              onClick={closeSidebar}
              id="how-to-buy"
              className="font-medium cursor-pointer uppercase font-bitsu text-xl"
            >
              Tokenomic
            </a>

            <a
              onClick={closeSidebar}
              id="faqs"
              href="#howto"
              className="font-medium cursor-pointer text-white uppercase font-bitsu text-xl"
            >
              how to use
            </a>

            <div className="flex justify-start items-center gap-6 py-5">
              <a
                href="/"
                className="btn-main px-8 py-2 mr-4 font-bitsu text-base sm:text-xl"
              >
                Launch Bot
              </a>
            </div>

            {/* <Button className="rounded-md text-sm h-10 mt-4 mb-6 lg:hidden">
              {t("Buy ETHETF Token")}
            </Button> */}

            <div className="flex max-lg:space-x-8 space-x-4 justify-center max-lg:[&>*]:invert">
              <a
                rel="noreferrer"
                href="https://x.com/ethetf_token"
                target="_blank"
              >
                <img
                  src="/images/icons/twitter.svg"
                  className="max-lg:h-8 h-6"
                  alt=""
                />
              </a>
              <a
                rel="noreferrer"
                href="https://t.me/ETHETF_Token"
                target="_blank"
              >
                <img
                  src="/images/icons/telegram.svg"
                  className="max-lg:h-8 h-6"
                  alt=""
                />
              </a>
            </div>
          </aside>
        </div>
      </header>
    </nav>
  );
}
