"use clients";
import React from "react";
import { Nunito } from "next/font/google";
import { NavigationMenuDemo } from "../landing-page/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"] });
function Header() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background pb-[0.5rem]">
      <div className="container mx-auto px-[1rem] sm:px-[2rem] py-[1rem] flex items-center justify-between">
        <div>
          <h3
            className={`${nunito.className} text-lg md:text-2xl font-extrabold tracking-tight text-[#FB005B]`}
          >
            sankyfy.com
          </h3>
        </div>
        <NavigationMenuDemo />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            asChild
            className="bg-primary/95 hover:text-white z-10 relative after:absolute after:inset-0 after:bg-primary after:rounded-md after:top-full hover:after:top-0 transition-all duration-300 ease-linear after:transition-all after:duration-300 after:ease-linear after:-z-10"
            variant="outline"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
      <div className="hidden sm:flex container mx-auto px-[1rem] sm:px-[2rem] my-[1rem]">
        <ul className="w-full flex flex-wrap items-center gap-x-6 gap-y-1 px-4 py-[1rem] bg-secondary rounded-lg">
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Fashion & LifeStyle</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Gift Stores</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Book Stores</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Stationery Stores</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">General Stores</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Bars Stores</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Cafes</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Clubs</Link>
          </li>
          <li className="inline-block after:content-[''] after:block after:w-full after:transition-transform after:border-b-2 after:rounded-full after:border-primary after:scale-0 hover:after:scale-100 after:duration-[250] after:ease-linear">
            <Link href="#" className="text-sm font-medium">Home Service Providers</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
