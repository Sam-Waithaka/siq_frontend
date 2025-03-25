import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      <motion.h1 
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Manage Users with Ease
      </motion.h1>
      <motion.p 
        className="text-lg max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        A powerful, seamless, and intuitive user management system to 
        simplify authentication, roles, and permissions.
      </motion.p>
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/register">
          <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button className="bg-blue-700 px-6 py-3 rounded-2xl shadow-md hover:bg-blue-800 transition flex items-center gap-2">
            Login <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
