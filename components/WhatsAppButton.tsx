"use client"

import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
    >
      {/* Always Visible Label */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl"
      >
        Chat on WhatsApp
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-charcoal" />
      </motion.div>

      {/* WhatsApp Icon Button - Bigger */}
      <motion.a
        href="https://wa.me/919090363607"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:shadow-[#25D366]/50 transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            "0 25px 50px -12px rgba(37, 211, 102, 0.4)",
            "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.371-.03-.544-.086-.173-.78-1.875-1.069-2.568-.281-.675-.568-.584-.784-.594-.202-.009-.433-.011-.663-.011-.23 0-.603.088-.919.434-.316.346-1.208 1.18-1.208 2.876 0 1.697 1.235 3.335 1.408 3.566.173.231 2.433 3.715 5.895 5.21 2.868 1.238 3.454.992 4.078.932.624-.06 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </motion.div>
  )
}
