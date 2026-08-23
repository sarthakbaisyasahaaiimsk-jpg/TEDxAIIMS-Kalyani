import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import tshirtImage from "@/assets/tshirt.PNG";
import totebagImage from "@/assets/bag.jpeg";

// TODO: Replace with your actual Google Form link for merch orders.
const MERCH_FORM_URL = "https://forms.gle/TEaguApUVh4PanF46";

const products = [
  {
    key: "tshirt",
    title: "TEDxAIIMS Kalyani T-Shirt",
    price: "TBA",
    tag: "Apparel",
    image: tshirtImage,
  },
  {
    key: "totebag",
    title: "TEDxAIIMS Kalyani Tote Bag",
    price: "TBA",
    tag: "Accessory",
    image: totebagImage,
  },
];

function ProductCard({ product, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="aspect-square bg-white/5 border border-white/8 overflow-hidden mb-8">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-[9px] tracking-[0.3em] uppercase font-medium block mb-3 text-ted-red">
          {product.tag}
        </span>

        <h3 className="text-white font-bold text-2xl tracking-tight mb-1">
          {product.title}
        </h3>
        <p className="text-4xl font-black mb-8 text-ted-red">
          &#8377;{product.price}
        </p>

        <motion.a
          href={MERCH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="mt-auto w-full bg-ted-red text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 flex items-center justify-center gap-3 font-semibold hover:bg-white hover:text-black transition-all duration-300"
        >
          Buy Now
          <ArrowRight size={13} />
        </motion.a>
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
