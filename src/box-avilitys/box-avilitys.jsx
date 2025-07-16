import { Code, Database, Globe, Palette, GitBranch, Cpu } from "lucide-react"

const abilities = [
  {
    name: "HTML",
    description: "Proficient in creating semantic and accessible HTML structures.",
    value: 80,
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS",
    description: "Skilled in styling web pages with CSS, including Flexbox and Grid layouts.",
    value: 60,
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript",
    description: "Experienced in JavaScript for dynamic and interactive web applications.",
    value: 50,
    icon: Code,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "React",
    description: "Building modern user interfaces with React and component-based architecture.",
    value: 45,
    icon: Code,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Prisma",
    description: "Database ORM for type-safe database access and schema management.",
    value: 40,
    icon: Database,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Supabase",
    description: "Backend-as-a-Service for authentication, database, and real-time features.",
    value: 50,
    icon: Database,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "UI/UX",
    description: "Creating intuitive and visually appealing user experiences.",
    value: 50,
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "GitHub",
    description: "Version control and collaborative development using Git and GitHub.",
    value: 70,
    icon: GitBranch,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Python",
    description: "Programming with Python for various development tasks and automation.",
    value: 50,
    icon: Cpu,
    color: "from-blue-600 to-indigo-600",
  },
]

export const BoxAvilitys = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">My Abilities</h2>
        <p className="text-slate-600">Technologies and skills I work with</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {abilities.map((ability, index) => {
          const IconComponent = ability.icon
          return (
            <div
              key={ability.name}
              className="group bg-white border border-slate-200/60 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-gradient-to-br ${ability.color} rounded-lg`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{ability.name}</h3>
              </div>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{ability.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500">Progress</span>
                  <span className="text-xs font-semibold text-slate-700">{ability.value}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${ability.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${ability.value}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
