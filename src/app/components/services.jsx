'use client'
import { FlameIcon as Fire, Siren, ShieldAlert, Cctv } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const services = [
  { icon: Cctv, photo:"/servicesCctv", title: "Montare Camere Video", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab quisquam magni distinctio. Dolorem consequatur deleniti, delectus labore iure dicta eius aliquid sequi blanditiis, architecto necessitatibus tenetur distinctio iusto odit!" },
  { icon: Fire, title: "Detectie Incendiu", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab quisquam magni distinctio. Dolorem consequatur deleniti, delectus labore iure dicta eius aliquid sequi blanditiis, architecto necessitatibus tenetur distinctio iusto odit!" },
  { icon: Siren, title: "Sisteme Alarma", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab quisquam magni distinctio. Dolorem consequatur deleniti, delectus labore iure dicta eius aliquid sequi blanditiis, architecto necessitatibus tenetur distinctio iusto odit!" },
  { icon: ShieldAlert, title: "Exemplu", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab quisquam magni distinctio. Dolorem consequatur deleniti, delectus labore iure dicta eius aliquid sequi blanditiis, architecto necessitatibus tenetur distinctio iusto odit!" },
]

export default function Services() {
  return (
    <section className="my-24  text-white flex mx-auto lg:h-svh">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Serviciile Noastre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card className="border-secundary border-2 p-4 bg-primary " key={index}>
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