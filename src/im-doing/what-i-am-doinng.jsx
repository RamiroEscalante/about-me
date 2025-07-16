import { BookOpen, Zap } from "lucide-react"

export const WhatIamDoing = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">What I'm Doing</h2>
      </div>

      <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
        <div className="p-3 bg-white rounded-lg shadow-sm">
          <BookOpen className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Current Learning</h3>
          <p className="text-slate-600 leading-relaxed">
            I'm currently taking{" "}
            <span className="font-semibold text-emerald-700">"The Web Developer Bootcamp 2025"</span> on Udemy,
            expanding my skills in modern web development technologies and best practices.
          </p>
        </div>
      </div>
    </div>
  )
}
