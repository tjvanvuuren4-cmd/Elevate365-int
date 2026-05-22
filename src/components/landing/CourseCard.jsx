import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Star,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { USD_TO_ZAR } from "@/lib/courseData";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/lib/CartContext";

/**
 * @param {{ course: any; index: number }} props
 */
export default function CourseCard({ course, index }) {
  const priceZAR = (course.priceUSD * USD_TO_ZAR).toFixed(0);
  const monthlyPrice = (priceZAR / 10).toFixed(0);

  const navigate = useNavigate();
  const { cartItems, addCourse } = useCart();

  const inCart = cartItems.some(
    (item) => item.id === course.id
  );

  const handleEnroll = () => {
    if (!inCart) {
      addCourse(course);
    }

    navigate("/cart");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[2rem]"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(18px)",
        boxShadow:
          "0 25px 80px rgba(124,58,237,0.12)",
      }}
    >
      {/* HOVER GLOW */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg,rgba(124,58,237,0.16),transparent)",
        }}
      />

      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03030b] via-[#03030b]/25 to-transparent" />

        {/* CATEGORY BADGE */}
        <Badge
          className="absolute top-4 left-4 border-0 uppercase"
          style={{
            background:
              "linear-gradient(135deg,#7c3aed,#8b5cf6)",
            color: "white",
            letterSpacing: "0.14em",
            fontSize: "10px",
            fontWeight: 800,
            padding: "8px 14px",
            borderRadius: "999px",
          }}
        >
          {course.category}
        </Badge>
      </div>

      {/* CONTENT */}
      <div className="relative p-6">
        {/* TITLE */}
        <h3
          className="line-clamp-2 mb-3"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.8px",
          }}
        >
          {course.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="line-clamp-3 mb-6"
          style={{
            color: "rgba(255,255,255,0.64)",
            fontSize: "14px",
            lineHeight: 1.7,
          }}
        >
          {course.description}
        </p>

        {/* STATS */}
        <div
          className="flex flex-wrap gap-4 mb-6"
          style={{
            color: "rgba(255,255,255,0.62)",
            fontSize: "13px",
          }}
        >
          <span className="flex items-center gap-2">
            <Clock
              className="w-4 h-4"
              style={{ color: "#a78bfa" }}
            />
            {course.duration}
          </span>

          <span className="flex items-center gap-2">
            <Users
              className="w-4 h-4"
              style={{ color: "#a78bfa" }}
            />
            {course.students.toLocaleString()}
          </span>

          <span className="flex items-center gap-2">
            <Star
              className="w-4 h-4"
              style={{
                color: "#a78bfa",
                fill: "#a78bfa",
              }}
            />
            {course.rating}
          </span>
        </div>

        {/* FOOTER */}
        <div
          className="flex items-center justify-between pt-5"
          style={{
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* PRICE */}
          <div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                background:
                  "linear-gradient(135deg,#8b5cf6,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-1px",
              }}
            >
              R {Number(priceZAR).toLocaleString()}
            </div>

            <div
  style={{
    color: "rgba(255,255,255,0.45)",
    fontSize: "11px",
    marginTop: "2px",
  }}
>
  ≈ ${course.priceUSD.toFixed(2)} USD
</div>

<div
  style={{
    color: "#c084fc",
    fontSize: "12px",
    fontWeight: 700,
    marginTop: "6px",
  }}
>
  or R {Number(monthlyPrice).toLocaleString()} / month × 10
</div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => addCourse(course)}
              className="h-11 w-11"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                color: "white",
                borderRadius: "999px",
              }}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>

            <Button
              size="sm"
              onClick={handleEnroll}
              className="border-0"
              style={{
                background:
                  "linear-gradient(135deg,#7c3aed,#8b5cf6)",
                color: "white",
                borderRadius: "999px",
                padding: "0 20px",
                height: "44px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "11px",
                boxShadow:
                  "0 12px 30px rgba(124,58,237,0.35)",
              }}
            >
              {inCart ? "Go to Cart" : "Enroll"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}