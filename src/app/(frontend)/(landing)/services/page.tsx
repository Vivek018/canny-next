import { servicesRoutes } from "@/constants";
import { redirect } from "next/navigation";

type Props = {};

export default function ServicePage({}: Props) {
  return redirect(`/services/${servicesRoutes[0].slug}`);
}
