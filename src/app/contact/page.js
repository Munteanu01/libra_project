"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Clock, MapPin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Contact() {


  return (
    <section className="mt-28 lg:pb-16 text-white bg-black px-4 py-8">
      <div className="container mx-auto">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="lg:text-5xl text-4xl font-semibold mb-6 text-center">Contactează-ne</h1>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
            <Card className="p-6 bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Clock className="text-white text-5xl" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Programul nostru</h2>
                  <p className="text-md text-gray-400">Luni - Vineri: 10:00 - 18:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <Phone className="text-white text-5xl" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Obține informații la</h2>
                  <ul className="space-y-2 text-md text-gray-400">
                    <li>Telefon: <a href="tel:+40742285006" className=" text-secundary">0742 285 006</a></li>
                    <li>Email: <a href="mailto:office@libraguard.ro" className=" text-secundary">office@libraguard.ro</a></li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <MapPin className="text-white text-5xl" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Adresa</h2>
                  <p className="text-md text-gray-400">Strada Exemplu, 123, Oraș, Țară</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form and Map */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <form
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Prenume" className="bg-white text-gray-900 rounded-lg p-3" />
                <Input type="text" placeholder="Nume" className="bg-white text-gray-900 rounded-lg p-3" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="email" placeholder="Email" className="bg-white text-gray-900 rounded-lg p-3" />
                <Input type="tel" placeholder="Număr telefon" className="bg-white text-gray-900 rounded-lg p-3" />
              </div>

              <Textarea placeholder="Mesajul tău" className="bg-white text-gray-900 rounded-lg p-3" rows={4} />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 rounded-lg p-3"
              >
                Trimite mesajul
              </Button>
            </form>

            {/* Google Map */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2849.290712041593!2d26.1358852!3d44.4271986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fef062d41c57%3A0x462dcff930e0d97d!2s%C8%98oseaua%20Mihai%20Bravu%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1736003775281!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Exclude Footer for This Page
Contact.getLayout = function getLayout(page) {
  return <>{page}</>; // Excludes the default layout, including the footer
};
