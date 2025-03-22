import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative items-center flex flex-col justify-center h-screen mx-auto px-4 sm:px-6 lg:px-8">
      {/* Video de fundal */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="background-hero.mp4" type="video/mp4" />
      </video>

      {/* Suprapunere semi-transparentă */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      {/* Conținutul secțiunii Hero */}
      <div className="relative z-10 text-white lg:text-left px-6 lg:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-4">
          Protejează-ți afacerea cu <span className="md:block md:pt-3">soluții de securitate moderne<span className="text-accent">.</span></span>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Button size="lg" className="hover:bg-accent/80 border-none shadow-none bg-accent text-lg w-full sm:w-auto">
            <Phone className="mr-2 h-6 w-6" /> 0744-202-753
          </Button>
          <Button size="lg" className="hover:bg-accent/80 border-none shadow-none bg-accent text-lg w-full sm:w-auto">
            <Mail className="mr-2 h-6 w-6 " /> office@librasecurity.ro
          </Button>
        </div>
      </div>
    </section>
  )
}
