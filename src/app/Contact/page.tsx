"use client";
import React from "react";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import { Button } from '@/Components/ui/moving-border'
import Link from "next/link";
 
function page() {
  return (
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4 justify-center items-center">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Join the waitlist
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Welcome to MailJet, the best transactional email service on the web.
        We provide reliable, scalable, and customizable email solutions for
        your business. Whether you&apos;re sending order confirmations,
        password reset emails, or promotional campaigns, MailJet has got you
        covered.
      </p>
      <input
        type="text"
        placeholder="hi@manuarora.in"
        className="rounded-lg border border-neutral-800 focus:ring-2 p-5 focus:ring-teal-500 text-white w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
      />
       <div className='mt-5'>
            <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                         <Link href={"/"}>Submit</Link>
            </Button>
              
            </div>
    </div>
    <BackgroundBeams />
  </div>
  )
}

export default page