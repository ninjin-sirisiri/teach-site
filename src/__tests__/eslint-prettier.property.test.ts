/**
 * Property Tests: ESLint & Prettierレッスン
 * 
 * **Feature: linter-formatter-lesson**
 * 
 * These tests verify the correctness properties defined in the design document
 * for the ESLint & Prettier lesson.
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';
import { navSections, TOTAL_LESSONS } from '../data/navigation';

const LESSONS_DIR = path.join(process.cwd(), 'src/content/lessons');

/**
 * Parse a lesson file and return its data
 */
function parseLessonFile(filename: string): Record<string, unknown> {
  const filePath = path.join(LESSONS_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Property 1: レッスンJSONの構造検証
 * 
 * **Feature: linter-formatter-lesson, Property 1: レッスンJSONの構造検証**
 * **Validates: Requirements 3.2**
 * 
 * *For any* レッスンJSONファイル, id、category、title、description、content、exercisesフィールドが
 * すべて存在し、適切な型を持つこと
 */
describe('Property 1: レッスンJSONの構造検証', () => {
  it('eslint-prettier.jsonファイルが存在すること', () => {
    const filePath = path.join(LESSONS_DIR, 'eslint-prettier.json');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('必須フィールドがすべて存在すること', () => {
    const lesson = parseLessonFile('eslint-prettier.json');
    
    expect(lesson).toHaveProperty('id');
    expect(lesson).toHaveProperty('category');
    expect(lesson).toHaveProperty('title');
    expect(lesson).toHaveProperty('description');
    expect(lesson).toHaveProperty('content');
    expect(lesson).toHaveProperty('exercises');
  });

  it('各フィールドが適切な型を持つこと', () => {
    const lesson = parseLessonFile('eslint-prettier.json');
    
    expect(typeof lesson.id).toBe('string');
    expect(typeof lesson.category).toBe('string');
    expect(typeof lesson.title).toBe('string');
    expect(typeof lesson.description).toBe('string');
    expect(typeof lesson.content).toBe('string');
    expect(Array.isArray(lesson.exercises)).toBe(true);
  });

  it('idとcategoryが正しい値であること', () => {
    const lesson = parseLessonFile('eslint-prettier.json');
    
    expect(lesson.id).toBe('eslint-prettier');
    expect(lesson.category).toBe('nodejs');
  });

  it('必須フィールドの構造検証（property-based）', () => {
    const lesson = parseLessonFile('eslint-prettier.json');
    const requiredFields = ['id', 'category', 'title', 'description', 'content', 'exercises'];
    
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: requiredFields.length - 1 }),
        (index) => {
          const field = requiredFields[index];
          expect(lesson).toHaveProperty(field);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});


/**
 * Property 2: 演習問題の構造検証
 * 
 * **Feature: linter-formatter-lesson, Property 2: 演習問題の構造検証**
 * **Validates: Requirements 4.1, 1.7**
 * 
 * *For any* 演習問題オブジェクト, question（文字列）、options（4要素の配列）、answer（0-3の整数）、
 * explanation（文字列）フィールドがすべて存在すること
 */
describe('Property 2: 演習問題の構造検証', () => {
  const lesson = parseLessonFile('eslint-prettier.json');
  const exercises = lesson.exercises as Array<Record<string, unknown>>;

  it('演習問題が3問以上あること', () => {
    expect(exercises.length).toBeGreaterThanOrEqual(3);
  });

  it('各演習問題に必須フィールドが存在すること', () => {
    exercises.forEach((exercise) => {
      expect(exercise).toHaveProperty('question');
      expect(exercise).toHaveProperty('options');
      expect(exercise).toHaveProperty('answer');
      expect(exercise).toHaveProperty('explanation');
    });
  });

  it('各演習問題のフィールドが適切な型を持つこと', () => {
    exercises.forEach((exercise) => {
      expect(typeof exercise.question).toBe('string');
      expect(Array.isArray(exercise.options)).toBe(true);
      expect(typeof exercise.answer).toBe('number');
      expect(typeof exercise.explanation).toBe('string');
    });
  });

  it('各演習問題の選択肢が4つあること', () => {
    exercises.forEach((exercise) => {
      const options = exercise.options as string[];
      expect(options.length).toBe(4);
    });
  });

  it('各演習問題の正解インデックスが有効範囲内であること', () => {
    exercises.forEach((exercise) => {
      const answer = exercise.answer as number;
      const options = exercise.options as string[];
      expect(answer).toBeGreaterThanOrEqual(0);
      expect(answer).toBeLessThan(options.length);
    });
  });

  it('演習問題の構造検証（property-based）', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: exercises.length - 1 }),
        (index) => {
          const exercise = exercises[index];
          
          // 必須フィールドの存在確認
          expect(exercise).toHaveProperty('question');
          expect(exercise).toHaveProperty('options');
          expect(exercise).toHaveProperty('answer');
          expect(exercise).toHaveProperty('explanation');
          
          // 型の確認
          expect(typeof exercise.question).toBe('string');
          expect(Array.isArray(exercise.options)).toBe(true);
          expect(typeof exercise.answer).toBe('number');
          expect(typeof exercise.explanation).toBe('string');
          
          // 選択肢が4つあること
          const options = exercise.options as string[];
          expect(options.length).toBe(4);
          
          // 正解インデックスが有効範囲内
          const answer = exercise.answer as number;
          expect(answer).toBeGreaterThanOrEqual(0);
          expect(answer).toBeLessThan(options.length);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * ナビゲーション統合テスト
 * 
 * **Validates: Requirements 2.1, 2.3**
 */
describe('ナビゲーション統合テスト', () => {
  it('ツールセクションにeslint-prettierが存在すること', () => {
    const toolsSection = navSections.find(section => section.title === 'ツール');
    expect(toolsSection).toBeDefined();
    
    const eslintPrettierItem = toolsSection?.items.find(item => item.id === 'eslint-prettier');
    expect(eslintPrettierItem).toBeDefined();
    expect(eslintPrettierItem?.icon).toBe('🔍');
    expect(eslintPrettierItem?.label).toBe('ESLint & Prettier');
    expect(eslintPrettierItem?.badge).toBe('nodejs');
  });

  it('TOTAL_LESSONSが26であること', () => {
    expect(TOTAL_LESSONS).toBe(26);
  });

  it('ナビゲーションの全レッスン数がTOTAL_LESSONSと一致すること', () => {
    const totalItems = navSections.reduce((sum, section) => sum + section.items.length, 0);
    expect(totalItems).toBe(TOTAL_LESSONS);
  });
});
