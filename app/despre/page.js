export default function About() {
  return (
    <section className="py-20 mt-10 bg-black text-white" id="despre">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Despre Noi</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-2xl font-semibold mb-4 text-accent">PREZENTARE GENERALĂ</h3>
              <p className=" leading-relaxed">
                C&G LIBRA SECURITY SRL este o companie înființată în 2015. Autorizată IGSU și IGPR pentru efectuarea
                lucrărilor de instalare a sistemelor de securitate și a sistemelor de detecție și semnalizare la
                incendiu. Suntem o echipă specializată și dedicată, cu experiență în furnizarea de soluții tehnice
                avansate pentru protejarea activelor și informațiilor valoroase ale organizației dumneavoastră.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-2xl font-semibold mb-4 text-accent">MISIUNE</h3>
                <p className=" leading-relaxed">
                  Ne dorim ca această firmă să fie iubită de clienți și furnizori! Noi suntem soluția pe care o caută
                  clienții noștri!
                </p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-2xl font-semibold mb-4 text-accent">VALORI</h3>
                <p className=" leading-relaxed">
                  Tot ceea ce ne dorim este să facem clientul nostru să se simtă în "casa" lui "acasă".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
