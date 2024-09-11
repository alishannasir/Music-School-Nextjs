import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/moving-border'

function Herosection() {
  return (
    <div
    className='h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 rounded-md'
    >
        <div className='p-5 relative z-10 w-full text-center'>
           <h1 className='mt-20 md:mt-0 md:text:7xl font-bold bg-clip-text 
           text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-7xl'>Master the art of Music</h1>
           <p
           className='mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
           >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus voluptas repellat explicabo mollitia delectus, atque pariatur doloremque deleniti eveniet illo facere laudantium saepe exercitationem odit vel placeat et fugit!</p>
            <div className='mt-5'>
            <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                         <Link href={"/"}>Explore Courses</Link>
            </Button>
              
            </div>
        </div>
    </div>
  )
}

export default Herosection