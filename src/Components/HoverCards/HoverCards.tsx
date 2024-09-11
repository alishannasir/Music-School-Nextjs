"use client"
import React from 'react'
import { HoverEffect } from "../ui/card-hover-effect";
import { Button } from '../ui/moving-border'
 import Link from 'next/link';

function HoverCards() {
  return (
   <div className='p-12 justify-center text-center'>
      <div className="max-w-8xl mx-auto px-8 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">Up Coming Webinars</h2>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Music Journey
            </p>
          </div>
    <HoverEffect items={projects} />
    <Button
                        borderRadius="1.75rem"
                        className="bg-white text-center justify-center dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                         <Link href={"/"}>Explore Courses</Link>
            </Button>
  </div>
   </div>
  )
}
export const projects = [
    {
      title: "BeatStream",
      description:
        "A platform that builds innovative tools for artists and producers to distribute and monetize their music worldwide.",
      link: "https://beatstream.com",
    },
    {
      title: "Harmonic",
      description:
        "A streaming service offering a vast library of songs, albums, live performances, and podcasts across all genres and decades.",
      link: "https://harmonic.com",
    },
    {
      title: "SoundWave",
      description:
        "A company that specializes in providing cutting-edge audio production tools and services for musicians and creators.",
      link: "https://soundwave.com",
    },
    {
      title: "Vibe",
      description:
        "A platform connecting musicians and fans through virtual concerts, live performances, and fan experiences.",
      link: "https://vibe.com",
    },
    {
      title: "TuneHub",
      description:
        "An e-commerce platform focused on selling musical instruments, audio equipment, and artist merchandise.",
      link: "https://tunehub.com",
    },
    {
      title: "MelodySoft",
      description:
        "A global company that develops software for music production, licensing, and digital audio workstation tools for artists and sound engineers.",
      link: "https://melodysoft.com",
    },
    {
      title: "RhythmForge",
      description:
        "An online platform that allows aspiring musicians to collaborate, produce, and share their tracks with others globally.",
      link: "https://rhythmforge.com",
    },
    {
      title: "ChordMaster",
      description:
        "A learning platform that offers interactive music lessons, tutorials, and tools to help musicians master their instruments.",
      link: "https://chordmaster.com",
    },
    {
      title: "SonicPulse",
      description:
        "A company that creates high-quality audio hardware for studios and live performances, focusing on sound clarity and durability.",
      link: "https://sonicpulse.com",
    },
    {
      title: "GrooveLink",
      description:
        "A social platform where musicians can network, collaborate on projects, and share their latest tracks with a community of creators.",
      link: "https://groovelink.com",
    },
    {
      title: "EchoVerse",
      description:
        "A company specializing in virtual reality concerts, allowing fans to experience live music events in immersive digital environments.",
      link: "https://echoverse.com",
    },
    {
      title: "BasslineX",
      description:
        "A software company that offers advanced digital synthesizers and audio effects for electronic music production.",
      link: "https://basslinex.com",
    },
  ];
  
  

export default HoverCards