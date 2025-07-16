import { Download } from "lucide-react"

export const ButtonDownload = () => {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="/CV/CV.pdf"
        download
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-slate-800 hover:to-slate-600"
      >
        <Download className="w-5 h-5 group-hover:animate-bounce" />
        <span className="font-semibold">Download CV</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  )
}
