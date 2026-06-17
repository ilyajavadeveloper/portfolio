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
} from "lucide-react";

/* ================= ANIMATIONS ================= */

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.14,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const fieldVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.55,
            ease: "easeOut",
        },
    }),
};

/* ================= DATA ================= */

const contactHighlights = [
    "Frontend interfaces",
    "Landing pages",
    "Portfolio websites",
    "UI improvements",
];

/* ================= COMPONENT ================= */

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

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validate = () => {
        const err = {};

        if (!formData.name.trim()) {
            err.name = "Name is required";
        }

        if (!formData.email.trim()) {
            err.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            err.email = "Invalid email";
        }

        if (!formData.message.trim()) {
            err.message = "Message is required";
        }

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
                toast.success("Message sent successfully");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch(() => {
                toast.error("Failed to send message");
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
            className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-16"
        >
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#111",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.15)",
                    },
                }}
            />

            {/* BACKGROUND ATMOSPHERE */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-[170px]" />
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />
            <div className="pointer-events-none absolute -left-40 bottom-10 h-[360px] w-[360px] rounded-full bg-white/5 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* HEADER */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur">
                        <Sparkles size={18} />
                        Contact
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Let’s Connect
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
                        Have a project, idea or opportunity? Send the message and let’s turn it into something clean,
                        sharp and useful.
                    </p>
                </motion.div>

                {/* MAIN CARD */}
                <motion.div
                    variants={itemVariants}
                    className="
                        group relative overflow-hidden rounded-[2.25rem]
                        border border-white/15
                        bg-gradient-to-br from-white/[0.11] via-white/[0.065] to-white/[0.035]
                        backdrop-blur
                    "
                >
                    {/* CARD GLOW */}
                    <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />
                    <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-[130px]" />
                    <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 grid overflow-hidden rounded-[2.25rem] lg:grid-cols-[0.9fr_1.1fr]">
                        {/* LEFT INFO PANEL */}
                        <motion.div
                            variants={itemVariants}
                            className="
                                relative flex flex-col justify-between
                                border-b border-white/10
                                bg-black/20 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10
                            "
                        >
                            <div>
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/15 bg-white/10">
                                    <Mail className="text-white/80" size={30} />
                                </div>

                                <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                    Start the conversation
                                </h3>

                                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                                    I’m open to frontend work, landing pages, portfolio builds, interface polishing
                                    and practical product ideas. Clear message, clear goal, clean execution.
                                </p>

                                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                    {contactHighlights.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fieldVariants}
                                            custom={index + 1}
                                            className="
                                                flex items-center gap-3 rounded-2xl
                                                border border-white/10
                                                bg-white/[0.055] px-4 py-3
                                            "
                                        >
                                            <CheckCircle2 size={18} className="shrink-0 text-white/65" />
                                            <span className="text-sm font-semibold text-white/70">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                                <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                                    <ArrowUpRight size={16} />
                                    Response style
                                </div>

                                <p className="text-sm leading-relaxed text-white/62">
                                    Tell me what you need, what the goal is and what already exists. The more context,
                                    the faster the idea becomes a real interface.
                                </p>
                            </div>
                        </motion.div>

                        {/* FORM */}
                        <motion.form
                            onSubmit={handleSubmit}
                            variants={containerVariants}
                            className="grid grid-cols-1 gap-6 p-7 sm:p-9 md:grid-cols-2 lg:p-10"
                        >
                            {/* NAME */}
                            <motion.div variants={fieldVariants} custom={1}>
                                <label className="mb-3 flex items-center gap-2 text-sm font-bold text-white/70">
                                    <User size={17} />
                                    Your name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`
                                        w-full rounded-2xl border
                                        bg-black/20 px-5 py-4
                                        text-white placeholder-white/35
                                        outline-none backdrop-blur
                                        transition duration-300
                                        focus:bg-white/[0.06]
                                        ${
                                            errors.name
                                                ? "border-red-400/60 focus:border-red-400"
                                                : "border-white/15 focus:border-white/45"
                                        }
                                    `}
                                />

                                {errors.name && (
                                    <p className="mt-2 text-sm font-medium text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </motion.div>

                            {/* EMAIL */}
                            <motion.div variants={fieldVariants} custom={2}>
                                <label className="mb-3 flex items-center gap-2 text-sm font-bold text-white/70">
                                    <Mail size={17} />
                                    Your email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`
                                        w-full rounded-2xl border
                                        bg-black/20 px-5 py-4
                                        text-white placeholder-white/35
                                        outline-none backdrop-blur
                                        transition duration-300
                                        focus:bg-white/[0.06]
                                        ${
                                            errors.email
                                                ? "border-red-400/60 focus:border-red-400"
                                                : "border-white/15 focus:border-white/45"
                                        }
                                    `}
                                />

                                {errors.email && (
                                    <p className="mt-2 text-sm font-medium text-red-400">
                                        {errors.email}
                                    </p>
                                )}
                            </motion.div>

                            {/* MESSAGE */}
                            <motion.div
                                variants={fieldVariants}
                                custom={3}
                                className="md:col-span-2"
                            >
                                <label className="mb-3 flex items-center gap-2 text-sm font-bold text-white/70">
                                    <MessageSquare size={17} />
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows={7}
                                    placeholder="Tell me about your project, idea or opportunity..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`
                                        w-full resize-none rounded-2xl border
                                        bg-black/20 px-5 py-4
                                        text-white placeholder-white/35
                                        outline-none backdrop-blur
                                        transition duration-300
                                        focus:bg-white/[0.06]
                                        ${
                                            errors.message
                                                ? "border-red-400/60 focus:border-red-400"
                                                : "border-white/15 focus:border-white/45"
                                        }
                                    `}
                                />

                                {errors.message && (
                                    <p className="mt-2 text-sm font-medium text-red-400">
                                        {errors.message}
                                    </p>
                                )}
                            </motion.div>

                            {/* SUBMIT */}
                            <motion.div
                                variants={fieldVariants}
                                custom={4}
                                className="md:col-span-2"
                            >
                                <motion.button
                                    type="submit"
                                    disabled={isSending}
                                    whileHover={!isSending ? { scale: 1.015 } : {}}
                                    whileTap={!isSending ? { scale: 0.98 } : {}}
                                    className="
                                        group/button relative flex w-full items-center justify-center gap-3
                                        overflow-hidden rounded-2xl
                                        border border-white/25
                                        bg-white px-8 py-5
                                        text-base font-extrabold text-black
                                        transition duration-300
                                        hover:bg-white/90
                                        disabled:cursor-not-allowed disabled:opacity-55
                                    "
                                >
                                    <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-black/10 to-transparent transition duration-700 group-hover/button:translate-x-[120%]" />

                                    <span className="relative z-10">
                                        {isSending ? "Sending..." : "Send Message"}
                                    </span>

                                    <Send
                                        size={20}
                                        className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
                                    />
                                </motion.button>

                                <p className="mt-4 text-center text-sm text-white/42">
                                    Your message goes directly through EmailJS. No spam, no noise.
                                </p>
                            </motion.div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactForm;