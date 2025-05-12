import Link from "next/link"
import { ArrowRight, Send, Lightbulb, PieChart } from "lucide-react"
import Image from "next/image"

export default function WorkspaceFeatures() {
  return (
    <div className="bg-[#151B28] w-full text-white grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
      <div className="relative h-[400px] sm:h-[500px] md:h-[680px] px-4 sm:px-8 md:pl-[100px] py-4 sm:py-6 md:py-[25px] flex items-center justify-center">
        <Image
          src="https://picsum.photos/200"
          height={680}
          width={560}
          alt="Feature image"
          className="object-cover w-full h-full max-h-[680px] max-w-[560px]"
        />
      </div>

      <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            <Send className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold">Explore ideas together</h3>
          <p className="text-gray-300">
            Engage audience segments and finally create actionable insights. Amplify vertical integration.
          </p>
          <Link href="#" className="text-blue-400 flex items-center hover:underline">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold">Bring those ideas to life</h3>
          <p className="text-gray-300">
            Engage audience segments and finally create actionable insights. Amplify vertical integration.
          </p>
          <Link href="#" className="text-blue-400 flex items-center hover:underline">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            <PieChart className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold">Ship better outcomes</h3>
          <p className="text-gray-300">
            Engage audience segments and finally create actionable insights. Amplify vertical integration.
          </p>
          <Link href="#" className="text-blue-400 flex items-center hover:underline">
            Learn more <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
