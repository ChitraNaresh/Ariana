export default function ProjectShowcase() {
  /* =======================
     TYPES
  ======================= */
  type AccentColor = "emerald" | "blue" | "purple" | "orange";

  interface Project {
    badge: string;
    badgeColor: string;
    accentColor: AccentColor;
    title: string;
    subtitle?: string;
    location: string;
    owner: string;
    date?: string;
    period?: string;
    timeline?: string;
    amount?: string;
    projectValue?: string;
    total?: string;
    totalUSD?: string;
    outline: string[];
    images: string[];
  }

  /* =======================
     DATA
  ======================= */
  const projects: Project[] = [
    {
      badge: "COMPLETED PROJECT",
      badgeColor: "bg-emerald-50 text-emerald-700",
      accentColor: "emerald",
      title:
        "Factory, Office, Lodging, Restaurant, Guard House, etc Work for Sehan India",
      location: "Anantapur, Andhra Pradesh, India",
      owner: "KSH Automative Pvt.Ltd",
      date: "2018.06.21",
      period: "2018.06.21 – 2019.02.28",
      amount: "INR 1,468,235,000 + USD 1,000,000",
      total: "(Total USD 22,583,055)",
      outline: [
        "Civil - Excavation (19382m2), Excavation(Soft Rock) (2126m2), Hard Rock(3528m2), Back Filing(9277m2)",
        "Concrete - Concrete (20879m2), Bar (1769ton), Formwork(21738m2)",
        "Steel Frame - Manufacturing & Installation 4161ton",
        "Panel - Roof Panel (48,284m2), Wall Panel (81m2)",
      ],
      images: ["/image1.png", "/image2.png"],
    },
    {
      badge: "COMPLETED PROJECT",
      badgeColor: "bg-blue-50 text-blue-700",
      accentColor: "blue",
      title: "Factory, Office & Lodging Complex",
      subtitle: "Sehan India Development",
      location: "Pune, Maharashtra, India",
      owner: "Seoyon E-Hwa Automative Anantapur Pvt.,Ltd",
      timeline: "Apr 2024 - Jun 2025",
      projectValue: "INR 1,730,000,000",
      totalUSD: "(Total USD 20,760,000)",
      outline: [
        "Site Area - 80925m2",
        "Building Area - 48489m2",
        "MIP Process - 658ton",
      ],
      images: ["/image9.png", "/image4.png"],
    },
    {
      badge: "ONGOING PROJECT",
      badgeColor: "bg-purple-50 text-purple-700",
      accentColor: "purple",
      title: "Hyundai Mobis India Plant Project",
      location: "Chennai, Tamil Nadu, India",
      owner: "Hyundai Motor India",
      period: "2025.06.01 – 2026.05.30",
      amount: "INR 1,903,340,000",
      total: "(Total USD 22,247,000)",
      outline: ["Site Area - 99,200m2", "Building Area - 19,834m2"],
      images: ["/image5.png", "/image6.png"],
    },
    {
      badge: "ONGOING PROJECT",
      badgeColor: "bg-orange-50 text-orange-700",
      accentColor: "orange",
      title: "DN Solutions India Plant Project",
      location: "Bangalore, Karnataka, India",
      owner: "DN Solutions India",
      period: "2025.08.14 – 2026.07.13",
      amount: "INR 2,065,000,000",
      total: "(Total USD 23,541,000)",
      outline: ["Site Area - 101,173m2", "Building Area - 33,147m2"],
      images: ["/image7.png", "/image8.png"],
    },
  ];

  /* =======================
     COLOR HELPERS
  ======================= */
  const ACCENT_BG: Record<AccentColor, string> = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  const ACCENT_TEXT: Record<AccentColor, string> = {
    emerald: "text-emerald-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
  };

  const getAccentColor = (color: AccentColor) => ACCENT_BG[color];
  const getTextColor = (color: AccentColor) => ACCENT_TEXT[color];

  /* =======================
     UI
  ======================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {/* Images */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {project.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative aspect-[8/5] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl group"
                >
                  <img
                    src={img}
                    alt={`${project.title} image ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col">
              <div className="space-y-5">
                <div>
                  <span
                    className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full mb-3 ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-slate-500 mt-2 text-sm">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Meta */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {[
                    ["Location", project.location],
                    ["Owner", project.owner],
                    ["Date", project.date],
                    ["Period", project.period],
                    ["Timeline", project.timeline],
                  ]
                    .filter(([, value]) => value)
                    .map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-slate-500">{label}</span>
                        <span className="font-semibold text-slate-900 text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Amount */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-sm text-slate-500">
                    {project.projectValue ? "Project Value" : "Amount"}
                  </span>

                  <div className="mt-1">
                    <p className="font-semibold text-slate-900">
                      {project.amount || project.projectValue}
                    </p>
                    <p
                      className={`text-lg font-bold ${getTextColor(
                        project.accentColor
                      )}`}
                    >
                      {project.total || project.totalUSD}
                    </p>
                  </div>
                </div>

                {/* Outline */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold mb-3 uppercase">Outline</h4>
                  <div className="space-y-2">
                    {project.outline.map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 ${getAccentColor(
                            project.accentColor
                          )}`}
                        />
                        <p className="text-sm text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
