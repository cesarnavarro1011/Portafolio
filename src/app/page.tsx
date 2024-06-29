import Image from "next/image";
import Navbar from "../partials/Navbar";
import Hero from "../partials/Hero";
import Footer from '../partials/Footer';
import ProjectList from "@/partials/ProjectList";
import InfiniteScroll from "@/partials/Kills";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="z-10. w-full items-center justify-between font-mono text-sm">
        <Navbar/>
        <Hero/>
        <InfiniteScroll/>
        <ProjectList/>
        <Footer/>
      </div>
    </div>
  );
}
