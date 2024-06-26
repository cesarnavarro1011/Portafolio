import Image from "next/image";
import Navbar from "../partials/Navbar";
import Hero from "../partials/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="z-10. w-full items-center justify-between font-mono text-sm">
        <Navbar/>
        <Hero/>
      </div>
    </main>
  );
}
