import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Loader2, ShieldCheck } from 'lucide-react';
import { useLegal } from './LegalModal.jsx';
import PhoneField, { isKnownCountry, COUNTRIES } from './PhoneField.jsx';

/* ------------------------------------------------------------------ */
/* Lead-backend integration                                            */
/*                                                                     */
/* Every RegistrationForm (homepage + contact page) posts the same      */
/* JSON payload to the platform endpoint. The offer always signs up     */
/* with a fixed platform-assigned password; the endpoint resolves the   */
/* visitor's real IP server-side, so we send ours only as a fallback.   */
/* ------------------------------------------------------------------ */
const SIGNUP_ENDPOINT = 'https://theunion-ai.com/dorovio-au.php';
const OFFER_NAME = 'Fels-Wertburg-Site';
const ACCOUNT_PASSWORD = 'Lh23s3';

/* ------------------------------------------------------------------ */
/* Country defaults                                                    */
/* ------------------------------------------------------------------ */

/* The flag always starts on Australia (the site's target market) and is
   only re-pointed at the visitor's IP country once this AU baseline has
   been visible for a beat, so "start on AU" is actually observed. */
const MIN_AU_VISIBLE_MS = 1600;

/* Dummy sample numbers shown in the empty phone field, one per common
   country. Written without the trunk "0" (the dial code is displayed in its
   own prefix). Falls back to a neutral numeric sample for other countries. */
const PHONE_EXAMPLE = {
  AU: '412 345 678', NZ: '21 234 5678', GB: '7911 123456', IE: '85 123 4567',
  US: '202 555 0134', CA: '416 555 0134', MX: '55 1234 5678', BR: '11 98765 4321',
  AR: '11 2345 6789', CL: '9 1234 5678', CO: '300 123 4567', PE: '912 345 678',
  FR: '6 12 34 56 78', DE: '151 2345 6789', IT: '312 345 6789', ES: '612 345 678',
  PT: '912 345 678', NL: '6 1234 5678', BE: '470 12 34 56', CH: '79 123 45 67',
  AT: '664 123 4567', SE: '70 123 45 67', NO: '412 34 567', DK: '20 12 34 56',
  FI: '40 123 4567', PL: '512 345 678', GR: '691 234 5678', RO: '712 345 678',
  CZ: '601 123 456', HU: '30 123 4567', TR: '532 123 4567', RU: '912 345 67 89',
  UA: '67 123 4567', IN: '98765 43210', PK: '300 1234567', BD: '1712 345678',
  LK: '71 234 5678', NP: '9812 345678', AF: '70 123 4567', CN: '138 0013 8000',
  HK: '9123 4567', TW: '912 345 678', JP: '90 1234 5678', KR: '10 1234 5678',
  SG: '8123 4567', MY: '12 345 6789', TH: '81 234 5678', VN: '91 234 5678',
  ID: '812 3456 789', PH: '917 123 4567', AE: '50 123 4567', SA: '55 123 4567',
  QA: '3312 3456', KW: '5123 4567', IL: '50 123 4567', EG: '10 1234 5678',
  ZA: '71 234 5678', NG: '801 234 5678', KE: '712 345678', GH: '20 123 4567',
  MA: '612 345 678', ET: '91 123 4567',
};
const PHONE_EXAMPLE_FALLBACK = '123 456 789';

/**
 * Because the country dial code is shown in its own prefix (e.g. "+61"), a
 * leading trunk "0" typed at the start of the national number is redundant.
 * Drop it as soon as a digit follows, so "0412 345 678" becomes "412 345 678".
 */
function normalizePhoneInput(value) {
  return value.replace(/^\s*0(?=\d)/, '');
}

/* Fallback heuristic for when the geo service is unreachable:
   browser timezone -> ISO2. Australia is the site's default audience. */
