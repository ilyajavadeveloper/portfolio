import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSending(true);
        setErrors({});

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                toast.error("Failed to send email. Please try again later.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <motion.div
            className="pt-28 pb-20 px-4 lg:w-[70%] xl:w-[60%] mx-auto"
            id="contact"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <Toaster />

            <motion.h2
                className="mb-12 text-center text-4xl font-semibold tracking-tight text-white"
                variants={itemVariants}
            >
                Let's Connect
            </motion.h2>

            <motion.form
                onSubmit={handleSubmit}
                className="
                    space-y-7 
                    bg-white/5 backdrop-blur-2xl 
                    border border-white/15 
                    shadow-[0_0_45px_rgba(255,255,255,0.12)] 
                    p-10 rounded-3xl
                "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="
                            w-full border border-white/20 rounded-xl px-5 py-4 
                            bg-transparent text-white placeholder-white/40 
                            focus:border-white/40 outline-none transition-all text-lg
                        "
                    />
                    {errors.name && (
                        <p className="text-sm text-red-400 mt-1">{errors.name}</p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="
                            w-full border border-white/20 rounded-xl px-5 py-4 
                            bg-transparent text-white placeholder-white/40 
                            focus:border-white/40 outline-none transition-all text-lg
                        "
                    />
                    {errors.email && (
                        <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        rows={5}
                        className="
                            w-full border border-white/20 rounded-xl px-5 py-4 
                            bg-transparent text-white placeholder-white/40 
                            focus:border-white/40 outline-none transition-all text-lg 
                            leading-relaxed
                        "
                    />
                    {errors.message && (
                        <p className="text-sm text-red-400 mt-1">{errors.message}</p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.button
                        type="submit"
                        disabled={isSending}
                        className="
                            w-full bg-white text-black py-4 rounded-xl 
                            font-semibold tracking-tight text-lg
                            hover:bg-white/90 shadow-md transition disabled:opacity-50
                        "
                        whileHover={{ scale: 1.03 }}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.div>
            </motion.form>
        </motion.div>
    );
};

export default ContactForm;
