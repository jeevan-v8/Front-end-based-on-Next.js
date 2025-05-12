"use client"
import React from "react"
import Image from "next/image"

interface GeometricDesignProps {
  className?: string;
}

const GeometricDesign: React.FC<GeometricDesignProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-[#2B63D9] overflow-hidden mx-auto ${className}`}>
      {/* Left column - darker blue */}
      <div className="absolute left-0 top-0 w-[35%] h-full bg-[#3a56e4]"></div>

      {/* Top geometric shapes */}
      <div className="absolute top-[10%] right-[10%] w-[80%] h-[30%]">
        <svg width="100%" height="100%" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connected circles path */}
          <path 
            d="M0,75 A75,75 0 1,1 150,75 A75,75 0 1,1 300,75" 
            stroke="white" 
            strokeWidth="2" 
            fill="none" 
          />
          {/* Vertical lines */}
          <line x1="75" y1="0" x2="75" y2="150" stroke="white" strokeWidth="2" />
          <line x1="150" y1="0" x2="150" y2="150" stroke="white" strokeWidth="2" />
          <line x1="225" y1="0" x2="225" y2="150" stroke="white" strokeWidth="2" />
          {/* Right circle with slash */}
          <circle cx="350" cy="75" r="50" fill="white" />
          <line x1="315" y1="40" x2="385" y2="110" stroke="#4361ee" strokeWidth="2" />
        </svg>
      </div>

      {/* Left white circle */}
      <div className="absolute top-[30%] left-[10%] w-[25%] aspect-square rounded-full bg-white shadow-md"></div>

      {/* Light blue triangles */}
      <div className="absolute top-[45%] left-[10%] w-[25%] h-[25%]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,100 L0,100 Z" fill="#a8c7fa" />
        </svg>
      </div>

      <div className="absolute top-[60%] left-[10%] w-[25%] h-[25%]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,100 L0,100 Z" fill="#a8c7fa" />
        </svg>
      </div>

      {/* Right light blue shape */}
      <div className="absolute top-[30%] right-[10%] w-[15%] h-[30%]">
        <svg width="100%" height="100%" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L60,0 L60,120 L0,120 C0,60 60,60 60,0 Z" fill="#a8c7fa" />
        </svg>
      </div>

      {/* Center person image with circular mask */}
      <div className="absolute top-[30%] left-[35%] w-[30%] aspect-square rounded-full overflow-hidden bg-[#a8dadc] shadow-lg">
        <div className="relative w-full h-full">
          {/* You can replace this with your actual image */}
          <Image 
            src="https://randomuser.me/api/portraits/men/75.jpg" 
            alt="Person" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </div>

      {/* Blue semi-circle overlay in center */}
      <div className="absolute top-[50%] left-[35%] w-[30%] h-[15%]">
        <svg width="100%" height="100%" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60,0 A60,60 0 0,1 120,60 L0,60 A60,60 0 0,1 60,0 Z" fill="#4361ee" opacity="0.7" />
        </svg>
      </div>

      {/* Bottom semi-circle shapes */}
      <div className="absolute bottom-[10%] left-[10%] w-[15%] aspect-square">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="49" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="20" fill="#a8c7fa" />
        </svg>
      </div>

      {/* Bottom pill shape */}
      <div className="absolute bottom-[15%] left-[30%] w-[40%] h-[15%]">
        <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="0" width="140" height="60" rx="30" ry="30" fill="white" />
          <circle cx="30" cy="30" r="30" fill="#4361ee" />
        </svg>
      </div>

      {/* Bottom right rounded rectangle */}
      <div className="absolute bottom-[15%] right-[10%] w-[15%] h-[30%]">
        <svg width="100%" height="100%" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30,0 L30,0 A30,30 0 0,1 60,30 L60,90 A30,30 0 0,1 30,120 L30,120 A30,30 0 0,1 0,90 L0,30 A30,30 0 0,1 30,0 Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <rect x="0" y="60" width="60" height="60" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default GeometricDesign