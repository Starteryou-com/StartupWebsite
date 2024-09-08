import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import Image from "next/image";

export default function team() {
  return (
    <Container>
      <div className="flex justify-between gap-12">
        <div className="w-3/4 space-y-4">
          <h1 className="text-3xl font-bold">LOREM IPSUM DOLLER SIT AMET</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet do Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet do
          </p>
          <Button size="lg">Learn more</Button>
        </div>
        <div className="">
          <Image src="/team.svg" alt="team" width={600} height={600} />
        </div>
      </div>
    </Container>
  );
}
