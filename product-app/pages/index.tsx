import Image from "next/image";
import { Inter } from "next/font/google";

import SectionBody from "@/components/sectionbody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={`flex flex-col items-center justify-between px-24 ${inter.className}`}
  >
    <SectionBody />
  </main>
  );
}
