
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Send, Lightbulb, Clock } from "lucide-react"
import WorkspaceFeatures from "@/components/workspace"
import TestimonialSection from "@/components/testimonial"

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Product Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on
            cross-platform integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Send className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Explore ideas together</h3>
                <p className="text-gray-600 mb-3">
                  Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
                <Link href="#" className="text-blue-500 flex items-center hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Lightbulb className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Bring those ideas to life</h3>
                <p className="text-gray-600 mb-3">
                  Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
                <Link href="#" className="text-blue-500 flex items-center hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ship better outcomes</h3>
                <p className="text-gray-600 mb-3">
                  Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
                <Link href="#" className="text-blue-500 flex items-center hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto md:max-w-none">
              <div className="h-auto w-full max-h-[560px] max-w-[560px] overflow-hidden mx-auto">
                <Image
                  src="https://picsum.photos/200"
                  height={560}
                  width={560}
                  alt="Feature image"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Features Section with Workspace Image */}
      <div className="mt-16 sm:mt-20 md:mt-24 w-full bg-[#151B28]">
        <WorkspaceFeatures />
      </div>

      {/* Testimonial Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-[64px] gap-8 md:gap-[64px]">
        <TestimonialSection />
      </div>
    </section>
  )
}
