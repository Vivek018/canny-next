import { landingPageRoutes } from "@/constants";
import { NavbarItem } from "./NavbarItem";

type Props = {};

export function Navbar({}: Props) {

  return (
    <nav className='fixed bg-muted text-muted-foreground dark:brightness-90 mb-5 md:bg-transparent bottom-0 right-1/2 left-1/2 transform -translate-x-1/2 rounded-full shadow-md border-[0.25px] flex justify-between w-11/12 overflow-hidden md:left-0 md:right-auto md:top-[55%] md:bottom-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:h-[350px] md:rounded-none md:border-none md:shadow-none md:w-auto z-50'>
      {landingPageRoutes.map((route) => (
        <NavbarItem key={route.slug} route={route} />
      ))}
    </nav>
  );
}
