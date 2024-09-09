import Clients from "@/components/home/clients";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Team from "@/components/home/team";
import Website from "@/components/home/website";
import Products from "@/components/home/products";
import Features from "@/components/home/features";
import Blogs from "@/components/home/blogs";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Clients />
      <Website />
      <Team />
      <Pricing />
      <Features />
      <Blogs />
      <Contact />
    </>
  );
}
