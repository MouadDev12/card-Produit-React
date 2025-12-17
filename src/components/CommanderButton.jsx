import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CommanderButton({ onClick }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 30px rgba(79,70,229,0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 350 }}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "12px 20px",
        borderRadius: "12px",
        border: "none",
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "15px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px"
      }}
    >
      <ShoppingCart size={18} />
      Commander
    </motion.button>
  );
}
