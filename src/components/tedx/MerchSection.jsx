import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const products = [
  {
    key: "tshirt",
    title: "TEDxAIIMS Kalyani T-Shirt",
    price: 499,
    tag: "Apparel",
    hasSize: true,
    features: ["Premium cotton fabric", "Unisex regular fit", "Official 2026 event print", "Ships within 7 business days"],
  },
  {
    key: "totebag",
    title: "TEDxAIIMS Kalyani Tote Bag",
    price: 299,
    tag: "Accessory",
    hasSize: false,
    features: ["Durable canvas fabric", "Reinforced handles", "Official 2026 event print", "Ships within 7 business days"],
  },
];

function ProductCard({ product, delay }) {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    // TODO: hook this up to your checkout / registration flow
    console.log("Buy merch:", {
      item: product.key,
      size: product.hasSize ? size : null,
      quantity,
      total: product.price * quantity,
    });
  };

  return (
    <ScrollReveal delay={delay}>
      <div className="bg-[#0f0f0f] border border-white/5 p-8 lg:p-10 h-full flex flex-col">
        <div className="aspect-square bg-white/5 border border-white/8 flex items-center justify-center overflow-hidden mb-8">
          <span className="text-white/15 text-[11px] tracking-[0.3em] uppercase text-center px-4">
            {product.title} — Preview
          </span>
        </div>

        <span className="text-[9px] tracking-[0.3em] uppercase font-medium block mb-3 text-ted-red">
          {product.tag}
        </span>

        <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
          {product.title}
        </h3>
        <p className="text-4xl font-black mb-6 text-ted-red">
          &#8377;{product.price}
        </p>

        <div className="w-full h-px bg-white/5 mb-6" />

        <ul className="space-y-3 mb-8">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check size={12} className="flex-shrink-0 text-ted-red" />
              <span className="text-white/45 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {product.hasSize && (
          <div className="mb-6">
            <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-3">Size</span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={
                    "w-11 h-11 text-xs font-semibold tracking-wide transition-all duration-200 border " +
                    (size === s
                      ? "bg-ted-red border-ted-red text-white"
                      : "bg-white/5 border-white/10 text-white/50 hover:border-white/25 hover:text-white")
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase block mb-3">Quantity</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="text-white font-semibold text-lg w-6 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ y: -2 }}
          type="button"
          onClick={handleBuy}
          className="mt-auto w-full bg-ted-red text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 flex items-center justify-center gap-3 font-semibold hover:bg-white hover:text-black transition-all duration-300"
        >
          Buy Now &#8226; &#8377;{product.price * quantity}
          <ArrowRight size={13} />
        </motion.button>
      </div>
    </ScrollReveal>
  );
}

export default function MerchSection() {
  return (
    <section id="merch" className="relative bg-black py-28 lg:py-40 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Wear The<br />
              <span className="text-ted-red">Uncharted</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Take home the official TEDxAIIMS Kalyani 2026 merch. Limited edition, made for explorers.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.key} product={product} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
