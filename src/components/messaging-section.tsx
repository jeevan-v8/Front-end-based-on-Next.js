import Link from "next/link"
import { ArrowRight, Plus, Share2, Users, Pencil } from "lucide-react"

export default function MessagingSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Messaging for all</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          User generated content in real-time will have multiple touchpoints for offshoring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* First row */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Share2 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Easier Work Organization</h3>
            <p className="text-gray-600 mb-4">
              Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for
              real-time schemas.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Plus className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fast Connection</h3>
            <p className="text-gray-600 mb-4">
              Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed
              portals.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Share2 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Streamlined Processes</h3>
            <p className="text-gray-600 mb-4">
              Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate
              extensible.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Second row */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Easier Integrations</h3>
            <p className="text-gray-600 mb-4">
              Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently
              unleash information.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Marketing Analytics</h3>
            <p className="text-gray-600 mb-4">
              Phosfluorescently engage worldwide methodologies with web-enabled Interactively coordinate.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Pencil className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Workflow Builder</h3>
            <p className="text-gray-600 mb-4">
              Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively
              scalable metrics whereas.
            </p>
            <Link href="#" className="text-blue-500 flex items-center hover:underline">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
