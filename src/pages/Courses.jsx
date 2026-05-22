import { courses, USD_TO_ZAR } from "@/data/courses";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#03030b] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black">
          Explore <span className="text-purple-500">Courses</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Premium cybersecurity and blockchain programs designed for the next generation of digital professionals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl border border-purple-500/20 bg-black/60 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 text-sm uppercase tracking-widest">
                    {course.category}
                  </span>

                  <span className="text-yellow-400">
                    ⭐ {course.rating}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white">
                  {course.title}
                </h2>

                <p className="text-gray-400 mt-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-gray-500 text-sm">
                      {course.duration}
                    </p>

                    <p className="text-2xl font-black text-purple-400">
                      R {(course.priceUSD * USD_TO_ZAR).toLocaleString()}
                    </p>

                    <p className="text-sm text-purple-300 mt-2 font-semibold">
                     or R {(((course.priceUSD * USD_TO_ZAR) / 10)).toFixed(0)} / month × 10
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full font-bold"
                    >
                    Unlock
                 </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}