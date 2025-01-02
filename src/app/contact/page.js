'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function Contact() {
  return (
    <section className=" mt-32 lg:pb-20  text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" className="bg-white text-gray-900" />
              <Input type="email" placeholder="Your Email" className="bg-white text-gray-900" />
            </div>
            <Input type="tel" placeholder="Your Phone" className="bg-white text-gray-900" />
            <Textarea placeholder="Your Message" className="bg-white text-gray-900" rows={4} />
            <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

