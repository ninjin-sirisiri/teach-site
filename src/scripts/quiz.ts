/**
 * クイズロジックスクリプト
 * 回答判定、フィードバック表示ロジック
 * Requirements: 6.2, 6.3, 6.4
 */

/**
 * クイズの回答結果
 */
export interface QuizResult {
  /** 正解かどうか */
  isCorrect: boolean;
  /** 選択されたインデックス */
  selectedIndex: number;
  /** 正解のインデックス */
  correctIndex: number;
}

/**
 * 回答をチェックする
 * Requirements: 6.2
 * 
 * @param selectedIndex - ユーザーが選択した選択肢のインデックス
 * @param correctIndex - 正解の選択肢のインデックス
 * @returns クイズの回答結果
 */
export function checkAnswer(selectedIndex: number, correctIndex: number): QuizResult {
  return {
    isCorrect: selectedIndex === correctIndex,
    selectedIndex,
    correctIndex,
  };
}

/**
 * フィードバックメッセージを生成する
 * Requirements: 6.3, 6.4
 * 
 * @param isCorrect - 正解かどうか
 * @param explanation - 解説文
 * @returns フィードバックメッセージ
 */
export function generateFeedbackMessage(isCorrect: boolean, explanation: string): string {
  if (isCorrect) {
    return `✅ 正解！ ${explanation}`;
  }
  return `❌ 不正解... ${explanation}`;
}

/**
 * フィードバックのCSSクラスを取得する
 * Requirements: 6.3, 6.4
 * 
 * @param isCorrect - 正解かどうか
 * @returns CSSクラス名の配列
 */
export function getFeedbackClasses(isCorrect: boolean): string[] {
  const classes = ['show'];
  classes.push(isCorrect ? 'correct' : 'wrong');
  return classes;
}

/**
 * 選択肢のCSSクラスを取得する
 * Requirements: 6.3, 6.4
 * 
 * @param isCorrect - 正解かどうか
 * @returns CSSクラス名
 */
export function getOptionClass(isCorrect: boolean): string {
  return isCorrect ? 'correct' : 'wrong';
}
