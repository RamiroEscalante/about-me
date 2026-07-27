import {
  ExternalLink,
  Github,
  Smartphone,
  Building,
  Table,
} from "lucide-react";

export const MyCareer = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
          <Building className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">My Career</h2>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Restaurant Clerk, Tortas Chucky’s
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-s font-medium rounded-full">
                {" "}
                June 2021, December 2024{" "}
              </span>
            </div>
          </div>
        </div>

        <h6 className="text-lg font-semibold text-slate-800 mb-2">
          Versatile Experience in Service and Logistics
        </h6>

        <p className="text-slate-600 leading-relaxed mb-4">
          I have worked in different roles such as Waiter, Delivery Person, and
          Dispatcher in busy environments. In these positions, I was the main
          point of contact between customers, kitchen staff, and drivers. My
          goal was always to provide clear and efficient service. I managed
          orders from the beginning to the end, making sure that everything
          arrived on time and that customers were happy. When problems appeared,
          like traffic delays or mistakes in orders, I found quick solutions. I
          also worked closely with my colleagues to organize daily tasks and
          meet all deadlines. This experience taught me how to stay calm under
          pressure and give the best service possible.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Customer Service",
            "Teamwork",
            "Problem-Solving",
            "Time Management",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white text-slate-600 text-xs font-medium rounded-lg border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <br />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Internship, Ingeneria Computacional, S.A. de C.V.
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-s font-medium rounded-full">
                {" "}
                November 2025, Currently{" "}
              </span>
            </div>
          </div>
        </div>

        <h6 className="text-lg font-semibold text-slate-800 mb-2">
          IT Support and Technical Assistance
        </h6>

        <p className="text-slate-600 leading-relaxed mb-4">
          I have experience in computer repair, network setup, and technical
          support. My tasks include fixing computers by replacing hardware parts
          such as hard drives, RAM, and power supplies. I also set up and
          configure desktop and laptop computers so they are ready for daily
          use. I install and update operating systems, drivers, and other basic
          programs to keep all devices working correctly. In addition, I help
          install network devices like security cameras, routers, and switches.
          I also support the company's website by making small changes and
          coding updates to the landing page. This job has helped me develop
          strong technical skills and the ability to solve problems efficiently.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Hardware Repair",
            "Network Setup",
            "System Updates",
            "Web Support",
            "Technical Support",
            "Hardware Installation",
            "Software Management",
            "Network Assistance",
            "Web Collaboration",
          ].map((tech) => (
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
  );
};
