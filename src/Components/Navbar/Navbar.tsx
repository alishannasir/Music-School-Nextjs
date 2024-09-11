"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/Components/ui/navbar-menu";
import { cn } from "@/Utils/cn"
import Link from "next/link";
import { Spotlight } from "@/Components/ui/Spotlight";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
    <>
      <Spotlight
      className="top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
           
            <Menu setActive={setActive}>
                <Link href="/">              
                        <MenuItem setActive={setActive} active={active} item="Home" />               
                </Link>
                 <Link href={"/Courses"}>
                 <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                          <HoveredLink href="/hobby">All Courses</HoveredLink>
                          <HoveredLink href="/individual">Music Theory</HoveredLink>
                          <HoveredLink href="/team">Team</HoveredLink>
                          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                   </div>
                  </MenuItem>
                 </Link>
                  <Link href={"/Contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                  </Link>
                  <Link href={"/Sign"}>
                    <MenuItem setActive={setActive} active={active} item="Sign In">
                    </MenuItem>
                  </Link>
            </Menu>
        </div></>
    );
}
