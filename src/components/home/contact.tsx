import React from "react";
import Container from "../Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function contact() {
  return (
    <Container>
      <div className="mx-auto w-1/3 space-y-6 rounded-md border bg-white p-8 shadow-md">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <form className="space-y-8">
          <div className="space-y-4">
            <Input className="bg-[#F5F5FF]" placeholder="Enter your name" />
            <Input
              className="bg-[#F5F5FF]"
              placeholder="Enter your email"
              type="email"
            />
            <Input className="bg-[#F5F5FF]" placeholder="Enter your number" />
            <Input className="bg-[#F5F5FF]" placeholder="Enter your location" />
            <Textarea
              placeholder="Enter your message"
              className="min-h-[100px] bg-[#F5F5FF]"
            />
          </div>
          <Button className="w-full">Submit</Button>
        </form>
      </div>
    </Container>
  );
}
