"use client"
import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Categories from "@/components/ui/Categories";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {isLoading ? (
        // Loader section
        <div className="flex justify-center items-center w-full h-screen">
          <div className="animate-bounce rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
        </div>
      ) : (
        // Main content after loader
        <>
          <div className="hidden sm:block">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="max-w-7xl w-full">
            <Hero />
            <Grid />
            <Categories />
          </div>
        </>
      )}
    </main>
  );
}
