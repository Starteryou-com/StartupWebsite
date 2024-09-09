import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-gradient-to-br from-[#CDF3F666] to-[#BBAEFD66]">
      <Container>
        <div className="space-y-12">
          <h1 className="text-center text-5xl font-bold">Upcoming Features</h1>
          <div className="flex items-end -space-x-20">
            <div className="-z-10">
              <Image
                src="/features 2.svg"
                alt="features"
                width={500}
                height={500}
              />
            </div>
            <div className="">
              <Image
                src="/features 1.svg"
                alt="features"
                width={600}
                height={600}
              />
            </div>
            <div className="-z-10">
              <Image
                src="/features 3.svg"
                alt="features"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-center text-3xl font-bold">
              Get top job analysis
            </h2>
            <p className="mx-auto w-1/2 text-center text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet do
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
