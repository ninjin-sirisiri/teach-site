/**
 * 進捗管理スクリプト
 * LocalStorageを使用してレッスンの完了状態を管理する型安全なAPI
 * Requirements: 5.1, 5.2, 5.3, 5.5, 5.6, 5.7
 */

import {
  type ProgressData,
  getDefaultProgress,
  isValidProgressData,
} from '../types/progress';

/** LocalStorageのキー */
const STORAGE_KEY = 'webdevlearn_progress';

/** 総レッスン数（固定値） */
const TOTAL_LESSONS = 16;

/**
 * LocalStorageが利用可能かどうかを確認する
 * @returns LocalStorageが利用可能な場合はtrue
 */
function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/** インメモリフォールバック用のストレージ */
let memoryStorage: ProgressData | null = null;

/**
 * 進捗データを取得する
 * LocalStorageが利用できない場合はインメモリストレージを使用
 * @returns 進捗データ
 */
export function getProgress(): ProgressData {
  if (!isLocalStorageAvailable()) {
    return memoryStorage ?? getDefaultProgress();
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed: unknown = JSON.parse(data);
      if (isValidProgressData(parsed)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('進捗データの読み込みに失敗しました:', e);
  }
  return getDefaultProgress();
}


/**
 * 進捗データを保存する
 * LocalStorageが利用できない場合はインメモリストレージに保存
 * @param progress 保存する進捗データ
 */
export function saveProgress(progress: ProgressData): void {
  if (!isLocalStorageAvailable()) {
    memoryStorage = progress;
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('進捗データの保存に失敗しました:', e);
    // フォールバックとしてインメモリに保存
    memoryStorage = progress;
  }
}

/**
 * レッスンを完了済みとしてマークする
 * @param lessonId レッスンID
 */
export function markLessonComplete(lessonId: string): void {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
}

/**
 * レッスンの完了状態をトグルする
 * @param lessonId レッスンID
 * @returns 新しい完了状態（完了済みならtrue）
 */
export function toggleLessonComplete(lessonId: string): boolean {
  const progress = getProgress();
  const index = progress.completedLessons.indexOf(lessonId);
  
  if (index === -1) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
    return true;
  } else {
    progress.completedLessons.splice(index, 1);
    saveProgress(progress);
    return false;
  }
}

/**
 * レッスンが完了済みかどうかを確認する
 * @param lessonId レッスンID
 * @returns 完了済みならtrue
 */
export function isLessonComplete(lessonId: string): boolean {
  const progress = getProgress();
  return progress.completedLessons.includes(lessonId);
}

/**
 * 最後に訪問したレッスンを記録する
 * @param lessonId レッスンID
 */
export function setLastVisited(lessonId: string): void {
  const progress = getProgress();
  progress.lastVisited = lessonId;
  progress.lastVisitedAt = new Date().toISOString();
  saveProgress(progress);
}

/**
 * 最後に訪問したレッスンを取得する
 * @returns レッスンID（未訪問の場合はnull）
 */
export function getLastVisited(): string | null {
  const progress = getProgress();
  return progress.lastVisited;
}

/**
 * 完了したレッスンの数を取得する
 * @returns 完了したレッスン数
 */
export function getCompletedCount(): number {
  const progress = getProgress();
  return progress.completedLessons.length;
}

/**
 * 進捗率を計算する
 * @param totalLessons 総レッスン数（デフォルト: 16）
 * @returns 0-100のパーセンテージ
 */
export function getProgressPercentage(totalLessons: number = TOTAL_LESSONS): number {
  const completedCount = getCompletedCount();
  if (totalLessons === 0) return 0;
  return Math.round((completedCount / totalLessons) * 100);
}

/**
 * 進捗をリセットする
 */
export function resetProgress(): void {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem(STORAGE_KEY);
  }
  memoryStorage = null;
}

/**
 * 進捗データをJSON文字列にシリアライズする
 * @param progress 進捗データ
 * @returns JSON文字列
 */
export function serializeProgress(progress: ProgressData): string {
  return JSON.stringify(progress);
}

/**
 * JSON文字列から進捗データをデシリアライズする
 * @param json JSON文字列
 * @returns 進捗データ（無効な場合はnull）
 */
export function deserializeProgress(json: string): ProgressData | null {
  try {
    const parsed: unknown = JSON.parse(json);
    if (isValidProgressData(parsed)) {
      return parsed;
    }
  } catch {
    // パースエラーの場合はnullを返す
  }
  return null;
}
