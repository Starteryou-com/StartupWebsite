import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function blogs() {
  return (
    <Container>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="w-1/2 space-y-2">
            <h1 className="text-3xl font-bold">Our Blogs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet do
            </p>
          </div>
          <div className="">
            <Button size="lg">Show all</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4 rounded">
            <div className="relative">
              <Image
                className="rounded-md"
                src="/blog1.png"
                alt="blog"
                width={600}
                height={600}
              />
              <div className="absolute bottom-0 left-0 flex w-full items-start justify-between rounded-b-md bg-gray-400 bg-opacity-10 p-3 backdrop-blur-sm backdrop-filter">
                <div className="space-y-2">
                  <h1 className="font-semibold text-white">
                    Lorem ipsum dolor
                  </h1>
                  <p className="text-white">20 Jan 2023</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Development</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet do Lorem ipsum
                dolor sit amet, consectetuer adipiscing
              </p>
              <Link className="flex items-center gap-2 font-bold" href="#">
                READ POST
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.43 4.86079L3.12667 16.1959C2.87194 16.4507 2.56925 16.578 2.21858 16.578C1.86876 16.578 1.56649 16.4507 1.31177 16.1959C1.05705 15.9412 0.929688 15.6385 0.929688 15.2878C0.929688 14.938 1.05705 14.6358 1.31177 14.381L12.6469 3.07774H2.96747C2.60661 3.07774 2.30391 2.9559 2.05938 2.71221C1.8157 2.46768 1.69385 2.16499 1.69385 1.80413C1.69385 1.44327 1.8157 1.14058 2.05938 0.896044C2.30391 0.65236 2.60661 0.530518 2.96747 0.530518H15.7036C16.0644 0.530518 16.3667 0.65236 16.6104 0.896044C16.8549 1.14058 16.9772 1.44327 16.9772 1.80413V14.5402C16.9772 14.9011 16.8549 15.2034 16.6104 15.4471C16.3667 15.6916 16.0644 15.8139 15.7036 15.8139C15.3427 15.8139 15.0405 15.6916 14.7968 15.4471C14.5522 15.2034 14.43 14.9011 14.43 14.5402V4.86079Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded">
            <div className="relative">
              <Image
                className="rounded-md"
                src="/blog2.png"
                alt="blog"
                width={600}
                height={600}
              />
              <div className="absolute bottom-0 left-0 flex w-full items-start justify-between rounded-b-md bg-gray-400 bg-opacity-10 p-3 backdrop-blur-sm backdrop-filter">
                <div className="space-y-2">
                  <h1 className="font-semibold text-white">
                    Lorem ipsum dolor
                  </h1>
                  <p className="text-white">20 Jan 2023</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Development</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet do Lorem ipsum
                dolor sit amet, consectetuer adipiscing
              </p>
              <Link className="flex items-center gap-2 font-bold" href="#">
                READ POST
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.43 4.86079L3.12667 16.1959C2.87194 16.4507 2.56925 16.578 2.21858 16.578C1.86876 16.578 1.56649 16.4507 1.31177 16.1959C1.05705 15.9412 0.929688 15.6385 0.929688 15.2878C0.929688 14.938 1.05705 14.6358 1.31177 14.381L12.6469 3.07774H2.96747C2.60661 3.07774 2.30391 2.9559 2.05938 2.71221C1.8157 2.46768 1.69385 2.16499 1.69385 1.80413C1.69385 1.44327 1.8157 1.14058 2.05938 0.896044C2.30391 0.65236 2.60661 0.530518 2.96747 0.530518H15.7036C16.0644 0.530518 16.3667 0.65236 16.6104 0.896044C16.8549 1.14058 16.9772 1.44327 16.9772 1.80413V14.5402C16.9772 14.9011 16.8549 15.2034 16.6104 15.4471C16.3667 15.6916 16.0644 15.8139 15.7036 15.8139C15.3427 15.8139 15.0405 15.6916 14.7968 15.4471C14.5522 15.2034 14.43 14.9011 14.43 14.5402V4.86079Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
