import React, { useState, useEffect } from "react";
import Link from "next/link";
import IconWrap from "./IconWrap";
import { useRouter } from "next/router";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMedium,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsFillCaretUpFill } from "react-icons/bs";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navLink, setNavLink] = useState<string>("gray-700");
  const router = useRouter();
  const menuLinks = [
    { id: 1, item: "Home", path: "/#home" },
    { id: 2, item: "About", path: "/#about" },
    { id: 3, item: "Projects", path: "/#projects" },
    { id: 5, item: "Contact", path: "/#contact" },
  ];

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleShadow = () => {
    if (window.scrollY > 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
  }, []);
  useEffect(() => {
    if (
      router.asPath === "/#home" ||
      router.asPath === "/#about" ||
      router.asPath === "/#projects" ||
      router.asPath === "/#contact"
    ) {
      setNavLink("[#1f2937]");
    } else {
      setNavLink("gray-700");
    }
  }, [router]);

  return (
    <div
      className={
        shadow
          ? "px-10  w-full bg-[#ECF0F3]  shadow-xl z-[100] flex justify-between items-center sm:px-20 top-0 left-0 fixed h-[80px] mb-10"
          : "w-full  bg-[#ECF0F3] z-[100] flex justify-between items-center fixed px-20 h-[80px] top-0 left-0 "
      }
    >
      <div className="p-3 cursor-pointer bg-[#ECF0F3]  border-[#e91e63] text-center">
        <h1 className="text-regal-pink  italic">MM</h1>
      </div>

      <ul className="hidden sm:flex w-[40%] justify-between list-none">
        {menuLinks.map((item) => (
          <Link key={item.id} href={item.path}>
            <li
              className={`text-base font-medium hover:border-b-2 uppercase text-${navLink}`}
            >
              {item.item}
            </li>
          </Link>
        ))}
      </ul>
      <div className="block md:hidden" onClick={handleMenu}>
        <FaBars size={24} />
      </div>
      {shadow ? (
        <button
          onClick={scrollToTop}
          className=" border-[#e91e63] scroll-smooth flex items-center animate-bounce justify-center shadow-lg fixed w-[40px] h-[40px] right-20 bottom-8 transition-all bg-slate-50/50 cursor-pointer"
        >
          <BsFillCaretUpFill className="text-regal-pink " size={25} />
        </button>
      ) : (
        ""
      )}
      {/* overlay */}
      {openMenu && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleMenu;
          }}
          className="h-screen fixed left-0 w-full top-0 bg-black/50"
        >
          <div className="fixed top-0 left-0  p-8 z-[100] bg-[#ecf0f3] h-full  ease-in-out duration-700 max-sm:w-[70%] py-0 ">
            <div className="flex justify-between h-[76px] items-center">
              <h3>My Logo</h3>
              <div onClick={handleMenu}>
                <FaTimes size={24} />
              </div>
            </div>
            <div>
              <p className="my-8">Let's build together!!</p>
            </div>
            <ul className="list-none">
              {menuLinks.map((item) => (
                <Link
                  onClick={() => setOpenMenu(false)}
                  key={item.id}
                  href={item.path}
                >
                  <li className="uppercase py-8"> {item.item}</li>
                </Link>
              ))}
            </ul>
            <div className="my-8">
              <p>Follow me on my socials</p>
            </div>
            <div className="flex justify-between w-full">
              <IconWrap
                href="https://www.linkedin.com/in/mary-maina/
"
              >
                <AiFillLinkedin />
              </IconWrap>
              <IconWrap href="https://github.com/MainaMary">
                <AiFillGithub />
              </IconWrap>
              <IconWrap href="https://twitter.com/Wanjiku_MM">
                <AiFillTwitterCircle />
              </IconWrap>
              <IconWrap href="https://wanjikumary.medium.com/">
                <AiOutlineMedium />
              </IconWrap>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
