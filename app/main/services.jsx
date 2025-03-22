"use client"

import {
  ClipboardCheck,
  Settings,
  Headphones,
  KeyRound,
  Clock,
  Network,
  FileCode,
  Wrench,
  PenToolIcon as Tool,
  Building2,
  Volume2,
  Shield,
} from "lucide-react"

const services = [
  {
    title: "Audit și Consultanță",
    description: "Servicii profesionale de audit și consultanță în domeniul securității",
    icon: ClipboardCheck,
  },
  {
    title: "Servicii Tehnice de Securitate",
    description: "Configurare hardware, software pentru sisteme de securitate",
    icon: Settings,
  },
  {
    title: "Suport tehnic și asistență",
    description: "Asistență tehnică și suport pentru toate sistemele instalate",
    icon: Headphones,
  },
  {
    title: "Control Acces",
    description: "Sisteme de pontaj și control acces pentru spații securizate",
    icon: KeyRound,
  },
  {
    title: "Sisteme de pontaj",
    description: "Soluții complete pentru monitorizarea prezenței personalului",
    icon: Clock,
  },
  {
    title: "Structuri Cablate",
    description: "Date – voce, infrastructură de rețea pentru sisteme de securitate",
    icon: Network,
  },
  {
    title: "Proiectare sisteme",
    description: "Efracție - CCTV - Incendiu - Acces - Automatizări",
    icon: FileCode,
  },
  {
    title: "Instalare sisteme",
    description: "Efracție - CCTV - Incendiu - Acces - Automatizări",
    icon: Wrench,
  },
  {
    title: "Servicii mentenanță",
    description: "Întreținere sisteme și verificări periodice",
    icon: Tool,
  },
  {
    title: "Facility Management",
    description: "Administrare facilități și mentenanță preventivă",
    icon: Building2,
  },
  {
    title: "Sisteme de adresare publică",
    description: "Mentenanță și instruire pentru sisteme de adresare publică",
    icon: Volume2,
  },
  {
    title: "Protecție completă",
    description: "Soluții integrate pentru securitatea completă a afacerii dvs.",
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section className="py-20 pt-32 bg-black" id="servicii">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Serviciile Noastre
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferim o gamă completă de servicii de securitate pentru a proteja afacerea și proprietatea dumneavoastră
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-neutral-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent/20 p-3 rounded-full mr-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
