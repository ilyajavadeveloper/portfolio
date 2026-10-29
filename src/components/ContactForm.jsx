import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contactHighlights = [
  "Full-Stack & Frontend Engineering",
  "React / Next.js / TypeScript Apps",
  "Interactive 3D & Motion Interfaces",
  "Commercial Websites & Platforms",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "Invalid email address";
    }
    if (!formData.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    setErrors({});
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#090d16",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "16px",
          },
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[160px]" />

      {/* Header */}
      <motion.div variants={itemVariants} className="mb-14 text-center lg:mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-md">
          <Sparkles size={15} />
          <span>Direct Channel // Contact</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let’s Build Something Solid
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
          Have a role, project, or engineering challenge? Send a message directly and let’s discuss how I can help.
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035] backdrop-blur-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Info Panel */}
          <div className="flex flex-col justify-between border-b border-white/10 bg-black/30 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-2xl border border-sky-400/25 bg-sky-500/10 px-3.5 py-2 text-xs font-mono font-semibold text-sky-300">
                <Terminal size={16} />
                <span>STATUS: OPEN FOR OPPORTUNITIES</span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Start the conversation
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                Available for full-stack & frontend engineering roles, high-impact web applications, and custom commercial builds.
              </p>

              <div className="mt-7 space-y-2.5">
                {contactHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-sky-400" />
                    <span className="text-xs font-semibold text-white/80 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <div className="mb-1.5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-300">
                <ArrowUpRight size={15} />
                <span>Fast & Clear Response</span>
              </div>
              <p className="text-xs leading-relaxed text-white/60 sm:text-sm">
                Share the role details, project scope, or timeline — messages are delivered directly to my inbox.
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 p-6 sm:p-8 md:grid-cols-2 lg:col-span-7 lg:p-10"
          >
            {/* Name */}
            <div>
              <label className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
                <User size={15} className="text-sky-400" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition duration-200 focus:bg-white/[0.06] sm:text-base ${
                  errors.name
                    ? "border-rose-400/70 focus:border-rose-400"
                    : "border-white/15 focus:border-sky-400/70"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
                <Mail size={15} className="text-sky-400" />
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition duration-200 focus:bg-white/[0.06] sm:text-base ${
                  errors.email
                    ? "border-rose-400/70 focus:border-rose-400"
                    : "border-white/15 focus:border-sky-400/70"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70">
                <MessageSquare size={15} className="text-sky-400" />
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the role, project, or collaboration..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-xl border bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition duration-200 focus:bg-white/[0.06] sm:text-base ${
                  errors.message
                    ? "border-rose-400/70 focus:border-rose-400"
                    : "border-white/15 focus:border-sky-400/70"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-rose-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSending}
                className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-55 sm:text-base"
              >
                <span>{isSending ? "Sending Message..." : "Send Message"}</span>
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <p className="mt-3 text-center font-mono text-[11px] text-white/40">
                Direct encrypted delivery via EmailJS • Zero spam
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
