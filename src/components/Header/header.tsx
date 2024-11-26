"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./header.module.css";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const links = [
  { name: "home", href: "/" },
  { name: "dashboard", href: "/dashboard" },
  { name: "blog", href: "/blog" },
  { name: "settings", href: "/dashboard/settings" },
  { name: "account", href: "/account" },
  { name: "about", href: "/about" },
  // { name: "dashboard/profile", href: "/dashboard/profile" },
  // { name: "dashboard/notifications", href: "/dashboard/notifications" },
  // { name: "dashboard/messages", href: "/dashboard/messages" },
  // { name: "dashboard/friends", href: "/dashboard/friends" },
  // { name: "dashboard/activity", href: "/dashboard/activity" },
  // { name: "dashboard/search", href: "/dashboard/search" },
  // { name: "dashboard/settings/profile", href: "/dashboard/settings/profile" },
  // { name: "dashboard/settings/notifications", href: "/dashboard/settings/notifications" },
];
function Header() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  return (
    <header className="header p-4 flex gap-2">
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.forward()}>Forward</button>
      <ul className="flex justify-center gap-x-10 border font-caveat">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`capitalize ${
                pathname === link.href ? "bg-slate-600" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center gap-x-10 border">
        {links.map((link, index) => (
          <li key={index}>
            <span
              onClick={() =>
                link.name == "home" || link.name == "blog"
                  ? router.push(link.href)
                  : router.replace(link.href)
              }
              className={`capitalize cursor-pointer ${
                pathname === link.href ? "bg-slate-600" : ""
              }`}
            >
              {link.name}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
