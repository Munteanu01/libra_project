import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projectCategories = [
  {
    name: "Mall și Spații Comerciale",
    projects: [
      {
        id: "mall-veranda",
        title: "MALL VERANDA",
        description: [
          "Instalațiile de curenți tari",
          "Tablourile electrice de comandă pentru instalația de climatizare/desfumare",
          "Tablourile electrice pentru instalația de iluminat normal și de siguranță",
          "Instalație detecție incendiu parter",
          "Sisteme de degivrare rampe și țevi",
        ],
        hasMoreInfo: true,
      },
      {
        id: "kaufland-romania",
        title: "KAUFLAND ROMÂNIA",
        description: ["Înlocuire și instalare Sistem CCTV"],
      },
    ],
  },
  {
    name: "Rezidențial",
    projects: [
      {
        id: "valletta-residence",
        title: "VALLETTA RESIDENCE",
        description: [
          "Curenți tari",
          "Instalațiile electrice de curenți tari",
          "Tablourile electrice, instalații de iluminat și prize, automatizări desfumare",
          "Sistemul de desfumare și evacuare a gazelor din parcarea subterană",
          "Curenți slabi",
          "Structuri cablate sisteme: detecție incendiu, video interfonie, bariere auto, control acces",
        ],
        hasMoreInfo: true,
      },
    ],
  },
  {
    name: "Alte Lucrări",
    projects: [
      {
        id: "timken",
        title: "Hală producție rulmenți TIMKEN - West Park Ploiești",
        description: ["Instalații electrice curenți tari"],
      },
      {
        id: "prysmian",
        title: "Hală producție fibră optică PRYSMIAN - Slatina",
        description: ["Instalații electrice curenți tari"],
      },
      {
        id: "michelin",
        title: "Depozit cauciucuri MICHELIN - Florești, jud. Prahova",
        description: ["Instalații electrice curenți tari"],
      },
      {
        id: "daimler",
        title: "Hală producție DAIMLER CHRYSLER - Sebeș, jud. Alba",
        description: ["Instalații electrice curenți tari"],
      },
      {
        id: "philip-morris",
        title: "PHILIP MORRIS – Otopeni",
        description: ["Lucrări de instalații electrice exterioare"],
      },
      {
        id: "rockwool",
        title: "ROCKWOOL – West Park Ploiești",
        description: ["Lucrări de instalații electrice exterioare"],
      },
      {
        id: "stadion-rugby",
        title: "STADION RUGBY – Arcul de Triumf – București",
        description: ["Lucrări instalații electrice curenți tari, curenți slabi, detecție și semnalizare incendiu"],
        hasMoreInfo: true,
      },
      {
        id: "ngb",
        title: "Depozit logistic și hală producție - NGB Construcții & Management - Bragadiru",
        description: ["Lucrări de instalații electrice curenți tari, curenți slabi, detecție și semnalizare incendiu"],
      },
      {
        id: "hattrick",
        title: "Clădire de birouri HATTRICK – Sibiu",
        description: ["Instalații electrice curenți slabi, detecție și semnalizare incendiu"],
      },
    ],
  },
];

export default function Lucrari() {
  return (
    <div className="py-20 mt-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lucrările Noastre</h1>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {projectCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-700">{category.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-neutral-900 rounded-lg border border-neutral-700 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-accent">{project.title}</h3>

                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-400">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {project.hasMoreInfo && (
                      <Link
                        href={`/portofoliu/${project.id}`}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                      >
                        Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
