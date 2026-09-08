import { html } from 'htm/preact';
import * as store from '../store.js';
import { IconMenuLines, IconSearch, IconBell, IconChevronDown, IconLogOut } from '../icons.js';

const NOTICES = [
  { id: 1, title: '콘텐츠 승인 요청', desc: '공지사항 1건이 검토를 기다리고 있습니다.', time: '5분 전' },
  { id: 2, title: '권한 변경', desc: '이영희님의 권한이 Viewer로 변경되었습니다.', time: '1시간 전' },
  { id: 3, title: '시스템 점검 예정', desc: '이번 주 금요일 00:00 정기 점검이 예정되어 있습니다.', time: '어제' },
];

export default function Topbar({ title }) {
  const initial = (store.username.value || 'U').slice(0, 1).toUpperCase();

  const handleLogout = () => {
    store.isLogin.value = false;
    store.username.value = '';
    store.justLoggedOut.value = true;
  };

  return html`
    <header class="gx-topbar">
      <button
        type="button"
        class="gx-topbar-toggle"
        title="메뉴 접기/펼치기"
        onClick=${() => (store.sidebarExpanded.value = !store.sidebarExpanded.value)}
      >
        <${IconMenuLines} size=${20} />
      </button>

      <div class="gx-topbar-title">${title}</div>

      <label class="gx-search">
        <${IconSearch} size=${15} />
        <input type="text" placeholder="메뉴, 사용자, 콘텐츠 검색" />
        <kbd>⌘K</kbd>
      </label>

      <div class="gx-topbar-actions">
        <div class="dropdown">
          <button type="button" class="gx-icon-btn" data-bs-toggle="dropdown" aria-expanded="false">
            <${IconBell} size=${18} />
            <span class="gx-dot"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-end" style="width:320px;padding:0;border:1px solid var(--gx-border-light);box-shadow:0 .5rem 1rem rgba(0,0,0,.12);">
            <div style="padding:12px 16px;border-bottom:1px solid var(--gx-border-light);font-size:12.5px;font-weight:600;color:var(--gx-text);">
              알림 ${NOTICES.length}건
            </div>
            ${NOTICES.map(
              (n) => html`
                <div key=${n.id} style="padding:12px 16px;border-bottom:1px solid var(--gx-border-light);">
                  <div style="font-size:13px;font-weight:600;color:var(--gx-text);margin-bottom:2px;">${n.title}</div>
                  <div style="font-size:12px;color:var(--gx-text-subtle);margin-bottom:4px;">${n.desc}</div>
                  <div style="font-size:11px;color:var(--gx-text-faint);">${n.time}</div>
                </div>
              `
            )}
          </div>
        </div>

        <div class="dropdown">
          <button type="button" class="gx-user-menu" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="gx-user-avatar">${initial}</span>
            <span class="gx-user-name">${store.username.value}님</span>
            <${IconChevronDown} size=${14} color="#adb5bd" />
          </button>
          <div class="dropdown-menu dropdown-menu-end" style="border:1px solid var(--gx-border-light);box-shadow:0 .5rem 1rem rgba(0,0,0,.12);">
            <button
              type="button"
              class="dropdown-item d-flex align-items-center gap-2"
              style="font-size:13px;"
              onClick=${handleLogout}
            >
              <${IconLogOut} size=${15} />
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
}
