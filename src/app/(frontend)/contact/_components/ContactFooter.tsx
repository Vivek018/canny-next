import { cn } from "@/libs/cn";
import { address, contact, socialLink } from "../_constants";

type Props = {};

const commonStyles = "flex gap-4 justify-center md:border-none";
const commonBorder = "border-t border-muted-foreground py-6";

export function ContactFooter({}: Props) {
  return (
    <footer className='w-full rounded-lg my-6 px-4 md:px-6 lg:px-8 py-4 text-sm md:text-[16px] flex flex-col gap-6 bg-primary text-white text-center md:text-left'>
      <section className='flex flex-col md:flex-row justify-between'>
        <address className={cn("py-6 md:w-1/4 sm:leading-6 md:leading-9")}>
          {address}
        </address>
        <div
          className={cn(
            commonBorder,
            commonStyles,
            "gap-6 md:gap-4 md:flex-col md:justify-start"
          )}
        >
          {socialLink.map(({ name, link, Icon }, index) => {
            return (
              <a
                key={link}
                href={`${link}`}
                target='_blank'
                className='flex gap-4 hover:opacity-70 transition duration-200 items-center'
              >
                <Icon className="w-5 h-5" />
                <p className='hidden md:inline capitalize'>{name}</p>
              </a>
            );
          })}
        </div>
        <div className={cn(commonBorder, "flex py-0 md:border-none")}>
          <div
            className={cn(
              commonStyles,
              "flex-col md:justify-start items-start mx-auto md:mx-0 pt-6"
            )}
          >
            {contact.map(({ text, Icon }, index) => {
              return (
                <h3 key={index} className='flex justify-center items-center gap-4'>
                  <Icon />
                  <p>{text}</p>
                </h3>
              );
            })}
          </div>
        </div>
      </section>
      <code className={cn(commonBorder, "opacity-50")}>
        Copyright © 2023 Canny Next Infotech
      </code>
    </footer>
  );
}
