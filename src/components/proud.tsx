import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function ProudSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Proud to Be Used By</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
          customer service for state of the art customer service.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center mb-12 md:mb-20">
            <div className="col-span-1">
                <Image
                src="/verge.png"
                height={40}
                width={120}
                alt="The Verge"
                />
            </div>
            <div className="col-span-1">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
                height={40}
                width={120}
                alt="Slack"
                />
            </div>
            <div className="col-span-1">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                height={40}
                width={120}
                alt="Google"
                />
            </div>
            <div className="col-span-1">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                height={40}
                width={120}
                alt="PayPal"
                />
            </div>
            <div className="col-span-1">
                <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                height={40}
                width={120}
                alt="Pinterest"
                />
            </div>
            <div className="col-span-1">
                <Image
                src="/mailchimp.png"
                height={40}
                width={120}
                alt="Mailchimp"
                />
            </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-500 font-semibold mb-4">1% OF THE INDUSTRY</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Welcome to your new digital reality that will rock your world truly at all throughout.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-10">
            <Input type="email" placeholder="Enter your email" className="max-w-md mx-auto sm:mx-0" />
            <Button className="bg-blue-500 hover:bg-blue-600 mt-2 sm:mt-0">Submit</Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-blue-500" />
              </div>
              <span>Fully Secure</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-blue-500" />
              </div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-blue-500" />
              </div>
              <span>Done Deal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
