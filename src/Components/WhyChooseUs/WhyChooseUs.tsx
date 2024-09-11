"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

function WhyChooseUs() {
  return (
        <div className="h-screen py-20 w-full">
              <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">Why Choose Us</h2>
            <p className="mt-3 text-3xl leading-8 font-extrabold -tracking-tight text-white sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
      <LayoutGrid cards={cards} />
    </div>
  
  )
}
const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Melody of the Forest
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A peaceful tune resonates through the forest, creating a natural symphony
          that offers an escape from the noise of everyday life. Let the sounds of nature
          become the music of your soul.
        </p>
      </div>
    );
  };
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Symphony of the Skies
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          This melody takes you on a journey above the clouds, where the harmonies
          are as endless as the horizon. A perfect blend of tranquility and power,
          just like the sky.
        </p>
      </div>
    );
  };
  
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Harmonies in Nature
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A symphony inspired by the beauty of nature. The lush greenery sings 
          a peaceful tune, creating the perfect soundtrack to relax and unwind.
        </p>
      </div>
    );
  };
  
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rhythms of the River
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          The gentle flow of the river creates a serene rhythm, a natural melody
          that soothes the soul. A place where music and nature come together.
        </p>
      </div>
    );
  };
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVzaWN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
export default WhyChooseUs