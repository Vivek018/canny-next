"use client";

import { Icons } from "@/libs/Icons";
import { cn } from "@/libs/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { landingPageRoutes } from "@/constants";
import { LandingPageRoutes } from "@/types";

type Props = {
  route: (typeof landingPageRoutes)[0];
};

const commonStyles = "transition-all duration-100";

export function NavbarItem({ route }: Props) {
  const pathname = usePathname();
  const sameRoute = pathname.startsWith(`/${route.slug}`);
  const Icon = Icons[`${route.title}` as LandingPageRoutes];

  return (
    <Link
      aria-disabled={sameRoute}
      href={`/${route.slug}`}
      className={cn(
        commonStyles,
        "flex-1 min-h-full md:min-h-min group flex flex-col items-center gap-2 py-3 my-0 md:my-3 justify-center md:flex-row md:justify-start md:py-0 md:mx-10 overflow-hidden",
        sameRoute &&
          "z-40 bg-accent hover:bg-blue-200 md:bg-transparent cursor-auto"
      )}
    >
      <Icon
        className={cn(
          commonStyles,
          "xs:w-4 xs:h-4 md:hidden translate-transform",
          sameRoute && "scale-125"
        )}
      />
      <h3
        className={cn(
          commonStyles,
          "transition-transform md:after:duration-300 md:after:transition-transform uppercase md:font-semibold text-[8px] xs:text-[10px] sm:text-sm sm:tracking-wider relative md:after:absolute md:after:block md:after:h-0.5 md:after:w-full md:after:bg-foreground md:after:-translate-x-32 group-hover:md:after:translate-x-0",
          "",
          sameRoute &&
            "hidden md:inline md:after:translate-x-0 md:after:bg-primary"
        )}
      >
        {route.title}
      </h3>
    </Link>
  );
}
