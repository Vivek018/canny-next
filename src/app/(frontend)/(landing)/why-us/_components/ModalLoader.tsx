import { Spinner } from "@/common/ui/Spinner";

export function ModalLoader() {
  return (
    <div className='w-1/3 ml-4 lg:ml-0 md:w-2/5 lg:w-1/2 h-1/2 lg:h-full grid place-items-center'>
      <Spinner svgClassName="w-10" />
    </div>
  );
}
