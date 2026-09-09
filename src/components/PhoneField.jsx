import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Country dataset: [ISO2, display name, dial code]                    */
/* Flag images load from flagcdn.com by ISO2 (same CDN the reference   */
/* sites use - lightweight, no local image assets needed).             */
/* ------------------------------------------------------------------ */

export const COUNTRIES = [
  // Oceania
  ['AU', 'Australia', 61],
  ['NZ', 'New Zealand', 64],
  ['FJ', 'Fiji', 679],
  ['PG', 'Papua New Guinea', 675],
  ['WS', 'Samoa', 685],
  ['TO', 'Tonga', 676],
  ['VU', 'Vanuatu', 678],
  ['SB', 'Solomon Islands', 677],
  ['NC', 'New Caledonia', 687],
  ['PF', 'French Polynesia', 689],
  // Asia
  ['CN', 'China', 86],
  ['HK', 'Hong Kong', 852],
  ['MO', 'Macau', 853],
  ['TW', 'Taiwan', 886],
  ['JP', 'Japan', 81],
  ['KR', 'South Korea', 82],
  ['IN', 'India', 91],
  ['PK', 'Pakistan', 92],
  ['BD', 'Bangladesh', 880],
  ['LK', 'Sri Lanka', 94],
  ['NP', 'Nepal', 977],
  ['AF', 'Afghanistan', 93],
  ['MV', 'Maldives', 960],
  ['BT', 'Bhutan', 975],
  ['MM', 'Myanmar', 95],
  ['TH', 'Thailand', 66],
  ['VN', 'Vietnam', 84],
  ['KH', 'Cambodia', 855],
  ['LA', 'Laos', 856],
  ['ID', 'Indonesia', 62],
  ['MY', 'Malaysia', 60],
  ['SG', 'Singapore', 65],
  ['PH', 'Philippines', 63],
  ['BN', 'Brunei', 673],
  ['TL', 'East Timor', 670],
  ['MN', 'Mongolia', 976],
  ['KZ', 'Kazakhstan', 7],
  ['UZ', 'Uzbekistan', 998],
  ['KG', 'Kyrgyzstan', 996],
  ['TJ', 'Tajikistan', 992],
  ['TM', 'Turkmenistan', 993],
  ['GE', 'Georgia', 995],
  ['AM', 'Armenia', 374],
  ['AZ', 'Azerbaijan', 994],
  // Europe
  ['GB', 'United Kingdom', 44],
  ['IE', 'Ireland', 353],
  ['FR', 'France', 33],
  ['DE', 'Germany', 49],
  ['IT', 'Italy', 39],
  ['ES', 'Spain', 34],
  ['PT', 'Portugal', 351],
  ['NL', 'Netherlands', 31],
  ['BE', 'Belgium', 32],
  ['LU', 'Luxembourg', 352],
  ['CH', 'Switzerland', 41],
  ['AT', 'Austria', 43],
  ['DK', 'Denmark', 45],
  ['NO', 'Norway', 47],
  ['SE', 'Sweden', 46],
  ['FI', 'Finland', 358],
  ['IS', 'Iceland', 354],
  ['PL', 'Poland', 48],
  ['CZ', 'Czechia', 420],
  ['SK', 'Slovakia', 421],
  ['HU', 'Hungary', 36],
  ['RO', 'Romania', 40],
  ['BG', 'Bulgaria', 359],
  ['GR', 'Greece', 30],
  ['RU', 'Russia', 7],
  ['UA', 'Ukraine', 380],
  ['BY', 'Belarus', 375],
  ['LT', 'Lithuania', 370],
  ['LV', 'Latvia', 371],
  ['EE', 'Estonia', 372],
  ['SI', 'Slovenia', 386],
  ['HR', 'Croatia', 385],
  ['RS', 'Serbia', 381],
  ['BA', 'Bosnia & Herzegovina', 387],
  ['AL', 'Albania', 355],
  ['MK', 'North Macedonia', 389],
  ['ME', 'Montenegro', 382],
  ['MD', 'Moldova', 373],
  ['CY', 'Cyprus', 357],
  ['MT', 'Malta', 356],
  ['TR', 'Turkey', 90],
  // Middle East & Africa
  ['AE', 'United Arab Emirates', 971],
  ['SA', 'Saudi Arabia', 966],
  ['QA', 'Qatar', 974],
  ['BH', 'Bahrain', 973],
  ['KW', 'Kuwait', 965],
  ['OM', 'Oman', 968],
  ['JO', 'Jordan', 962],
  ['LB', 'Lebanon', 961],
  ['IQ', 'Iraq', 964],
  ['IL', 'Israel', 972],
  ['EG', 'Egypt', 20],
  ['MA', 'Morocco', 212],
  ['TN', 'Tunisia', 216],
  ['DZ', 'Algeria', 213],
  ['LY', 'Libya', 218],
  ['ET', 'Ethiopia', 251],
  ['KE', 'Kenya', 254],
  ['TZ', 'Tanzania', 255],
  ['UG', 'Uganda', 256],
  ['NG', 'Nigeria', 234],
  ['GH', 'Ghana', 233],
  ['ZA', 'South Africa', 27],
  ['ZW', 'Zimbabwe', 263],
  ['ZM', 'Zambia', 260],
  ['MZ', 'Mozambique', 258],
  ['BW', 'Botswana', 267],
  ['NA', 'Namibia', 264],
  ['CM', 'Cameroon', 237],
  ['CI', 'Ivory Coast', 225],
  ['SN', 'Senegal', 221],
  ['MU', 'Mauritius', 230],
  ['RW', 'Rwanda', 250],
  ['SD', 'Sudan', 249],
  ['SO', 'Somalia', 252],
  // Americas
  ['US', 'United States', 1],
  ['CA', 'Canada', 1],
  ['MX', 'Mexico', 52],
  ['BR', 'Brazil', 55],
  ['AR', 'Argentina', 54],
  ['CL', 'Chile', 56],
  ['CO', 'Colombia', 57],
  ['PE', 'Peru', 51],
  ['VE', 'Venezuela', 58],
  ['EC', 'Ecuador', 593],
  ['BO', 'Bolivia', 591],
  ['PY', 'Paraguay', 595],
  ['UY', 'Uruguay', 598],
  ['CR', 'Costa Rica', 506],
  ['PA', 'Panama', 507],
  ['GT', 'Guatemala', 502],
  ['HN', 'Honduras', 504],
  ['SV', 'El Salvador', 503],
  ['NI', 'Nicaragua', 505],
  ['BZ', 'Belize', 501],
  ['CU', 'Cuba', 53],
  ['HT', 'Haiti', 509],
  ['DO', 'Dominican Republic', 1],
  ['JM', 'Jamaica', 1],
  ['TT', 'Trinidad & Tobago', 1],
  ['GY', 'Guyana', 592],
  ['SR', 'Suriname', 597],
];

