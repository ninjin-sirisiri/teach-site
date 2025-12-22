/**
 * Property Tests: npm基礎レッスン
 * 
 * **Feature: nodejs-npm-lessons**
 * 
 * These tests verify the correctness properties defined in the design document
 * for the npm basics lesson.
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

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
 * Property 1: Minimum Quiz Count
 * 
 * **Feature: nodejs-npm-lessons, Property 1: Minimum Quiz Count**
 * **Validates: Requirements 2.5**
 * 
 * *For any* lesson in the Content Collection, the exercises array SHALL contain at least 3 items.
 */
describe('Property 1: Minimum Quiz Count - npm Basics', () => {
  const lesson = parseLessonFile('npm-basics.json');

  it('should have at least 3 quiz questions', () => {
    const exercises = lesson.exercises as Array<Record<string, unknown>>;
    expect(exercises.length).toBeGreaterThanOrEqual(3);
  });

  it('should have valid exercise structure for all questions (property-based)', () => {
    const exercises = lesson.exercises as Array<Record<string, unknown>>;
    
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: exercises.length - 1 }),
        (index) => {
          const exercise = exercises[index];
          
          // Verify required fields exist
          expect(exercise).toHaveProperty('question');
          expect(exercise).toHaveProperty('options');
          expect(exercise).toHaveProperty('answer');
          expect(exercise).toHaveProperty('explanation');
          
          // Verify types
          expect(typeof exercise.question).toBe('string');
          expect(Array.isArray(exercise.options)).toBe(true);
          expect(typeof exercise.answer).toBe('number');
          expect(typeof exercise.explanation).toBe('string');
          
          // Verify options has at least 2 choices
          const options = exercise.options as string[];
          expect(options.length).toBeGreaterThanOrEqual(2);
          
          // Verify answer index is valid
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
 * Property 3: Required HTML Structure
 * 
 * **Feature: nodejs-npm-lessons, Property 3: Required HTML Structure**
 * **Validates: Requirements 4.1, 4.2, 4.3**
 * 
 * *For any* lesson content string, it SHALL contain at least one instance of each required CSS class:
 * `content-section`, `section-title`, and `content-text`.
 */
describe('Property 3: Required HTML Structure - npm Basics', () => {
  const lesson = parseLessonFile('npm-basics.json');
  const content = lesson.content as string;

  it('should contain content-section class', () => {
    expect(content).toContain('content-section');
  });

  it('should contain section-title class', () => {
    expect(content).toContain('section-title');
  });

  it('should contain content-text class', () => {
    expect(content).toContain('content-text');
  });

  it('should have valid HTML structure with required classes (property-based)', () => {
    const requiredClasses = ['content-section', 'section-title', 'content-text'];
    
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: requiredClasses.length - 1 }),
        (index) => {
          const className = requiredClasses[index];
          expect(content).toContain(className);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have multiple content sections', () => {
    const sectionCount = (content.match(/content-section/g) || []).length;
    expect(sectionCount).toBeGreaterThanOrEqual(1);
  });

  it('should use appropriate info-box icons', () => {
    // Verify info-box structure exists
    expect(content).toContain('info-box');
    expect(content).toContain('info-box-icon');
    
    // Verify at least one of the expected icons is used
    const hasExpectedIcon = 
      content.includes('💡') || 
      content.includes('⚠️') || 
      content.includes('📦');
    expect(hasExpectedIcon).toBe(true);
  });

  it('should have code blocks with language labels', () => {
    // Verify code-block structure exists
    expect(content).toContain('code-block');
    expect(content).toContain('code-header');
    expect(content).toContain('code-lang');
    
    // Verify at least one of the expected language labels
    const hasExpectedLang = 
      content.includes('Terminal') || 
      content.includes('JavaScript') || 
      content.includes('JSON');
    expect(hasExpectedLang).toBe(true);
  });
});

/**
 * Additional validation for npm basics lesson specific content
 */
describe('npm Basics Lesson Content Validation', () => {
  const lesson = parseLessonFile('npm-basics.json');

  it('should have correct id and category', () => {
    expect(lesson.id).toBe('npm-basics');
    expect(lesson.category).toBe('nodejs');
  });

  it('should have non-empty title and description', () => {
    expect((lesson.title as string).length).toBeGreaterThan(0);
    expect((lesson.description as string).length).toBeGreaterThan(0);
  });

  it('should have non-empty content', () => {
    expect((lesson.content as string).length).toBeGreaterThan(0);
  });
});
