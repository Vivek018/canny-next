import { ReactNode } from "react";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export function ComponentWrapper({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
