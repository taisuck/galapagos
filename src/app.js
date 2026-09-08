import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import * as store from './store.js';
import LoginPage from './components/LoginPage.js';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import DashboardPage from './components/DashboardPage.js';
import UsersPage from './components/UsersPage.js';
import ContentsPage from './components/ContentsPage.js';

const PAGES = {
  dashboard: { title: '대시보드', Component: DashboardPage },
  users: { title: '사용자 권한 관리', Component: UsersPage },
  contents: { title: '콘텐츠 편집', Component: ContentsPage },
};

export default function App() {
  const [page, setPage] = useState('dashboard');

  if (!store.isLogin.value) {
    return html`<${LoginPage} />`;
  }

  const { title, Component } = PAGES[page];

  return html`
    <div class="gx-shell">
      <${Sidebar} page=${page} setPage=${setPage} />
      <div class="gx-main">
        <${Topbar} title=${title} />
        <main class="gx-content">
          <${Component} />
        </main>
      </div>
    </div>
  `;
}
