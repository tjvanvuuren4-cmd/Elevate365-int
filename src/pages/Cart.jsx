import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses, USD_TO_ZAR } from "@/lib/courseData";
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/AuthContext";

export default function Cart() {
  const { cartItems, addCourse, removeCourse, clearCart, itemCount, totalPriceUSD } = useCart();
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("eft");
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    if (!itemCount || !customer.name || !customer.email) return;
    setOrderComplete(true);
    clearCart();
    setCustomer({ name: "", email: "" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="rounded-[2rem] border border-border/40 bg-card/90 p-8 shadow-xl shadow-slate-900/5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Checkout Cart</p>
          <div className="mt-4 space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Select a course and complete your checkout</h1>
            <p className="text-base leading-8 text-muted-foreground max-w-3xl">
              Review your selected courses, enter your contact details, and place your order. You can add or remove courses from the cart at any time.
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-[0_0_40px_rgba(124,58,237,0.12)]">
              <h2 className="text-2xl font-semibold">Available Courses</h2>
              <div className="mt-6 space-y-5">
                {courses.map((course) => {
                  const inCart = cartItems.some((item) => item.id === course.id);
                  return (
                    <div key={course.id} className="flex flex-col gap-4 rounded-3xl border border-border/50 bg-background/80 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        {course.featured && (
                        <span className="inline-flex mb-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                         Featured
                        </span>
                        )}
                        <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground max-w-2xl">{course.description}</p>
                        <div className="flex flex-wrap gap-3 text-xs font-light text-muted-foreground">
                          <span>{course.duration}</span>
                          <span>{course.category}</span>
                          <span>R {(course.priceUSD * USD_TO_ZAR).toFixed(0)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant={inCart ? "outline" : "default"}
                          onClick={() => addCourse(course)}
                          className="text-xs uppercase tracking-widest px-5"
                        >
                          {inCart ? "Added" : "Add to Cart"}
                        </Button>
                        {inCart && (
                          <Button size="sm" variant="ghost" className="text-xs uppercase tracking-widest px-4" onClick={() => removeCourse(course.id)}>
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-[0_0_40px_rgba(124,58,237,0.12)]">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <p className="mt-3 text-sm text-muted-foreground">Selected courses will appear here.</p>
              <div className="mt-6 space-y-4">
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-3xl bg-background/90 p-4">
                      <div className="flex items-center gap-4">
  <img
    src={item.image}
    alt={item.title}
    className="w-16 h-16 rounded-2xl object-cover"
  />

  <div>
    <p className="font-medium text-foreground">
      {item.title}
    </p>

    <p className="text-xs text-muted-foreground">
      R {(item.priceUSD * USD_TO_ZAR).toFixed(0)}
    </p>
  </div>
</div>
                      <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground" onClick={() => removeCourse(item.id)}>
                        ×
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl border border-dashed border-border/50 bg-background/80 p-6 text-sm text-muted-foreground">
                    No courses selected yet. Add a course to begin checkout.
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="sticky top-24 rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-[0_0_50px_rgba(124,58,237,0.18)]">
              <h2 className="text-2xl font-semibold">Checkout Summary</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Selected items</span>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-300">
  {itemCount} Courses
</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated total</span>
                  <span className="font-semibold text-foreground">R {(totalPriceUSD * USD_TO_ZAR).toFixed(0)}</span>
                </div>
              </div>
              <form onSubmit={handleCheckout} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="rounded-2xl border border-border/70 bg-background p-4">
  <p className="text-sm font-semibold text-foreground mb-3">
    Payment Method
  </p>
  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">
  <p className="text-sm font-semibold text-purple-300 uppercase tracking-widest">
    EFT Instructions
  </p>

  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
    <p>Bank: Pending Client Confirmation</p>
    <p>Account Name: Elevate•365</p>
    <p>Reference: Your Email Address</p>
  </div>

  <p className="mt-4 text-xs text-muted-foreground">
    Banking details will also be emailed after invoice request.
  </p>
</div>

  <label className="flex items-center gap-3 text-sm text-foreground">
    <input
      type="radio"
      name="paymentMethod"
      checked={paymentMethod === "eft"}
      onChange={() => setPaymentMethod("eft")}
    />
    Manual EFT / Bank Transfer
  </label>

  <label className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
    <input
      type="radio"
      name="paymentMethod"
      disabled
    />
    PayFast Online Payment Coming Soon
  </label>
</div>
                <Button
  type="submit"
  size="lg"
  className="
    w-full
    rounded-2xl
    bg-gradient-to-r
    from-purple-700
    to-purple-500
    hover:from-purple-600
    hover:to-purple-400
    text-white
    text-sm
    font-bold
    uppercase
    tracking-[0.25em]
    px-6
    py-6
    shadow-[0_15px_40px_rgba(124,58,237,0.35)]
    transition-all
    duration-300
    hover:scale-[1.02]
  "
  disabled={!itemCount || !customer.name || !customer.email}
>
  {paymentMethod === "eft"
    ? "Request EFT Invoice"
    : "Complete Checkout"}
</Button>
<p className="text-center text-xs text-muted-foreground mt-4">
  Secure enrollment • Lifetime access • Certificate included
</p>
              </form>
              {orderComplete && (
                <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                  Thank you! Your EFT invoice request has been received. We will send banking details and confirmation instructions via email.
                </div>
              )}
              <Button type="button" variant="ghost" className="mt-4 w-full text-xs uppercase tracking-widest" onClick={() => navigate('/') }>
                Continue browsing courses
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
