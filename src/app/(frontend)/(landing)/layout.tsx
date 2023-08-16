import { ComponentWrapper } from "./_components/ComponentWrapper";

export default function LandingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ComponentWrapper>{children}</ComponentWrapper>;
}
