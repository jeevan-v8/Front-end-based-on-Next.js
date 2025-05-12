
/* eslint-disable */
"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import GeometricDesign from "./design"

const partners = [
  { name: "GitLab", logo: "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
]

export default function HeroSection() {
  const { toast } = useToast()

  const handleSendNotification = () => {
    toast({
      title: "Success!",
      description: "The notification has been sent.",
      duration: 3000,
    })

    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Notification Sent", {
          body: "Your notification has been sent successfully!",
          icon: "/placeholder.svg?height=64&width=64",
        })
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Notification Sent", {
              body: "Your notification has been sent successfully!",
              icon: "/placeholder.svg?height=64&width=64",
            })
          }
        })
      }
    }
  }

  return (
    <section className="hero bg-[#2B63D9] w-full py-10 md:py-16 lg:h-[656px] text-white overflow-hidden">
      <div className="card container grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-[1280px] gap-6 md:gap-[64px] mx-auto px-4 md:px-6 lg:px-[32px] py-8 md:py-12 lg:pb-[80px] lg:pt-[48px]">
            <div className="w-full bg-[#3971E7] max-w-[528px] h-[400px] md:h-[528px] relative mx-auto order-1 md:order-2">
             <GeometricDesign/>
            </div>

        <div className="w-full max-w-[624px] mx-auto order-2 md:order-1">
          <div className="w-full gap-[32px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Supercharged Design Workflow.
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
              We've been told it is not possible to overachieve our customers' expectations. We have not reinvented the
              wheel, we decided to build upon it.
            </p>
            <Button
              size="lg"
              className="bg-[#427EF7] hover:bg-[#2a46d4] text-white px-8"
              onClick={handleSendNotification}
            >
              Send Notification
            </Button>
          </div>
          <div className="w-full pt-8 sm:pt-10 md:pt-16 lg:pt-[100px] gap-[16px]">
            <div className="pb-4 md:pb-[40px]">
              <p className="text-sm text-white">Who supports us</p>
            </div>
            <div className="flex gap-4 sm:gap-[10px] flex-wrap items-center justify-start md:justify-start md:gap-8 lg:gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="h-6 sm:h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}