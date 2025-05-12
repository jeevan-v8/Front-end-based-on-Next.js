
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#2B63D9] w-full text-white gap-[10px] h-auto min-h-[86px] py-[20px] px-4 sm:px-6 md:px-10 lg:px-[160px] border-b-[1px] border-[#648EF7]">
      <div className="container w-full max-w-[1280px] h-auto min-h-[46px] flex justify-between items-center mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Lookscout Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Lookscout</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className={`hidden md:flex items-center space-x-8`}>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/products" className="">
            Our Products
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto font-normal">
                <span>Resources</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link href="/blog" className="w-full">
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/documentation" className="w-full">
                  Documentation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources" className="w-full">
                  Resources
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contacts" className="">
            Contacts
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            Log in
          </Button>
          <Button className="text-white  bg-[#427EF7] hover:bg-[#2a46d4] ">Sign up</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#4361ee] z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/" className="">
                Home
              </Link>
              <Link href="/products" className="">
                Our Products
              </Link>
              <Link href="/resources" className="">
                Resources
              </Link>
              <Link href="/contacts" className="">
                Contacts
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-blue-400">
                <Button variant="ghost" className="text-whitejustify-start">
                  Log in
                </Button>
                <Button className="bg-[#427EF7] text-white">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
