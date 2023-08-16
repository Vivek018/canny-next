import { CompanyIcons } from "@/libs/Icons";
import { techStack } from "../_constants";
import { TechStackTypes } from "@/types";
import { cn } from "@/libs/cn";
import { Dialog, DialogContent, DialogTrigger } from "@/common/ui/Dialog";
import { Button } from "@/common/ui/Button";

type Props = {
  tech: (typeof techStack)[0];
  index: number;
};

export function TechInfo({
  tech: { title, color, description },
  index,
}: Props) {
  const Icon = CompanyIcons[title as TechStackTypes];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <TechHomeSection
          title={title}
          color={color}
          index={index}
          Icon={Icon}
        />
      </DialogTrigger>
      <DialogContent className='px-4 py-6 sm:max-w-[425px]'>
        <Icon
          className={cn(
            "absolute text-[200px] opacity-[16%] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2",
            color
          )}
        />
        <h1 className='text-2xl font-bold mx-auto'>{title}</h1>
        <span className='block h-1 w-full bg-border'></span>
        <p className='opacity-70 text-sm sm:text-base sm:leading-5 tracking-wide'>
          {description}
        </p>
      </DialogContent>
    </Dialog>
  );
}

const TechHomeSection = ({
  index,
  Icon,
  title,
  color,
}: {
  index: number;
  Icon: any;
  title: string;
  color: string;
}) => (
  <div
    className={cn(
      "flex flex-col items-center justify-between gap-3 md:gap-7 py-2 md:py-4 px-0 bg-muted cursor-pointer hover:opacity-80 rounded-md",
      index === techStack.length - 1 && "col-span-2 sm:col-auto"
    )}
  >
    <Icon
      className={cn(
        "text-2xl sm:text-4xl md:text-[65px] dark:opacity-60",
        color
      )}
    />
    <h2 className='text-sm sm:text-base md:text-xl font-semibold sm:font-bold text-muted-foreground tracking-normal sm:tracking-wider'>
      {title}
    </h2>
  </div>
);
