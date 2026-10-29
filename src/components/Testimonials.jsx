import Image from 'next/image';
import { Quote, Star, StarHalf } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

// Shared by the homepage section and the dedicated Reviews page, so the
// reviews and wording can never drift between the two.
export const TESTIMONIALS = [
  {
    quote: 'Simple to navigate and easy to understand.',
    name: 'Priya S.',
    location: 'Melbourne, VIC',
    image: '/reviews/reviewer-2.jpg',
    rating: 4.5,
  },
  {
    quote: 'Having market information organised in one place makes research much easier.',
    name: 'Alex M.',
    location: 'Sydney, NSW',
    image: '/reviews/reviewer-1.jpg',
    rating: 5,
  },
  {
    quote: 'The interface feels clean and straightforward.',
    name: 'Daniel K.',
    location: 'Brisbane, QLD',
    image: '/reviews/reviewer-3.jpg',
    rating: 4,
  },
];

function StarRating({ value, featured }) {
  const full = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const starClass = 'h-3.5 w-3.5 fill-amber-400 text-amber-400';
  const emptyClass = `h-3.5 w-3.5 ${featured ? 'text-white/30' : 'text-ink/20'}`;

  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, index) => (
        <Star key={`full-${index}`} className={starClass} aria-hidden="true" />
      ))}
      {hasHalf ? <StarHalf className={starClass} aria-hidden="true" /> : null}
      {Array.from({ length: empty }).map((_, index) => (
        <Star key={`empty-${index}`} className={emptyClass} aria-hidden="true" />
      ))}
      <span className={`ml-1.5 text-xs font-bold ${featured ? 'text-white' : 'text-ink'}`}>
        {value}
      </span>
      <span className="sr-only"> out of 5 stars</span>
    </span>
  );
}

export function TestimonialCard({ item, featured = false }) {
  return (
    <figure
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-7 shadow-card ${
        featured
          ? 'bg-gradient-to-br from-primary via-primary-deep to-secondary text-white md:-translate-y-2'
          : 'border border-ink/5 bg-white'
      }`}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
        />
      )}
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-xl ${
          featured ? 'bg-white/15 text-accent' : 'bg-accent/10 text-accent-dark'
        }`}
      >
        <Quote className="h-5 w-5" aria-hidden="true" />
      </span>
      <blockquote
        className={`relative mt-5 text-lg font-medium leading-relaxed ${
          featured ? 'text-white' : 'text-ink'
        }`}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption
        className={`relative mt-6 border-t pt-4 ${
          featured ? 'border-white/20' : 'border-ink/5'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src={item.image}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              sizes="40px"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-accent/20"
            />
            <div className="min-w-0">
              <p
                className={`truncate text-sm font-bold ${
                  featured ? 'text-white' : 'text-primary'
                }`}
              >
                {item.name}
              </p>
              <p className={`truncate text-xs ${featured ? 'text-white/70' : 'text-muted'}`}>
                {item.location}
              </p>
            </div>
          </div>
          <StarRating value={item.rating} featured={featured} />
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>
            What We Aim For
          </Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            The experience we&rsquo;re building toward
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Three qualities at the heart of the platform.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} className="h-full" delay={index * 120}>
              <TestimonialCard item={item} featured={index === 1} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
