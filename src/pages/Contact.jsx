import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-28"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg max-w-xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-white/90 text-center">
          ✉️ Contact Me
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          ></textarea>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Footer */}
      <p className="text-white/40 text-sm mt-8 text-center">
        © {new Date().getFullYear()} Sudhanshu Gode. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Contact;
