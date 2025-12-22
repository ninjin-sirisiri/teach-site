/**
 * 進捗管理関連の型定義
 * Requirements: 10.3
 */

/**
 * 進捗データのインターフェース
 * LocalStorageに保存される学習進捗情報を表す
 */
export interface ProgressData {
  /** 完了したレッスンIDの配列 */
  completedLessons: string[];
  /** 最後に訪問したレッスンID（未訪問の場合はnull） */
  lastVisited: string | null;
  /** 最後に訪問した日時（ISO 8601形式、未訪問の場合はnull） */
  lastVisitedAt: string | null;
  /** 学習を開始した日時（ISO 8601形式） */
  startedAt: string;
}

/**
 * デフォルトの進捗データを生成する
 * @returns 初期状態のProgressData
 */
export function getDefaultProgress(): ProgressData {
  return {
    completedLessons: [],
    lastVisited: null,
    lastVisitedAt: null,
    startedAt: new Date().toISOString(),
  };
}

/**
 * 進捗データが有効かどうかを検証する
 * @param data 検証対象のデータ
 * @returns 有効なProgressDataの場合はtrue
 */
export function isValidProgressData(data: unknown): data is ProgressData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  return (
    Array.isArray(obj.completedLessons) &&
    obj.completedLessons.every((item) => typeof item === 'string') &&
    (obj.lastVisited === null || typeof obj.lastVisited === 'string') &&
    (obj.lastVisitedAt === null || typeof obj.lastVisitedAt === 'string') &&
    typeof obj.startedAt === 'string'
  );
}
