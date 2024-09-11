"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
 
function InfiniteCards() {
  return (
    <div className="h-[50rem] rounded-md w-fu flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">Here is our Hermony</h2>
            <p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Discover the Best Music Courses Curated for You
            </p>
          </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
const testimonials = [
    {
      quote:
        "Music is the divine way to tell beautiful, poetic things to the heart.",
      name: "Pablo Casals",
      title: "Cellist and Composer",
    },
    {
      quote:
        "One good thing about music, when it hits you, you feel no pain.",
      name: "Bob Marley",
      title: "Reggae Musician",
    },
    {
      quote:
        "Without music, life would be a mistake.",
      name: "Friedrich Nietzsche",
      title: "Philosopher",
    },
    {
      quote:
        "Music expresses that which cannot be put into words and that which cannot remain silent.",
      name: "Victor Hugo",
      title: "Writer and Poet",
    },
    {
      quote:
        "The only truth is music.",
      name: "Jack Kerouac",
      title: "Writer and Jazz Enthusiast",
    },
  ];
  
export default InfiniteCards