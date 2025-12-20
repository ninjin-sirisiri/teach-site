/**
 * 学習進捗管理モジュール
 * LocalStorageを使用してレッスンの完了状態を管理します。
 */

const STORAGE_KEY = "webdevlearn_progress";

/**
 * 進捗データを取得する
 * @returns {Object} 進捗データ { completedLessons: string[], lastVisited: string }
 */
export function getProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn("進捗データの読み込みに失敗しました:", e);
  }
  return {
    completedLessons: [],
    lastVisited: null,
    startedAt: new Date().toISOString(),
  };
}

/**
 * 進捗データを保存する
 * @param {Object} progress 進捗データ
 */
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("進捗データの保存に失敗しました:", e);
  }
}

/**
 * レッスンを完了済みとしてマークする
 * @param {string} lessonId レッスンID
 */
export function markLessonComplete(lessonId) {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
}

/**
 * レッスンの完了状態をトグルする
 * @param {string} lessonId レッスンID
 * @returns {boolean} 新しい完了状態
 */
export function toggleLessonComplete(lessonId) {
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
 * @param {string} lessonId レッスンID
 * @returns {boolean} 完了済みならtrue
 */
export function isLessonComplete(lessonId) {
  const progress = getProgress();
  return progress.completedLessons.includes(lessonId);
}

/**
 * 最後に訪問したレッスンを記録する
 * @param {string} lessonId レッスンID
 */
export function setLastVisited(lessonId) {
  const progress = getProgress();
  progress.lastVisited = lessonId;
  progress.lastVisitedAt = new Date().toISOString();
  saveProgress(progress);
}

/**
 * 最後に訪問したレッスンを取得する
 * @returns {string|null} レッスンID
 */
export function getLastVisited() {
  const progress = getProgress();
  return progress.lastVisited;
}

/**
 * 完了したレッスンの数を取得する
 * @returns {number} 完了したレッスン数
 */
export function getCompletedCount() {
  const progress = getProgress();
  return progress.completedLessons.length;
}

/**
 * 進捗率を計算する
 * @param {number} totalLessons 総レッスン数
 * @returns {number} 0-100のパーセンテージ
 */
export function getProgressPercentage(totalLessons) {
  const completedCount = getCompletedCount();
  if (totalLessons === 0) return 0;
  return Math.round((completedCount / totalLessons) * 100);
}

/**
 * 進捗をリセットする
 */
export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