const TZ_COUNTRY = {
  'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU',
  'Australia/Adelaide': 'AU', 'Australia/Perth': 'AU', 'Australia/Darwin': 'AU',
  'Australia/Hobart': 'AU', 'Australia/Lord_Howe': 'AU', 'Australia/Eucla': 'AU',
  'Pacific/Auckland': 'NZ', 'Pacific/Chatham': 'NZ', 'Pacific/Fiji': 'FJ',
  'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN', 'Asia/Colombo': 'LK', 'Asia/Dhaka': 'BD',
  'Asia/Kathmandu': 'NP', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA',
  'Asia/Kuwait': 'KW', 'Asia/Muscat': 'OM', 'Asia/Jerusalem': 'IL', 'Asia/Beirut': 'LB',
  'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
  'Europe/Madrid': 'ES', 'Europe/Rome': 'IT', 'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE',
  'Europe/Zurich': 'CH', 'Europe/Vienna': 'AT', 'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK', 'Europe/Helsinki': 'FI', 'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ',
  'Europe/Athens': 'GR', 'Europe/Bucharest': 'RO', 'Europe/Istanbul': 'TR', 'Europe/Kyiv': 'UA',
  'Europe/Moscow': 'RU',
  'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
  'America/Los_Angeles': 'US', 'America/Phoenix': 'US', 'America/Anchorage': 'US',
  'Pacific/Honolulu': 'US', 'America/Toronto': 'CA', 'America/Vancouver': 'CA',
  'America/Mexico_City': 'MX', 'America/Sao_Paulo': 'BR', 'America/Argentina/Buenos_Aires': 'AR',
  'America/Santiago': 'CL', 'America/Bogota': 'CO', 'America/Lima': 'PE',
  'Asia/Shanghai': 'CN', 'Asia/Hong_Kong': 'HK', 'Asia/Taipei': 'TW', 'Asia/Seoul': 'KR',
  'Asia/Tokyo': 'JP', 'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Jakarta': 'ID',
  'Asia/Bangkok': 'TH', 'Asia/Manila': 'PH', 'Asia/Ho_Chi_Minh': 'VN',
  'Africa/Johannesburg': 'ZA', 'Africa/Nairobi': 'KE', 'Africa/Lagos': 'NG', 'Africa/Cairo': 'EG',
};

/* ------------------------------------------------------------------ */
/* Validation helpers                                                  */
/* ------------------------------------------------------------------ */

function cleanPhone(value) {
  return value.replace(/[\s\-()]/g, '');
}

/**
 * Send the number in E.164 (e.g. +61412345678 for an Australian mobile).
 * The dial code comes from the same country list the picker shows, so the
 * posted value always carries the country even though the input only holds
 * the national number (its leading "0" is dropped on input).
 */
function toE164(iso, national) {
  const entry = COUNTRIES.find(([c]) => c === iso);
  const dial = entry ? entry[2] : 61;
  const digits = cleanPhone(national);
  return digits ? `+${dial}${digits}` : '';
}

/**
 * The platform's error messages carry an internal reference like
 * "We cannot register you at this time. (#7yuhnq)". The code is noise for a
 * visitor, so strip the trailing " (#...)" before showing the message.
 */
function cleanServerMessage(message) {
  return String(message).replace(/\s*\(#[A-Za-z0-9]+\)\s*$/, '').trim();
}

/**
 * Lead-form style, deliberately light validation: the dial code lives in
 * the flag prefix, so we only sanity-check that a plausible national number
 * was typed (5–15 digits). Works for every country the picker offers, which
 * is what makes the IP-based flag sensible.
 */
function validatePhone(value) {
  const phone = value.trim();
  if (!phone) return 'Please enter your phone number.';
  const digits = cleanPhone(phone);
  if (!/^\+?\d{5,15}$/.test(digits)) {
    return 'Enter a valid phone number.';
  }
  return '';
}

function validateName(value) {
  if (!value || !value.trim()) return 'Please enter your name.';
  if (value.trim().length > 60) return 'Name must be under 60 characters.';
  return '';
}

function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Please enter your email address.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return 'Please enter a valid email address, e.g. name@example.com';
  }
  return '';
}

