import React from "react";
import Container from "../Container";

export default function clients() {
  return (
    <Container>
      <div className="rounded-md bg-[#E9F0FF] p-8">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col items-center gap-4 border-b-2 border-b-slate-300 p-6">
            <p>Trusted by 20,000 students</p>
            <h1 className="text-5xl font-bold">They Trust Us</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-12 w-40 rounded-xl bg-gradient-to-b from-[#D4D4D4] to-[#9AA5ED]"></div>
            <div className="h-12 w-40 rounded-xl bg-gradient-to-b from-[#D4D4D4] to-[#9AA5ED]"></div>
            <div className="h-12 w-40 rounded-xl bg-gradient-to-b from-[#D4D4D4] to-[#9AA5ED]"></div>
            <div className="h-12 w-40 rounded-xl bg-gradient-to-b from-[#D4D4D4] to-[#9AA5ED]"></div>
            <div className="h-12 w-40 rounded-xl bg-gradient-to-b from-[#D4D4D4] to-[#9AA5ED]"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
