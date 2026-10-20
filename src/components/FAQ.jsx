'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import { FAQS } from '../data/faqs.js';

function FaqItem({ item, open, onToggle, index, heading: Heading = 'h3' }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card transition hover:border-ink/10">
      <Heading>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-[15px] font-bold text-primary sm:text-base">{item.q}</span>
          <span
            aria-hidden="true"
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
              open ? 'rotate-180 bg-accent text-white' : 'bg-canvas text-secondary'
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
      </Heading>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden" aria-hidden={!open}>
          <p className="px-6 pb-5 text-sm leading-relaxed text-steel sm:text-[15px]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * The shared, single-open accordion used on the homepage FAQ section and on the
 * dedicated FAQ page. All items start closed and open only when clicked.
 */
export function FaqAccordion({ headingLevel = 'h3' }) {
  // Every item starts closed; a panel opens only when the visitor clicks it.
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3.5">
      {FAQS.map((item, index) => (
        <FaqItem
          key={item.q}
          item={item}
          index={index}
          heading={headingLevel}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section overflow-hidden bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Intro column */}
        <div className="lg:col-span-5">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Everything you need to know before getting started with Fels Wertburg AI. Can&rsquo;t find what
            you&rsquo;re looking for? Our team is happy to help.
          </p>

          <a
            href="mailto:support@fels-wertburgai.com"
            className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-ink/5 bg-canvas/70 px-5 py-4 transition hover:border-secondary/30 hover:bg-canvas"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-primary">Still have questions?</span>
              <span className="block text-sm text-steel">support@fels-wertburgai.com</span>
            </span>
          </a>
        </div>

        {/* Accordion column */}
        <div className="lg:col-span-7">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
