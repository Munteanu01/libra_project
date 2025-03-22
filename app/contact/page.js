"use client"

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="py-20 mt-10  text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactați-ne</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-[#7FB3D5]">Trimite-ne un mesaj</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/50 text-green-200 rounded-md border border-green-700">
                Mesajul a fost trimis cu succes! Vă vom contacta în curând.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/50 text-red-200 rounded-md border border-red-700">
                A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nume complet" required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white" />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subiect" required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white" />
              </div>
              
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mesaj" required rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white"></textarea>
              
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#7FB3D5] hover:bg-[#5499C7] text-white font-medium py-3 px-4 rounded-md flex items-center justify-center mt-4">
                {isSubmitting ? "Se trimite..." : <>Trimite mesaj <Send className="ml-2 h-4 w-4" /></>}
              </button>
            </form>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-8 text-[#7FB3D5]">Informații de contact</h3>
            <p className="text-gray-300">S.C. C&G LIBRA SECURITY S.R.L.</p>
            <p className="text-gray-300">RO34823850</p>
            <p className="text-gray-300">J40/9242/2015</p>
            <p className="text-gray-300">Sediu Social: BD. Timișoara 39, bl. P15, sc. 2, ap. 34, Etaj 3, Sector 6, București</p>
            <p className="text-gray-300">Website: <a href="https://www.librasecurity.ro" className="text-[#7FB3D5]">www.librasecurity.ro</a></p>
            <p className="text-gray-300">E-mail: <a href="mailto:office@librasecurity.ro" className="text-[#7FB3D5]">office@librasecurity.ro</a></p>
            <p className="text-gray-300">Telefon: 0744.202.753</p>
            
            <div className="mt-8">
              <iframe 
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1450469099193!2d26.022664!3d44.4193539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff470edf9db9%3A0xd2b1c4b1e9c6f11e!2sBd.%20Timi%C8%99oara%2039%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1710423679651!5m2!1sen!2sro" 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
