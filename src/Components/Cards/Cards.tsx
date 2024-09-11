"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Link from "next/link";
import coursesData from "@/data/Music_Course.json";  // Renamed for clarity
import { Button } from '../ui/moving-border';
import Image from "next/image";

// Define the Course type or interface
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export function ThreeDCardDemo() {
  // Access the courses array inside coursesData
  const featuredCourses = coursesData.courses.filter((course: Course) => course.isFeatured);

  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide">Featured Courses</h2>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Discover the Best Music Courses Curated for You
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center p-3">
              <CardContainer className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {course.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                      alt={`Image for ${course.title}`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Learn more →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href="/">Explore Courses</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
