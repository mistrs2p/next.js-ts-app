"use client";
import { Test } from "@/components/Test/Test";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searhParams = useSearchParams();
  console.log(searhParams.get("color"));
  console.log(searhParams.get("search"));
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link href={"/dashboard#yellow"}>Dashboard yellow</Link>
        </li>
        <li>
          <Link href={"/dashboard#green"}>Dashboard green</Link>
        </li>
        <li>
          <Link href={"/dashboard#red"}>Dashboard red</Link>
        </li>
      </ul>
      <main>
        <Test firstName="Mahdi" lastName="Mousavi" age={31} />
      </main>
    </div>
  );
}
