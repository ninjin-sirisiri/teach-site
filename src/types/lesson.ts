/**
 * レッスン関連の型定義
 * Requirements: 10.1, 10.2, 2.2, 2.4
 */

/**
 * レッスンのカテゴリ
 * 各レッスンが属する技術分野を表す
 */
export type LessonCategory =
  | 'intro'
  | 'html'
  | 'css'
  | 'js'
  | 'ts'
  | 'git'
  | 'react'
  | 'tailwind';

/**
 * 演習問題のインターフェース
 * 各レッスンに含まれるクイズ形式の問題を表す
 */
export interface Exercise {
  /** 問題文 */
  question: string;
  /** 選択肢の配列 */
  options: string[];
  /** 正解の選択肢のインデックス（0始まり） */
  answer: number;
  /** 解説文 */
  explanation: string;
}

/**
 * レッスンのインターフェース
 * 学習コンテンツの単位を表す
 */
export interface Lesson {
  /** レッスンの一意識別子（URLスラッグとしても使用） */
  id: string;
  /** レッスンのカテゴリ */
  category: LessonCategory;
  /** レッスンのタイトル */
  title: string;
  /** レッスンの説明文 */
  description: string;
  /** レッスンの本文コンテンツ（HTML形式） */
  content: string;
  /** 演習問題の配列 */
  exercises: Exercise[];
}

/**
 * カテゴリの表示ラベルを取得する
 * @param category レッスンカテゴリ
 * @returns 表示用のラベル文字列
 */
export function getCategoryLabel(category: LessonCategory): string {
  const labels: Record<LessonCategory, string> = {
    intro: '入門',
    html: 'HTML',
    css: 'CSS',
    js: 'JS',
    ts: 'TS',
    git: 'Git',
    react: 'React',
    tailwind: 'TW',
  };
  return labels[category];
}
