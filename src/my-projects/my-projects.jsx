import { ExternalLink, Github, Smartphone } from "lucide-react"

export const MyProjects = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Featured Project</h2>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">CETIMarket</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">PWA</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                Full Stack
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              <Github className="w-4 h-4 text-slate-600" />
            </button>
            <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              <ExternalLink className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          Progressive Web Application for buying and selling school materials, featuring real-time chat functionality.
          Built with modern technologies for optimal performance and user experience.
        </p>

        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "PostgreSQL", "Real-time Chat"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white text-slate-600 text-xs font-medium rounded-lg border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
