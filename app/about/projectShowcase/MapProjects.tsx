export default function MapProjects() {
  type AccentColor = "blue" | "emerald";

  interface Section {
    title: string;
    subtitle: string;
    image: string;
    accentColor: AccentColor;
  }

  const sections: Section[] = [
    {
      title: "Our Modern Infrastructure",
      subtitle: "State-of-the-art facilities designed for excellence",
      image: "./image10.png",
      accentColor: "blue",
    },
    {
      title: "Construction Excellence",
      subtitle: "Building the future with precision and innovation",
      image: "./image11.png",
      accentColor: "emerald",
    },
  ];

  const GRADIENTS: Record<AccentColor, string> = {
    blue: "from-blue-600 to-blue-800",
    emerald: "from-emerald-600 to-emerald-800",
  };

  const getGradientColor = (color: AccentColor): string =>
    GRADIENTS[color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6 sm:space-y-8">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600">
                {section.subtitle}
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />

              {/* Accent Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${getGradientColor(
                  section.accentColor
                )} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
