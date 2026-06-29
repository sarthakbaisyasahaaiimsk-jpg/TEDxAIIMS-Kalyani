import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'What is TEDx?',
    answer: 'TEDx is a program of locally organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.',
  },
  {
    question: 'Who can attend TEDxAIIMSKalyani?',
    answer: 'TEDxAIIMSKalyani is open to students, medical professionals, researchers, entrepreneurs, technologists, and anyone passionate about ideas and innovation. Registration is required and seats are limited to ensure an intimate, high-quality experience.',
  },
  {
    question: 'How are speakers selected?',
    answer: 'Speakers are curated through a rigorous process that evaluates the novelty of their idea, their expertise, and their ability to deliver a compelling talk. We look for individuals whose work represents genuinely "uncharted" territory in their field.',
  },
  {
    question: 'Is registration required?',
    answer: 'Yes, registration is mandatory. Due to the nature of TEDx events, attendance is capped. We recommend registering early as seats fill up quickly. Students can apply for free student passes while they last.',
  },
  {
    question: 'Are there sponsorship opportunities?',
    answer: 'Absolutely. We offer multiple partnership tiers including Title Partner, Innovation Partner, Healthcare Partner, and Community Partner. Each tier comes with unique benefits and visibility. Reach out via the Partner Inquiry form for a detailed sponsorship deck.',
  },
  {
    question: 'What should I expect at the event?',
    answer: 'A full day of inspiring talks, interactive workshops, networking sessions, and innovation exhibits. You will hear from 12+ speakers across healthcare, technology, research, and entrepreneurship. Meals, refreshments, and a certificate of attendance are included.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">10 — FAQ</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-14">
            Questions <span className="text-white/15">&</span><br />Answers
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 bg-[#0a0a0a] px-6 data-[state=open]:border-ted-red/20 data-[state=open]:bg-[#0f0f0f] transition-all duration-300"
              >
                <AccordionTrigger className="text-white/80 text-sm lg:text-base font-medium tracking-tight hover:text-white hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/40 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}