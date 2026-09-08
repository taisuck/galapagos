import { html } from 'htm/preact';
import * as store from '../store.js';
import { IconUsers, IconFileText, IconLock } from '../icons.js';

const KPIS = [
  { label: '사용자', value: 12, icon: IconUsers, color: '#3b7ddd', tint: '#e8f1fc' },
  { label: '콘텐츠', value: 34, icon: IconFileText, color: '#2f8f56', tint: '#eaf6ee' },
  { label: '권한 그룹', value: 5, icon: IconLock, color: '#c98a1a', tint: '#fdf6e9' },
];

export default function DashboardPage() {
  return html`
    <div class="d-flex flex-column gap-3">
      <div class="gx-welcome">
        <div>
          <div class="gx-status-text">
            <span class="gx-status-dot"></span>
            정상 운영 중
          </div>
          <div style="font-size:1.05rem;font-weight:600;color:var(--gx-text);">다시 오셨네요, ${store.username.value || '사용자'}님</div>
        </div>
      </div>

      <div class="row g-3">
        ${KPIS.map(
          (k) => html`
            <div class="col-md-4" key=${k.label}>
              <div class="gx-kpi">
                <div class="gx-kpi-top">
                  <div class="gx-kpi-label">${k.label}</div>
                  <div class="gx-kpi-icon" style="background:${k.tint};">
                    <${k.icon} size=${18} color=${k.color} />
                  </div>
                </div>
                <div class="gx-kpi-value">${k.value}</div>
              </div>
            </div>
          `
        )}
      </div>
    </div>
  `;
}
