import { useParams, Link } from "react-router-dom";
import { courses, USD_TO_ZAR } from "@/data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen bg-[#03030b] text-white flex items-center justify-center">
        Course not found.
      </div>
    );
  }

  const priceZAR = (course.priceUSD * USD_TO_ZAR).toLocaleString();

  return (
    <div className="min-h-screen bg-[#03030b] text-white">
      <section className="relative px-6 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link to="/courses" className="text-purple-400 text-sm uppercase tracking-widest">
              ← Back to Courses
            </Link>

            <p className="mt-8 text-purple-400 uppercase tracking-widest text-sm">
              {course.category}
            </p>

            <h1 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              {course.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="rounded-2xl border border-purple-500/20 bg-black/50 p-5">
                <p className="text-gray-500 text-sm">Duration</p>
                <p className="text-xl font-black mt-1">{course.duration}</p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-black/50 p-5">
                <p className="text-gray-500 text-sm">Students</p>
                <p className="text-xl font-black mt-1">{course.students}</p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-black/50 p-5">
                <p className="text-gray-500 text-sm">Rating</p>
                <p className="text-xl font-black mt-1">⭐ {course.rating}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-purple-500/20 bg-black/60 p-4 shadow-[0_0_60px_rgba(124,58,237,0.25)]">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[420px] object-cover rounded-[1.5rem]"
            />

            <div className="p-6">
              <p className="text-gray-500">Premium Enrollment</p>

              <p className="text-5xl font-black text-purple-400 mt-2">
                R {priceZAR}
              </p>

              <button className="mt-6 w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest shadow-[0_15px_45px_rgba(124,58,237,0.45)]">
                Unlock Course
              </button>

              <p className="text-gray-500 text-sm text-center mt-4">
                Secure enrollment · Lifetime access · Certificate included
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-8">
            <h2 className="text-2xl font-black text-purple-400">What You’ll Learn</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✓ Practical real-world projects</li>
              <li>✓ Professional tools and workflows</li>
              <li>✓ Career-ready portfolio outcomes</li>
              <li>✓ Premium certificate on completion</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-8">
            <h2 className="text-2xl font-black text-purple-400">Course Includes</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✓ HD video lessons</li>
              <li>✓ Downloadable resources</li>
              <li>✓ Student dashboard access</li>
              <li>✓ Progress tracking</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/50 p-8">
            <h2 className="text-2xl font-black text-purple-400">Best For</h2>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>✓ Beginners and career switchers</li>
              <li>✓ IT professionals</li>
              <li>✓ Freelancers and entrepreneurs</li>
              <li>✓ Future tech specialists</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}