import Link from "next/link"
import { Facebook, Twitter, Instagram, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold ml-2">Lookscout</span>
              </div>
            </Link>
            <p className="text-gray-400">Generate outside the box thinking with the possibility to targtet the low.</p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Email subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Email Notifications</h3>
            <p className="text-gray-400 mb-4">
              Generate outside the box thinking with the possibility to targtet the low
            </p>
            <div className="flex flex-col gap-2">
              <Input type="email" placeholder="Enter email..." className="bg-[#1f2937] border-[#374151] text-white" />
              <Button className="bg-blue-500 hover:bg-blue-600 mt-2 sm:mt-0">Submit</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Lookscout. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" aria-label="Apple">
              <Apple className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
