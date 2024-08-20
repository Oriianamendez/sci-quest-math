import { ReactNode } from "react";

type Props = { children: ReactNode };

export function Main({ children }: Props) {
  return <main className="container mx-auto pt-4">{children}</main>;
}