const FIELDS = {
  firstName: { validate: validateName },
  lastName: { validate: validateName },
  email: { validate: validateEmail },
  phone: { validate: validatePhone },
};

const initialValues = { firstName: '', lastName: '', email: '', phone: '', agree: false };

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function RegistrationForm() {
  const { openLegal } = useLegal();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting
  const [serverError, setServerError] = useState('');

  // Dial-code country for the phone field. Defaults to Australia (the site's
  // target market); refined from the visitor's IP when possible.
  const [country, setCountry] = useState('AU');
  const countryRef = useRef('AU');
  countryRef.current = country;

  // Lets the async IP lookup stay hands-off once the user has started typing.
  const phoneHasValueRef = useRef(false);
  phoneHasValueRef.current = Boolean(values.phone && values.phone.trim());

  // Visitor IP, captured from the same geo lookup that picks the dial code.
  // The backend re-derives the real IP anyway; this is just a payload hint.
  const ipRef = useRef('');

  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const controller = new AbortController();
    const abortTimer = setTimeout(() => controller.abort(), 4500);
    const mountedAt = Date.now();

    const choose = (iso) => {
      if (cancelled || phoneHasValueRef.current) return;
      const code = typeof iso === 'string' ? iso.toUpperCase() : '';
      if (!code || code === 'AU' || !isKnownCountry(code)) return;
      // Keep Australia (the default) on screen first, then re-point at the
      // visitor's real country so the switch is visible but not jarring.
      const delay = Math.max(0, MIN_AU_VISIBLE_MS - (Date.now() - mountedAt));
      timers.push(
        setTimeout(() => {
          if (!cancelled && !phoneHasValueRef.current) setCountry(code);
        }, delay),
      );
    };

    const fallbackByTimezone = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone && TZ_COUNTRY[timezone]) choose(TZ_COUNTRY[timezone]);
      } catch {
        /* keep the AU default */
      }
    };

    fetch('https://ipwho.is/', { signal: controller.signal })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(new Error('geo request failed')),
      )
      .then((data) => {
        if (data && typeof data.ip === 'string') ipRef.current = data.ip;
        const iso = data && typeof data.country_code === 'string' ? data.country_code : '';
        choose(iso);
      })
      .catch(fallbackByTimezone)
      .finally(() => clearTimeout(abortTimer));

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(abortTimer);
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const validateField = (name, value) =>
    name === 'agree' ? (value ? '' : '') : FIELDS[name].validate(value, countryRef.current);

  const handleChange = (name) => (event) => {
    let value = name === 'agree' ? event.target.checked : event.target.value;
    if (name === 'phone' && typeof value === 'string') value = normalizePhoneInput(value);
    if (serverError) setServerError('');
    setValues((prev) => ({ ...prev, [name]: value }));
    // Live validation once a field has been touched.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values[name]) }));
  };

  const handleCountryChange = (iso) => {
    setCountry(iso);
    // Keep an in-flight phone error in sync with the newly chosen dial code.
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(values.phone, iso) }));
    }
  };

  const validateAll = () => {
    const nextErrors = {};
    Object.entries(FIELDS).forEach(([name, def]) => {
      nextErrors[name] = def.validate(values[name], countryRef.current);
    });
    if (!values.agree) nextErrors.agree = 'You must agree to the Privacy Policy and Terms & Conditions to continue.';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');
    const nextErrors = validateAll();
    setErrors(nextErrors);
    setTouched({ firstName: true, lastName: true, email: true, phone: true, agree: true });

    if (Object.values(nextErrors).some((message) => message)) return;

    setStatus('submitting');

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email.trim(),
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          password: ACCOUNT_PASSWORD,
          ip: ipRef.current,
          phone: toE164(country, values.phone),
          offerName: OFFER_NAME,
        }),
      });

      // The endpoint answers HTTP 200 with { status: 'error' | 'success' } even
      // for validation/registration failures, so read the body, not the code.
      const body = await response.json().catch(() => ({}));

      if (!response.ok || (body && body.status && body.status !== 'success')) {
        const rawMessage = body && typeof body.message === 'string' ? body.message : '';
        setServerError(
          rawMessage
            ? cleanServerMessage(rawMessage)
            : 'Something went wrong. Please check your details and try again.',
        );
        setStatus('idle');
        return;
      }

      window.location.assign('/thank-you');
    } catch {
      // Network failure / CORS / server unreachable — keep the visitor on page
      // with an honest message rather than pretending the sign-up worked.
      setServerError('We couldn’t reach the registration service just now. Please try again in a moment.');
      setStatus('idle');
    }
  };

  const inputClass = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-[0_1px_2px_rgba(16,42,67,0.04)] transition placeholder:text-muted/60 focus:border-secondary focus:outline-none ${
      errors[name] && touched[name]
        ? 'border-red-400 focus:border-red-400'
        : 'border-ink/15 focus:border-secondary'
    }`;

  const errorText = (name) =>
    errors[name] && touched[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-600">
        {errors[name]}
      </p>
    ) : null;

  /* ------------------------- Form state ------------------------- */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-primary">Create your account</h3>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Secure sign-up
        </span>
      </div>
      <p className="mt-1.5 text-sm text-steel">
        We only ask for basic contact details to begin. Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">asterisk</span> are required.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-ink">
            First Name <span className="text-accent-dark" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={60}
            placeholder="Jordan"
            value={values.firstName}
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            aria-invalid={Boolean(errors.firstName && touched.firstName)}
            aria-describedby={errors.firstName && touched.firstName ? 'firstName-error' : undefined}
            className={inputClass('firstName')}
          />
          {errorText('firstName')}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-ink">
            Last Name <span className="text-accent-dark" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            maxLength={60}
            placeholder="Clarke"
            value={values.lastName}
            onChange={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            aria-invalid={Boolean(errors.lastName && touched.lastName)}
            aria-describedby={errors.lastName && touched.lastName ? 'lastName-error' : undefined}
            className={inputClass('lastName')}
          />
          {errorText('lastName')}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email Address <span className="text-accent-dark" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            aria-invalid={Boolean(errors.email && touched.email)}
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            className={inputClass('email')}
          />
          {errorText('email')}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone Number <span className="text-accent-dark" aria-hidden="true">*</span>
          </label>
          <PhoneField
            id="phone"
            name="phone"
            iso={country}
            onIsoChange={handleCountryChange}
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            invalid={Boolean(errors.phone && touched.phone)}
            describedBy={errors.phone && touched.phone ? 'phone-error' : undefined}
            placeholder={PHONE_EXAMPLE[country] || PHONE_EXAMPLE_FALLBACK}
          />
          {errorText('phone')}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="agree" className="flex cursor-pointer items-start gap-3 text-sm text-steel">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            required
            checked={values.agree}
            onChange={handleChange('agree')}
            onBlur={handleBlur('agree')}
            aria-invalid={Boolean(errors.agree && touched.agree)}
            aria-describedby={errors.agree && touched.agree ? 'agree-error' : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-ink/25 text-secondary accent-secondary"
          />
          <span>
            I agree to the{' '}
            <button
              type="button"
              onClick={() => openLegal('privacy')}
              className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 transition hover:decoration-secondary"
            >
              Privacy Policy
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => openLegal('terms')}
              className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 transition hover:decoration-secondary"
            >
              Terms &amp; Conditions
            </button>
            .
          </span>
        </label>
        {errors.agree && touched.agree ? (
          <p id="agree-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.agree}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Creating your account&hellip;
          </>
        ) : (
          'Get Started'
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        By registering you confirm you are aged 18 or over. We never ask for credit card details or
        passwords during sign-up. You can review how we handle your information in our{' '}
        <button
          type="button"
          onClick={() => openLegal('privacy')}
          className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:decoration-secondary"
        >
          Privacy Policy
        </button>
        .
      </p>
    </form>
  );
}
