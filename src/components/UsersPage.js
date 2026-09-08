import { html } from 'htm/preact';
import { useMemo, useState } from 'preact/hooks';
import { IconUsers } from '../icons.js';

const USERS = [
  { id: 1, name: '홍길동', account: 'gildong.hong', role: 'Admin' },
  { id: 2, name: '김철수', account: 'chulsoo.kim', role: 'Editor' },
  { id: 3, name: '이영희', account: 'younghee.lee', role: 'Viewer' },
];

const ROLE_STYLE = {
  Admin: { color: '#3b7ddd', bg: '#e8f1fc' },
  Editor: { color: '#2f8f56', bg: '#eaf6ee' },
  Viewer: { color: '#6c757d', bg: '#e9ecef' },
};

export default function UsersPage() {
  const [nameFilter, setNameFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('전체 권한');

  const rows = useMemo(
    () =>
      USERS.filter(
        (u) =>
          u.name.includes(nameFilter) &&
          (roleFilter === '전체 권한' || u.role === roleFilter)
      ),
    [nameFilter, roleFilter]
  );

  return html`
    <div class="gx-card">
      <div class="gx-card-header">
        <div style="flex:1;min-width:180px;">
          <div class="gx-card-title">사용자 권한 관리</div>
          <div class="gx-card-subtitle">전체 ${USERS.length}명</div>
        </div>
        <input
          class="form-control form-control-sm"
          placeholder="이름 검색"
          style="width:190px;font-size:13px;"
          value=${nameFilter}
          onInput=${(e) => setNameFilter(e.currentTarget.value)}
        />
        <select
          class="form-select form-select-sm"
          style="width:140px;font-size:13px;"
          value=${roleFilter}
          onChange=${(e) => setRoleFilter(e.currentTarget.value)}
        >
          <option>전체 권한</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
        <button type="button" class="btn btn-sm gx-btn-primary">사용자 추가</button>
      </div>
      <div class="table-responsive">
        <table class="table table-hover gx-table" style="margin:0;font-size:13px;min-width:520px;">
          <thead>
            <tr>
              <th>사용자</th>
              <th>계정</th>
              <th>권한</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((user) => {
              const style = ROLE_STYLE[user.role];
              return html`
                <tr key=${user.id}>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                      <span class="gx-avatar-sm"><${IconUsers} size=${13} /></span>
                      <span style="font-weight:500;color:var(--gx-text);">${user.name}</span>
                    </div>
                  </td>
                  <td style="color:var(--gx-text-subtle);">${user.account}</td>
                  <td>
                    <span
                      style="font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:10px;color:${style.color};background:${style.bg};"
                      >${user.role}</span
                    >
                  </td>
                </tr>
              `;
            })}
            ${rows.length === 0 &&
            html`
              <tr>
                <td colspan="3" style="text-align:center;color:var(--gx-text-faint);padding:32px;">검색 결과가 없습니다.</td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
