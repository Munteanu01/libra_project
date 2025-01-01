'use client'
import { FlameIcon as Fire, Bell, ShieldAlert, Cctv } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { icon: Cctv, title: "Montare Camere Video", description: "exemplu" },
  { icon: Fire, title: "Detectie Incendiu", description: "exemplu" },
  { icon: Bell, title: "Sisteme Alarma", description: "exemplu" },
  { icon: ShieldAlert, title: "Exemplu", description: "exemplu" },
]

export default function Services() {
  return (
    <section className="py-24 bg-black text-white flex mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card className="border-secundary border-2 p-4  bg-black" key={index}>
              <CardHeader>
                <service.icon className="h-12 w-12  mb-4 " />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}