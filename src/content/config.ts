/**
 * Content Collection設定
 * Zodスキーマでレッスンデータを検証
 * Requirements: 2.2, 2.3
 */
import { defineCollection, z } from 'astro:content';

/**
 * レッスンカテゴリの列挙型スキーマ
 * Requirements: 2.4
 */
const lessonCategoryEnum = z.enum([
  'intro',
  'html',
  'css',
  'js',
  'ts',
  'git',
  'react',
  'tailwind',
  'nodejs',
]);

/**
 * 演習問題のスキーマ
 * Requirements: 10.2
 */
const exerciseSchema = z.object({
  /** 問題文 */
  question: z.string(),
  /** 選択肢の配列 */
  options: z.array(z.string()),
  /** 正解の選択肢のインデックス（0始まり） */
  answer: z.number().int().min(0),
  /** 解説文 */
  explanation: z.string(),
});

/**
 * レッスンコレクションの定義
 * Requirements: 2.2, 10.1
 */
const lessonsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    /** レッスンの一意識別子（URLスラッグとしても使用） */
    id: z.string(),
    /** レッスンのカテゴリ */
    category: lessonCategoryEnum,
    /** レッスンのタイトル */
    title: z.string(),
    /** レッスンの説明文 */
    description: z.string(),
    /** レッスンの本文コンテンツ（HTML形式） */
    content: z.string(),
    /** 演習問題の配列 */
    exercises: z.array(exerciseSchema).default([]),
  }),
});

export const collections = {
  lessons: lessonsCollection,
};
