import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (


    <footer className="bg-slate-50 border-t-2 border-gray-200 dark:bg-gray-800 dark:border-t-2 dark:border-gray-900">
        <div className="w-full mx-auto max-w-screen p-4 px-12 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link href="/" className="hover:underline">Movie Masti™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
                <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" target='_blank' className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
                <Link href="#" target='_blank' className="hover:underline">Contact</Link>
            </li>
        </ul>
        </div>
    </footer>
    


  )
}
