import * as RadixVisuallyHidden from "@radix-ui/react-visually-hidden";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function VisuallyHidden({ children }: Props) {
  return <RadixVisuallyHidden.Root>{children}</RadixVisuallyHidden.Root>;
}
