import { Mail, Linkedin, Github, Send, User, MessageSquare } from "lucide-react"
import { useRef } from "react"
import emailjs from "emailjs-com"

export const ContactWithMe = () => {

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        alert("Message sent successfully!")
        formRef.current.reset()
      },
      (error) => {
        alert("An error occurred, please try again later.")
        console.error("Email sending error:", error.text)
      }
    )
  }
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="mailto:ramirodamianescalantecadena@gmail.com"
            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Mail className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">Email</p>
              <p className="text-[13.5px] text-slate-600 sm: text-[11.6px] group-hover:text-red-600 transition-colors">
                ramirodamianescalantecadena@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ramiro-damian-escalante-cadena-735b08340/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Linkedin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">LinkedIn</p>
              <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                Ramiro Damian Escalante
              </p>
            </div>
          </a>

          <a
            href="https://github.com/RamiroEscalante/Proyectos.git"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Github className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">GitHub</p>
              <p className="text-sm text-slate-600 group-hover:text-gray-700 transition-colors">RamiroEscalante</p>
            </div>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Get in Touch</h2>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-medium mb-3" htmlFor="name">
                <User className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-medium mb-3" htmlFor="email">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-slate-700 font-medium mb-3" htmlFor="message">
              <MessageSquare className="w-4 h-4" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <button
            type="submit"
            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-700"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            Send Message by Email
          </button>

          <button
            type="button"
            onClick={() => {
              const name = formRef.current?.name?.value || "sin nombre"
              const email = formRef.current?.email?.value || "sin correo"
              const message = formRef.current?.message?.value || "sin mensaje"
              const phone = "523322253535" // tu número con LADA

              const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                `Hola, soy ${name}, ${message}. mi correo es: ${email}.`
              )}`

              window.open(url, "_blank")
            }}
            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-700 ml-2"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            Send by WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