const KNOWN = new Map(COUNTRIES.map(([iso]) => [iso, true]));
/** True when the ISO code exists in the picker list. */
export function isKnownCountry(iso) {
  return typeof iso === 'string' && KNOWN.has(iso.toUpperCase());
}

function flagUrl(iso) {
  return `https://flagcdn.com/w20/${iso.toLowerCase()}.png`;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

/**
 * International phone input: a flag + dial-code prefix button and a
 * searchable country listbox, matching the pattern used by the client's
 * reference landing pages. The number <input> itself keeps `name`/`id`
 * so it plugs straight into the existing form state.
 */
export default function PhoneField({
  id,
  name,
  iso,
  onIsoChange,
  value,
  onChange,
  onBlur,
  invalid = false,
  describedBy,
  placeholder,
  autoComplete = 'tel',
  maxLength = 20,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(-1); // row highlighted by arrows / hover
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);

  const selected = COUNTRIES.find(([c]) => c === iso) || COUNTRIES[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      ([c, name, dial]) =>
        name.toLowerCase().includes(q) ||
        c.toLowerCase().includes(q) ||
        String(dial).includes(q.replace(/^\+/, '')),
    );
  }, [query]);

  const activeOptionId =
    open && activeIdx >= 0 && results[activeIdx] ? `${id}-opt-${results[activeIdx][0]}` : undefined;

  // Close on outside click; Escape closes and hands focus back to the flag
  // trigger so keyboard users are never left stranded in the closed list.
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        if (triggerRef.current) triggerRef.current.focus();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Whenever the list opens or the filter changes, put the highlight on the
  // current country (or the first match) so ArrowDown has a sensible start.
  useEffect(() => {
    if (!open) return;
    const i = results.findIndex(([c]) => c === iso);
    setActiveIdx(i >= 0 ? i : results.length ? 0 : -1);
  }, [open, query]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep the highlighted row visible inside the scrollable list.
  useEffect(() => {
    if (!open || activeIdx < 0 || !listRef.current) return;
    const node = listRef.current.children[activeIdx];
    if (node && typeof node.scrollIntoView === 'function') {
      node.scrollIntoView({ block: 'nearest' });
    }
  }, [open, activeIdx]);

  const selectCountry = (code) => {
    onIsoChange(code);
    setOpen(false);
    setQuery('');
    setActiveIdx(-1);
    // Return focus to the number field so the visitor can keep typing.
    const tel = document.getElementById(id);
    if (tel && typeof tel.focus === 'function') {
      requestAnimationFrame(() => tel.focus());
    }
  };

  const moveHighlight = (direction) => {
    if (!results.length) return;
    setActiveIdx((i) => {
      if (i === -1) return direction === 'down' ? 0 : results.length - 1;
      return direction === 'down' ? Math.min(results.length - 1, i + 1) : Math.max(0, i - 1);
    });
  };

  const onSearchKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      moveHighlight('down');
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      moveHighlight('up');
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const code =
        (activeIdx >= 0 && results[activeIdx] && results[activeIdx][0]) ||
        (results.length && results[0][0]);
      if (code) selectCountry(code);
    } else if (event.key === 'Home') {
      event.preventDefault();
      if (results.length) setActiveIdx(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      if (results.length) setActiveIdx(results.length - 1);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <div
        className={`flex items-stretch overflow-hidden rounded-xl border bg-white shadow-[0_1px_2px_rgba(16,42,67,0.04)] transition focus-within:border-secondary ${
          invalid ? 'border-red-400 focus-within:border-red-400' : 'border-ink/15'
        }`}
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={`${id}-country-list`}
          aria-label={`Country: ${selected[1]} (+${selected[2]})`}
          onKeyDown={(event) => {
            if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !open) {
              event.preventDefault();
              setOpen(true);
            }
          }}
          className="flex shrink-0 items-center gap-1.5 border-r border-ink/10 bg-canvas/60 pl-3 pr-2.5 transition hover:bg-canvas"
        >
          <img
            src={flagUrl(selected[0])}
            alt=""
            width="20"
            height="15"
            loading="lazy"
            className="h-[15px] w-5 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(16,42,67,0.08)]"
            onError={(event) => {
              event.currentTarget.style.visibility = 'hidden';
            }}
          />
          <span className="text-sm font-semibold tabular-nums text-ink">+{selected[2]}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        <input
          id={id}
          name={name}
          type="tel"
          autoComplete={autoComplete}
          required
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className="w-full min-w-0 rounded-r-xl border-0 bg-transparent px-3.5 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none"
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
          <div className="flex items-center gap-2 border-b border-ink/5 px-3 py-2.5">
            <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <input
              type="search"
              role="combobox"
              aria-expanded="true"
              aria-controls={`${id}-country-list`}
              aria-activedescendant={activeOptionId}
              aria-label="Search countries"
              placeholder="Search country or code"
              autoComplete="off"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onSearchKeyDown}
              className="w-full border-0 bg-transparent py-1 text-sm text-ink placeholder:text-muted/60 focus:outline-none"
            />
          </div>

          <ul
            ref={listRef}
            id={`${id}-country-list`}
            role="listbox"
            aria-label="Countries"
            className="max-h-60 overflow-y-auto p-1.5"
          >
            {results.map(([code, countryName, dial], idx) => {
              const active = code === iso;
              const highlighted = idx === activeIdx;
              return (
                <li
                  key={code}
                  id={`${id}-opt-${code}`}
                  role="option"
                  aria-selected={active}
                  onClick={() => selectCountry(code)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`flex w-full cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition ${
                    highlighted
                      ? active
                        ? 'bg-accent/10 text-primary ring-1 ring-inset ring-accent/30'
                        : 'bg-canvas ring-1 ring-inset ring-ink/10'
                      : active
                        ? 'bg-accent/10 text-primary'
                        : 'text-ink hover:bg-canvas'
                  }`}
                >
                  <img
                    src={flagUrl(code)}
                    alt=""
                    width="20"
                    height="15"
                    loading="lazy"
                    className="h-[15px] w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(16,42,67,0.08)]"
                    onError={(event) => {
                      event.currentTarget.style.visibility = 'hidden';
                    }}
                  />
                  <span className="min-w-0 flex-1 truncate text-sm">{countryName}</span>
                  <span className="shrink-0 text-xs font-medium tabular-nums text-muted">
                    +{dial}
                  </span>
                  {active && <Check className="h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />}
                </li>
              );
            })}
            {results.length === 0 && (
              <li className="px-2.5 py-3 text-sm text-muted" role="status">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
