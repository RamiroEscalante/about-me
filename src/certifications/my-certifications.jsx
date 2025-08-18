import { Award, ExternalLink, Building2, CheckCircle } from "lucide-react"

export const Certifications = () => {
  const certifications = [
    {
      name: "Python Essentials 1",
      description:
        "Fundamentals of Python programming language, covering syntax, data structures, and basic programming concepts.",
      issuer: "Cisco Networking Academy",
      href: "https://www.credly.com/badges/1aeb2f3d-b26a-4676-9b13-7e1508e1dab4/public_url",
      image: "/Certificaciones/cert.png",
      color: "from-blue-500 to-indigo-600",
      category: "Programming",
    },
    {
      name: "ICP Developer Motoko",
      description:
        "Advanced training of developers in the Internet Computer Protocol using Motoko programming language.",
      issuer: "Zona Tres",
      href: "https://www.linkedin.com/posts/ramiro-damian-escalante-cadena-735b08340_por-fin-activity-7274599555919147008-NeSe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWX_hkB55ih1_cJHwok1u5U9F63xkBHLkU",
      image: "/motoko/motoko.png",
      color: "from-purple-500 to-pink-600",
      category: "Blockchain",
    },
    {
      name: "Discover Data with Oracle Education Foundation",
      description:
        "Data analysis using Oracle Analytics Cloud to analyze sustainable development objectives and data visualization techniques.",
      issuer: "Oracle Education Foundation",
      href: "https://www.linkedin.com/posts/ramiro-damian-escalante-cadena-735b08340_activity-7351065761945190401-kp8B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWX_hkB55ih1_cJHwok1u5U9F63xkBHLkU", // Placeholder - replace with actual URL
      image: "/oracle/Oracle-Symbol.png",
      color: "from-red-500 to-orange-600",
      category: "Data Analytics",
    },
    {
      name: "Curso Santander | Introducción a la programación con Python",
      description:
        "This course will guide you from a basic level to a solid understanding of Python fundamentals. You'll learn to write clear and efficient code through interactive lessons, hands-on exercises, and real-world problems.",
      issuer: "Santander",
      href: "https://www.linkedin.com/posts/ramiro-damian-escalante-cadena-735b08340_activity-7363227529232453632-HU_l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWX_hkB55ih1_cJHwok1u5U9F63xkBHLkU",
      image: "/openacademy/open.png",
      color: "from-emerald-500 to-teal-600",
      category: "Programming",
    }
  ]

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
          <Award className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Certifications</h2>
          <p className="text-slate-600 mt-1">Professional achievements and credentials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="group relative bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
              <img
                src={certification.image || "/placeholder.svg"}
                alt={certification.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 bg-gradient-to-r ${certification.color} text-white text-xs font-semibold rounded-full shadow-lg`}
                >
                  {certification.category}
                </span>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4">
                <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                {certification.name}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{certification.description}</p>

              {/* Issuer Info */}
              <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 bg-slate-100 rounded-lg">
                  <Building2 className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Issued by</p>
                  <p className="text-sm font-semibold text-slate-700">{certification.issuer}</p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r ${certification.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <span>View Certification</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-12 pt-8 border-t border-slate-200/60">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-slate-800">{certifications.length}</p>
            <p className="text-slate-600 text-sm">Certifications Earned</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {new Set(certifications.map((cert) => cert.issuer)).size}
            </p>
            <p className="text-slate-600 text-sm">Trusted Issuers</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-slate-800">100%</p>
            <p className="text-slate-600 text-sm">Verified</p>
          </div>
        </div>
      </div>
    </div>
  )
}
