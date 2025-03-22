import Link from "next/link"
import { ArrowLeft } from "lucide-react"


const projectDetails = {
  "mall-veranda": {
    title: "MALL VERANDA",
    description: "Mall Veranda este un centru comercial modern situat în zona Obor din București.",
    services: [
      "Instalațiile de curenți tari",
      "Tablourile electrice de comandă pentru instalația de climatizare/desfumare",
      "Tablourile electrice pentru instalația de iluminat normal și de siguranță",
      "Instalație detecție incendiu parter",
      "Sisteme de degivrare rampe și țevi",
    ],
    challenges: [
      "Implementarea sistemelor într-un spațiu comercial de mari dimensiuni",
      "Coordonarea cu alte echipe pentru integrarea sistemelor",
      "Respectarea termenelor strânse de execuție",
    ],
    results: [
      "Sisteme de securitate și siguranță la incendiu de ultimă generație",
      "Soluții eficiente energetic pentru iluminat",
      "Sisteme integrate pentru monitorizare și control",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  "valletta-residence": {
    title: "VALLETTA RESIDENCE",
    description: "Valletta Residence este un complex rezidențial premium din București.",
    services: [
      "Curenți tari",
      "Instalațiile electrice de curenți tari",
      "Tablourile electrice, instalații de iluminat și prize, automatizări desfumare",
      "Sistemul de desfumare și evacuare a gazelor din parcarea subterană",
      "Curenți slabi",
      "Structuri cablate sisteme: detecție incendiu, video interfonie, bariere auto, control acces",
    ],
    challenges: [
      "Integrarea sistemelor de securitate cu designul modern al clădirii",
      "Implementarea soluțiilor de automatizare pentru confort și siguranță",
      "Asigurarea redundanței pentru sistemele critice",
    ],
    results: [
      "Sisteme de securitate integrate pentru întregul complex",
      "Soluții de control acces personalizate pentru rezidenți",
      "Sisteme de detecție și alarmare la incendiu conforme cu normele în vigoare",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  "stadion-rugby": {
    title: "STADION RUGBY – Arcul de Triumf",
    description: "Stadionul de Rugby Arcul de Triumf este o arenă sportivă modernă din București.",
    services: [
      "Lucrări instalații electrice curenți tari",
      "Instalații curenți slabi",
      "Sisteme de detecție și semnalizare incendiu",
      "Sisteme de sonorizare și adresare publică",
    ],
    challenges: [
      "Implementarea sistemelor pentru un spațiu de mari dimensiuni cu cerințe specifice",
      "Asigurarea funcționalității în condiții de utilizare intensă",
      "Integrarea cu sistemele existente ale stadionului",
    ],
    results: [
      "Sisteme de securitate și siguranță conforme cu standardele internaționale",
      "Soluții de sonorizare de înaltă calitate pentru evenimente sportive",
      "Sisteme de monitorizare și control centralizate",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
}

export default function ProjectDetail({ params }) {
  const { id } = params
  const project = projectDetails[id]

  if (!project) {
    return (
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Proiect nedisponibil</h1>
          <p className="mb-8">Detaliile pentru acest proiect nu sunt disponibile momentan.</p>
          <Link href="/portofoliu" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la lista de lucrări
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <Link
          href="/portofoliu"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 "
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la lista de lucrări
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

        <p className="text-lg text-gray-300 mb-8">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {project.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md border border-gray-700">
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagine ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Servicii Realizate</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Provocări</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Rezultate</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
