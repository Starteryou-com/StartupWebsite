import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="min-h-[80vh]">
      <div className="mx-auto max-w-[80%]">
        <div
          className="absolute left-0 top-0 -z-10 h-fit max-h-fit w-full pt-36"
          style={{ background: "hsla(251, 100%, 41%, 1)" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute -top-32 left-1/2 -z-10 h-[600px] w-[1200px] -translate-x-1/2 overflow-hidden rounded-full bg-[#E5F1FF]/35 blur-3xl filter backdrop-blur-3xl"></div>
            <div className="relative space-y-6">
              <Image
                src="/paper plane.png"
                alt="plane"
                width={150}
                height={150}
                className="absolute -top-8 left-24"
              />
              <Image
                src="/scholars hat.png"
                alt="plane"
                width={150}
                height={150}
                className="absolute -top-8 right-16"
              />
              <Image
                src="/spiral.png"
                alt="plane"
                width={150}
                height={150}
                className="absolute -bottom-28 left-16"
              />
              <h1 className="text-center text-5xl font-bold uppercase text-black">
                Collaborate Together
              </h1>
              <p className="mx-auto w-3/4 text-center text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link className="font-bold !text-primary" href="#">
                    Try For Free
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link className="font-bold" href="#">
                    Get Demo
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-end -space-x-8 pt-12">
              <div className="-z-10">
                <Image
                  src="/Home page 1.png"
                  alt="Home page 1.png"
                  width={400}
                  height={400}
                  className=""
                />
              </div>
              <div className="">
                <Image
                  src="/Home page 1.png"
                  alt="Home page 1.png"
                  width={600}
                  height={600}
                />
              </div>
              <div className="-z-10">
                <Image
                  src="/Home page 1.png"
                  alt="Home page 1.png"
                  width={400}
                  height={400}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
