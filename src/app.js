import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import * as store from './store.js';

const MENUS = [
  { key: 'dashboard', label: '대시보드' },
  { key: 'users', label: '사용자 권한 관리' },
  { key: 'contents', label: '콘텐츠 편집' },
];

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    store.username.value = username;
    store.isLogin.value = true;
  };

  return html`
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card shadow-sm" style="width: 360px;">
        <div class="card-body p-4">
          <h4 class="card-title text-center mb-4">Galapagos CMS</h4>
          <form onSubmit=${handleSubmit}>
            <div class="mb-3">
              <label class="form-label" for="login-username">아이디</label>
              <input
                id="login-username"
                type="text"
                class="form-control"
                value=${username}
                onInput=${(e) => setUsername(e.currentTarget.value)}
                placeholder="아이디를 입력하세요"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label" for="login-password">비밀번호</label>
              <input
                id="login-password"
                type="password"
                class="form-control"
                value=${password}
                onInput=${(e) => setPassword(e.currentTarget.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">로그인</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function DashboardPage() {
  return html`
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card text-bg-primary">
          <div class="card-body">
            <h5 class="card-title">사용자</h5>
            <p class="card-text fs-3">12</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-bg-success">
          <div class="card-body">
            <h5 class="card-title">콘텐츠</h5>
            <p class="card-text fs-3">34</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-bg-secondary">
          <div class="card-body">
            <h5 class="card-title">권한 그룹</h5>
            <p class="card-text fs-3">5</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function UsersPage() {
  const users = [
    { id: 1, name: '홍길동', role: 'Admin' },
    { id: 2, name: '김철수', role: 'Editor' },
    { id: 3, name: '이영희', role: 'Viewer' },
  ];

  return html`
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>권한</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(
          (user) => html`
            <tr key=${user.id}>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td><span class="badge text-bg-info">${user.role}</span></td>
            </tr>
          `
        )}
      </tbody>
    </table>
  `;
}

function ContentsPage() {
  const [title, setTitle] = useState('');

  return html`
    <form class="row g-3" onSubmit=${(e) => e.preventDefault()}>
      <div class="col-12">
        <label class="form-label" for="content-title">제목</label>
        <input
          id="content-title"
          type="text"
          class="form-control"
          value=${title}
          onInput=${(e) => setTitle(e.currentTarget.value)}
          placeholder="콘텐츠 제목을 입력하세요"
        />
      </div>
      <div class="col-12">
        <label class="form-label" for="content-body">내용</label>
        <textarea id="content-body" class="form-control" rows="6"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  `;
}

export default function App() {
  const [page, setPage] = useState('dashboard');

  if (!store.isLogin.value) {
    return html`<${LoginPage} />`;
  }

  const pages = {
    dashboard: DashboardPage,
    users: UsersPage,
    contents: ContentsPage,
  };
  const Page = pages[page];

  return html`
    <div class="d-flex flex-column vh-100">
      <nav class="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
        <span class="navbar-brand mb-0 h1">Galapagos CMS</span>
        <div class="d-flex align-items-center gap-3">
          <span class="text-white">${store.username.value}님</span>
          <button
            type="button"
            class="btn btn-outline-light btn-sm"
            onClick=${() => {
              store.isLogin.value = false;
              store.username.value = '';
            }}
          >
            로그아웃
          </button>
        </div>
      </nav>
      <div class="d-flex flex-grow-1 overflow-hidden">
        <aside class="bg-light border-end p-3" style="width: 220px;">
          <ul class="nav nav-pills flex-column gap-1">
            ${MENUS.map(
              (menu) => html`
                <li class="nav-item" key=${menu.key}>
                  <a
                    href="#"
                    class="nav-link ${page === menu.key ? 'active' : ''}"
                    onClick=${(e) => {
                      e.preventDefault();
                      setPage(menu.key);
                    }}
                  >
                    ${menu.label}
                  </a>
                </li>
              `
            )}
          </ul>
        </aside>
        <main class="flex-grow-1 p-4 overflow-auto"><${Page} /></main>
      </div>
    </div>
  `;
}
