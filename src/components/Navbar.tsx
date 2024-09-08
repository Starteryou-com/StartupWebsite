import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Jobs", href: "/jobs" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 px-8 text-white">
      <Link href="/" className="font-semibold">
        STARTERYOU
      </Link>
      <nav>
        <ul className="flex items-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`${buttonVariants({ variant: "link" })} font-semibold !text-white`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
