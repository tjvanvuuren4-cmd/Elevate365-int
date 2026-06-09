import { Link } from "react-router-dom";
import { courses } from "@/data/courses";

export default function MyCourses() {
  const approvedCourses = courses.map((course) => ({
    ...course,
    status: "ACTIVE",
    progress: 0,
    lessons:
      course.id === 1 ? 5 :
      course.id === 2 ? 5 :
      course.id === 3 ? 5 :
      course.id === 4 ? 5 :
      course.id === 5 ? 5 :
      course.id === 6 ? 5 :
      course.id === 7 ? 5 :
      course.id === 8 ? 5 : 3,
    downloads:
      course.id === 8 ? 3 :
      course.id === 6 ? 3 :
      course.id === 5 ? 3 : 2,
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-400 tracking-[0.35em] uppercase text-sm font-bold mb-3">
          Student Portal
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              My <span className="text-purple-500">Courses</span>
            </h1>

            <p className="text-slate-300 max-w-2xl">
              Access your approved courses, lessons, downloads, resources and
              assignments from one place.
            </p>
          </div>

          <div className="bg-white/5 border border-purple-500/30 rounded-2xl px-6 py-4">
            <p className="text-sm text-slate-400">Approved Courses</p>
            <p className="text-3xl font-bold text-purple-400">
              {approvedCourses.length}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedCourses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group bg-white/5 border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-52 bg-slate-900 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {course.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/20 border border-green-400/40 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                    {course.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition line-clamp-2">
                  {course.title}
                </h2>

                <p className="text-slate-400 text-sm mb-5 line-clamp-2">
                  Continue your learning journey and track your progress.
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 mb-5">
                  <div className="bg-slate-900/70 rounded-xl p-3">
                    📚 {course.lessons} Lessons
                  </div>

                  <div className="bg-slate-900/70 rounded-xl p-3">
                    📥 {course.downloads} Downloads
                  </div>

                  <div className="bg-slate-900/70 rounded-xl p-3">
                    🏆 Certificate
                  </div>

                  <div className="bg-slate-900/70 rounded-xl p-3">
                    ♾ Lifetime Access
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div
                      className="bg-purple-500 h-3 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-500 py-3 rounded-xl font-bold transition">
                  Open Course
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}