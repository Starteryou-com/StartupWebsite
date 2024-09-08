import React from "react";
import Container from "./Container";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Jobs", href: "/jobs" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#CDF3F666] to-[#BBAEFD66]">
      <Container>
        <div className="flex items-start justify-between">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt{" "}
          </p>
          <div className="">
            <h2 className="text-2xl text-[#7950F2]">Navigation</h2>
            <ul className="flex list-inside flex-col">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`${buttonVariants({ variant: "link" })} !text-black`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-2xl text-[#7950F2]">Socials</h2>
            <ul className="flex list-inside flex-col">
              <li>
                <Link
                  className={`${buttonVariants({ variant: "link" })} !text-black`}
                  href="#"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-start gap-12"></div>
        </div>
      </Container>
    </footer>
  );
}
