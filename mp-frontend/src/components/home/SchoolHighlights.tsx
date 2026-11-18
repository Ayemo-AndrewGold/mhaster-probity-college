import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Consistently outstanding performance in WASSCE and UTME examinations through dedicated teaching and comprehensive curriculum.",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Moral Discipline",
    description:
      "Strong emphasis on character development, integrity, and ethical values that shape responsible citizens.",
    bgColor: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Qualified Educators",
    description:
      "Experienced and committed teaching staff dedicated to student success and holistic development.",
    bgColor: "bg-green-50",
  },
  {
    icon: BookOpen,
    title: "Conducive Learning Environment",
    description:
      "Serene and peaceful campus that promotes focused learning and academic achievement.",
    bgColor: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Outstanding Examination Preparation",
    description:
      "Comprehensive preparation programs ensuring excellent results in all major examinations.",
    bgColor: "bg-amber-50",
  },
  {
    icon: Lightbulb,
    title: "Student Development",
    description:
      "Holistic approach to education focusing on academic, moral, and personal growth of every student.",
    bgColor: "bg-green-50",
  },
];

export default function SchoolHighlights() {
  return (
    <section className="py-16 md:py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-[#6b7280]">
            Mhastar Probity College combines academic rigor with moral
            education to develop well-rounded students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className={`${highlight.bgColor} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="flex flex-col items-start">
                  <div className="mb-4 p-3 bg-white rounded-xl shadow-sm">
                    <IconComponent className="w-8 h-8 text-[#1e40af]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
