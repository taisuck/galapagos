import { signal } from '@preact/signals';

export const isLogin = signal(false);
export const username = signal('');
export const justLoggedOut = signal(false);
export const sidebarExpanded = signal(true);
