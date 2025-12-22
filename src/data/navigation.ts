/**
 * ナビゲーション設定
 * サイドバーに表示するレッスンのナビゲーション構造を定義
 * Requirements: 3.5, 10.1, 10.2, 10.3
 */

import type { NavSection } from '../types/navigation';

/**
 * ナビゲーションセクションの定義
 * 23レッスンを8つのセクションに分類
 */
export const navSections: NavSection[] = [
  {
    title: '入門',
    items: [
      { id: 'web-intro', icon: '🌐', label: 'Web開発入門', badge: 'intro' },
      { id: 'modern-web', icon: '🚀', label: 'モダンWeb開発', badge: 'intro' },
    ],
  },
  {
    title: 'HTML',
    items: [
      { id: 'html-intro', icon: '📖', label: 'HTMLとは', badge: 'html' },
      { id: 'html-basics', icon: '📄', label: 'HTML構文', badge: 'html' },
    ],
  },
  {
    title: 'CSS',
    items: [
      { id: 'css-intro', icon: '📖', label: 'CSSとは', badge: 'css' },
      { id: 'css-basics', icon: '🎨', label: 'CSS構文', badge: 'css' },
    ],
  },
  {
    title: 'JavaScript',
    items: [
      { id: 'js-intro', icon: '📖', label: 'JavaScriptとは', badge: 'js' },
      { id: 'js-basics', icon: '⚡', label: 'JavaScript構文', badge: 'js' },
      { id: 'js-advanced', icon: '🔥', label: 'JavaScript応用', badge: 'js' },
    ],
  },
  {
    title: 'TypeScript',
    items: [
      { id: 'ts-intro', icon: '📖', label: 'TypeScriptとは', badge: 'ts' },
      { id: 'ts-basics', icon: '📘', label: 'TypeScript基礎', badge: 'ts' },
    ],
  },
  {
    title: 'ツール',
    items: [
      { id: 'git-intro', icon: '🔧', label: 'Git入門', badge: 'git' },
      { id: 'github-basics', icon: '🐙', label: 'GitHubの基本', badge: 'git' },
      { id: 'deploy-guide', icon: '🚀', label: 'デプロイガイド', badge: 'intro' },
    ],
  },
  {
    title: 'React',
    items: [
      { id: 'react-intro', icon: '📖', label: 'Reactとは', badge: 'react' },
      { id: 'react-jsx', icon: '✨', label: 'JSX構文', badge: 'react' },
      { id: 'react-components', icon: '🧩', label: 'コンポーネント', badge: 'react' },
      { id: 'react-state', icon: '📊', label: '状態管理', badge: 'react' },
      { id: 'react-effects', icon: '🔄', label: '副作用', badge: 'react' },
      { id: 'react-events', icon: '🖱️', label: 'イベント処理', badge: 'react' },
      { id: 'react-hooks', icon: '🪝', label: 'Hooks応用', badge: 'react' },
      { id: 'react-patterns', icon: '🏗️', label: '実践パターン', badge: 'react' },
    ],
  },
  {
    title: 'その他',
    items: [
      { id: 'tailwind-basics', icon: '🌊', label: 'Tailwind CSS', badge: 'tailwind' },
    ],
  },
];

/**
 * 全レッスンIDのリストを取得
 * @returns レッスンIDの配列
 */
export function getAllLessonIds(): string[] {
  return navSections.flatMap(section => section.items.map(item => item.id));
}

/**
 * レッスンIDからナビゲーションアイテムを取得
 * @param id レッスンID
 * @returns NavItem または undefined
 */
export function getNavItemById(id: string) {
  for (const section of navSections) {
    const item = section.items.find(item => item.id === id);
    if (item) return item;
  }
  return undefined;
}

/**
 * 全レッスン数を取得
 * 23レッスン: 入門(2) + HTML(2) + CSS(2) + JavaScript(3) + TypeScript(2) + ツール(3) + React(8) + その他(1)
 */
export const TOTAL_LESSONS = 23;
