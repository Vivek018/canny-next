"use client";

import { ThemeToggle } from "./ThemeToggle";
import { HeaderLink } from "@/common/HeaderLink";
import { Logo } from "@/common/Logo";
import { routes } from "@/constants";
import { cn } from "@/libs/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export function Header({}: Props) {
  const pathname = usePathname();
  const homePage = pathname !== routes.articles && pathname !== routes.contact;
  const bgColor = homePage && pathname !== routes.whyUS;

  return (
    <header
      className={cn(
        "flex py-4 sm:py-6 lg:py-10 xs:px-2 sm:px-4 md:px-8 lg:px-10 justify-between items-center mx-auto gap-2 md:gap-4 bg-transparent z-50",
        homePage && "fixed w-full",
        bgColor && "bg-background"
      )}
    >
      <Link
        href='/'
        className='lg:absolute lg:left-8 w-8 mx-2 xs:w-10 sm:w-12 lg:w-14 z-50'
        aria-label='Go To Home Page'
      >
        <Logo />
      </Link>
      <nav className='flex gap-5 xs:gap-7 sm:gap-9 md:gap-12 mx-auto'>
        <HeaderLink
          link='/'
          className={
            homePage && !pathname.includes(routes.articles) ? "hidden" : ""
          }
          title='Home'
        />
        <HeaderLink
          link={routes.articles}
          className={pathname.includes(routes.articles) ? "hidden" : ""}
          title='Articles'
        />
        <HeaderLink
          link={routes.contact}
          className={pathname === routes.contact ? "hidden" : ""}
          title='Contact'
        />
      </nav>
      <ThemeToggle className='lg:absolute lg:right-10' />
    </header>
  );
}
