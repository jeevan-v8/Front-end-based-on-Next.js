/* eslint-disable */
import Image from "next/image"

export default function TestimonialSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 md:p-12 w-full max-w-[1280px] mx-auto text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#333" />
            <path d="M2 17L12 22L22 17" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ml-2 text-xl font-bold">Lookscout</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 mx-auto">
          Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough
          about LookScout. Great job, I will definitely be ordering again!
        </h2>

        <div className="flex items-center justify-center mt-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-300 mr-3">
            <Image
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="Lisa Smith"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-semibold">Lisa Smith</p>
            <p className="text-sm text-gray-500">CEO Company</p>
          </div>
        </div>
      </div>
    </div>
  )
}
