import React from "react";
import Container from "../Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Website() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-12">
        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet</h1>
        <div className="w-full">
          <Tabs defaultValue="home1" className="flex flex-col justify-center space-y-8">
            <TabsList className="mx-auto w-fit">
              <TabsTrigger value="home1">Home Page</TabsTrigger>
              <TabsTrigger value="magazine1">School Magazine</TabsTrigger>
              <TabsTrigger value="home2">Home Page</TabsTrigger>
              <TabsTrigger value="magazine2">School Magazine</TabsTrigger>
            </TabsList>
            <TabsContent value="home1">
              <div className="h-[400px] w-full rounded-md bg-gradient-to-b from-[#8B96E9] to-[#E2EAFF]"></div>
            </TabsContent>
            <TabsContent value="magazine1">
              <div className="h-[400px] w-full rounded-md bg-gradient-to-b from-[#8B96E9] to-[#E2EAFF]"></div>
            </TabsContent>
            <TabsContent value="home2">
              <div className="h-[400px] w-full rounded-md bg-gradient-to-b from-[#8B96E9] to-[#E2EAFF]"></div>
            </TabsContent>
            <TabsContent value="magazine2">
              <div className="h-[400px] w-full rounded-md bg-gradient-to-b from-[#8B96E9] to-[#E2EAFF]"></div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
