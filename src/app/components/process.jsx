'use client'
import { Lightbulb, PencilRuler, Hammer } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: "Planificare",
    description: "Mai întâi, vom asculta, vom răspunde la întrebările tale și vom oferi sfaturi cu privire la scopul general al proiectului și buget."
  },
  {
    icon: PencilRuler,
    title: "Proiectare",
    description: "Apoi, vom explora împreună ceea ce este posibil și vom testa deciziile luate pentru a ne asigura că sunt aliniate cu costurile."
  },
  {
    icon: Hammer,
    title: "Implementare",
    description: "În cele din urmă, vom pune planul în aplicare și ne vom asigura că ești la curent cu progresul în fiecare etapă."
  }
];

export default function OurProcess() {
  return (
    <section className="py-24 text-white h-svh">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Procesul Nostru</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Relațiile cu clienții noștri se bazează pe încredere, colaborare și transparență. Cu ideile tale și cu resursele și îndrumarea noastră, posibilitățile sunt nelimitate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center border-secundary border-4 p-4 rounded-xl">
              <step.icon className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white font-semibold">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
