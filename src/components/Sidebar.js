import { html } from 'htm/preact';
import * as store from '../store.js';
import { IconLogoMark, IconGrid, IconUsers, IconFileText } from '../icons.js';

const NAV_ITEMS = [
  { key: 'dashboard', label: '대시보드', icon: IconGrid },
  { key: 'users', label: '사용자 권한 관리', icon: IconUsers },
  { key: 'contents', label: '콘텐츠 편집', icon: IconFileText },
];

export default function Sidebar({ page, setPage }) {
  const expanded = store.sidebarExpanded.value;

  return html`
    <aside class="gx-sidebar ${expanded ? '' : 'is-collapsed'}">
      <div class="gx-sidebar-logo">
        <div class="gx-sidebar-badge">
          <${IconLogoMark} size=${16} withDots=${true} />
        </div>
        <div class="gx-sidebar-brand">Galapagos <span>CMS</span></div>
      </div>

      <div class="gx-sidebar-section">운영</div>
      <nav class="gx-nav">
        ${NAV_ITEMS.map(
          (item) => html`
            <button
              type="button"
              key=${item.key}
              class="gx-nav-link ${page === item.key ? 'is-active' : ''}"
              title=${item.label}
              onClick=${() => setPage(item.key)}
            >
              <span class="gx-nav-icon"><${item.icon} size=${18} /></span>
              <span class="gx-nav-label">${item.label}</span>
            </button>
          `
        )}
      </nav>

      <div class="gx-sidebar-footer">
        <div class="gx-sidebar-update">
          <div class="gx-sidebar-update-title">컴포넌트 라이브러리</div>
          <div class="gx-sidebar-update-desc">On-Premise 환경에서 바로 사용할 수 있는 F/E 템플릿입니다.</div>
        </div>
      </div>
    </aside>
  `;
}
