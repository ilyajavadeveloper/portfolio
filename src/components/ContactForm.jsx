import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const validate = () => {
        const err = {};
        if (!formData.name) err.name = "Name is required";
        if (!formData.email) {
            err.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            err.email = "Invalid email";
        }
        if (!formData.message) err.message = "Message is required";
        return err;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
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
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                toast.error("Failed to send message");
            })
            .finally(() => setIsSending(false));
    };

    return (
        <section
            id="contact"
            className="relative px-6 py-28 lg:px-16"
        >
            <Toaster position="bottom-right" />

            <motion.div
                className="mx-auto max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* HEADER */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        Let’s Connect
                    </h2>
                    <p className="mt-4 text-lg text-white/60">
                        Have a project, idea or opportunity? Let’s talk.
                    </p>
                </motion.div>

                {/* FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    className="
            mx-auto grid max-w-5xl grid-cols-1 gap-6
            rounded-3xl border border-white/15
            bg-white/5 p-10 backdrop-blur
            md:grid-cols-2
          "
                >
                    {/* NAME */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="
                w-full rounded-xl border border-white/20
                bg-transparent px-4 py-3
                text-white placeholder-white/40
                focus:border-white/40 focus:outline-none
              "
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                    </motion.div>

                    {/* EMAIL */}
                    <motion.div variants={itemVariants}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="
                w-full rounded-xl border border-white/20
                bg-transparent px-4 py-3
                text-white placeholder-white/40
                focus:border-white/40 focus:outline-none
              "
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                    </motion.div>

                    {/* MESSAGE */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2"
                    >
            <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea"
                value={formData.message}
                onChange={handleChange}
                className="
                w-full resize-none rounded-xl border border-white/20
                bg-transparent px-4 py-4
                text-white placeholder-white/40
                focus:border-white/40 focus:outline-none
              "
            />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.message}
                            </p>
                        )}
                    </motion.div>

                    {/* SUBMIT */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2"
                    >
                        <motion.button
                            type="submit"
                            disabled={isSending}
                            whileHover={{ scale: 1.03 }}
                            className="
                w-full rounded-2xl
                bg-white px-8 py-4
                text-base font-bold text-black
                transition hover:bg-white/90
                disabled:opacity-50
              "
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </motion.button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
