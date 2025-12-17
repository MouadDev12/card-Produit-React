import { motion } from "framer-motion";
import CommanderButton from "./CommanderButton";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{
        width: "260px",
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "6px" }}>
          {product.title}
        </h3>

        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          {product.description}
        </p>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "700",
            margin: "12px 0"
          }}
        >
          {product.price} DH
        </p>

        <CommanderButton onClick={() => alert("Produit ajouté au panier")} />
      </div>
    </motion.div>
  );
}
