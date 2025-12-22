/**
 * ナビゲーション関連の型定義
 * Requirements: 10.4
 */

import type { LessonCategory } from './lesson';

/**
 * ナビゲーションアイテムのインターフェース
 * サイドバーに表示される個々のリンクを表す
 */
export interface NavItem {
  /** レッスンID（リンク先として使用） */
  id: string;
  /** 表示アイコン（絵文字） */
  icon: string;
  /** 表示ラベル */
  label: string;
  /** カテゴリバッジ */
  badge: LessonCategory;
}

/**
 * ナビゲーションセクションのインターフェース
 * サイドバーのセクション（グループ）を表す
 */
export interface NavSection {
  /** セクションのタイトル */
  title: string;
  /** セクション内のナビゲーションアイテム */
  items: NavItem[];
}
