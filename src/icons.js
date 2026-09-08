import { html } from 'htm/preact';

const base = (size, color, children) => html`
  <svg
    width=${size}
    height=${size}
    viewBox="0 0 24 24"
    fill="none"
    stroke=${color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${children}
  </svg>
`;

export const IconLogoMark = ({ size = 16, color = '#fff', withDots = false }) =>
  base(size, color, html`
    <rect x="3" y="4" width="18" height="7" rx="1.5" />
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    ${withDots && html`<path d="M7 7.5h.01M7 16.5h.01" />`}
  `);

export const IconGrid = ({ size = 20, color = 'currentColor' }) =>
  base(size, color, html`
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  `);

export const IconUsers = ({ size = 20, color = 'currentColor' }) =>
  base(size, color, html`
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  `);

export const IconFileText = ({ size = 20, color = 'currentColor' }) =>
  base(size, color, html`
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  `);

export const IconLock = ({ size = 20, color = 'currentColor' }) =>
  base(size, color, html`
    <rect x="4" y="10" width="16" height="10" rx="1.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  `);

export const IconMenuLines = ({ size = 20, color = 'currentColor' }) =>
  base(size, color, html`<path d="M4 6h16M4 12h16M4 18h16" />`);

export const IconSearch = ({ size = 15, color = 'currentColor' }) =>
  base(size, color, html`
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  `);

export const IconBell = ({ size = 18, color = 'currentColor' }) =>
  base(size, color, html`
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 01-3.4 0" />
  `);

export const IconChevronDown = ({ size = 14, color = 'currentColor' }) =>
  base(size, color, html`<path d="M6 9l6 6 6-6" />`);

export const IconLogOut = ({ size = 16, color = 'currentColor' }) =>
  base(size, color, html`
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  `);

export const IconCheck = ({ size = 15, color = 'currentColor' }) =>
  base(size, color, html`<path d="M20 6L9 17l-5-5" />`);
