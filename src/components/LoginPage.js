import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import * as store from '../store.js';
import { IconLogoMark, IconCheck } from '../icons.js';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    store.username.value = username;
    store.isLogin.value = true;
    store.justLoggedOut.value = false;
  };

  return html`
    <div class="gx-login-screen">
      <div class="gx-login-box">
        <div class="gx-login-logo">
          <div class="gx-login-badge">
            <${IconLogoMark} size=${17} />
          </div>
          <div class="gx-login-title">Galapagos <span>CMS</span></div>
        </div>
        <div class="gx-login-subtitle">폐쇄망 CMS 콘솔에 로그인하세요</div>

        <div class="gx-card gx-login-card">
          <div class="card-body">
            ${store.justLoggedOut.value &&
            html`
              <div
                style="display:flex;align-items:center;gap:10px;background:var(--gx-success-tint);border-radius:.25rem;padding:11px 14px;margin-bottom:20px;font-size:12.5px;color:var(--gx-success-dark);"
              >
                <${IconCheck} size=${15} color="#4bbf73" />
                안전하게 로그아웃되었습니다.
              </div>
            `}

            <form onSubmit=${handleSubmit}>
              <div class="mb-3">
                <label class="form-label" for="login-username" style="font-size:12.5px;font-weight:600;color:var(--gx-text-muted);"
                  >아이디</label
                >
                <input
                  id="login-username"
                  type="text"
                  class="form-control"
                  style="font-size:13.5px;"
                  value=${username}
                  onInput=${(e) => setUsername(e.currentTarget.value)}
                  placeholder="사내 계정을 입력하세요"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="login-password" style="font-size:12.5px;font-weight:600;color:var(--gx-text-muted);"
                  >비밀번호</label
                >
                <input
                  id="login-password"
                  type="password"
                  class="form-control"
                  style="font-size:13.5px;"
                  value=${password}
                  onInput=${(e) => setPassword(e.currentTarget.value)}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="form-check" style="margin:0;">
                  <input class="form-check-input" type="checkbox" id="login-remember" />
                  <label class="form-check-label" for="login-remember" style="font-size:12.5px;color:var(--gx-text-subtle);"
                    >이 기기 기억하기</label
                  >
                </div>
                <a
                  href="#"
                  class="gx-login-forgot"
                  onClick=${(e) => e.preventDefault()}
                  >비밀번호 재설정</a
                >
              </div>
              <button type="submit" class="btn gx-btn-primary w-100" style="padding:.55rem;font-size:13.5px;">로그인</button>
            </form>
          </div>
        </div>

        <div class="gx-login-note">3회 이상 실패 시 계정이 15분간 잠깁니다.<br />© 2026 Galapagos CMS · 사내 배포 전용</div>
      </div>
    </div>
  `;
}
