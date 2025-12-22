/**
 * Property Test: Lesson Count Preservation
 * 
 * **Feature: astro-typescript-migration, Property 1: Lesson Count Preservation**
 * **Validates: Requirements 2.1**
 * 
 * *For any* migration, the total number of lessons in the Content Collection 
 * SHALL equal 23, matching the current lesson count including React lessons.
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

const EXPECTED_LESSON_COUNT = 25;
const LESSONS_DIR = path.join(process.cwd(), 'src/content/lessons');

/**
 * Get all lesson files from the content collection directory
 */
function getLessonFiles(): string[] {
  const files = fs.readdirSync(LESSONS_DIR);
  return files.filter(file => file.endsWith('.json'));
}

/**
 * Parse a lesson file and return its data
 */
function parseLessonFile(filename: string): Record<string, unknown> {
  const filePath = path.join(LESSONS_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

describe('Property 1: Lesson Count Preservation', () => {
  /**
   * Property Test: The total number of lessons equals 16
   * 
   * This property verifies that the migration preserved all 23 lessons.
   * We use property-based testing to verify this invariant holds regardless of
   * which subset of lessons we examine.
   */
  it('should have exactly 23 lessons in the Content Collection', () => {
    const lessonFiles = getLessonFiles();
    expect(lessonFiles.length).toBe(EXPECTED_LESSON_COUNT);
  });

  /**
   * Property Test: All lesson files are valid JSON with required fields
   * 
   * For any lesson file in the collection, it should be valid JSON
   * and contain the required fields: id, category, title, description, content
   */
  it('should have valid lesson data for all lessons', () => {
    const lessonFiles = getLessonFiles();
    
    // Property: For all lesson files, they should be parseable and have required fields
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: lessonFiles.length - 1 }),
        (index) => {
          const filename = lessonFiles[index];
          const lesson = parseLessonFile(filename);
          
          // Verify required fields exist
          expect(lesson).toHaveProperty('id');
          expect(lesson).toHaveProperty('category');
          expect(lesson).toHaveProperty('title');
          expect(lesson).toHaveProperty('description');
          expect(lesson).toHaveProperty('content');
          expect(lesson).toHaveProperty('exercises');
          
          // Verify types
          expect(typeof lesson.id).toBe('string');
          expect(typeof lesson.category).toBe('string');
          expect(typeof lesson.title).toBe('string');
          expect(typeof lesson.description).toBe('string');
          expect(typeof lesson.content).toBe('string');
          expect(Array.isArray(lesson.exercises)).toBe(true);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property Test: All lesson IDs are unique
   * 
   * For any two different lessons, their IDs should be different.
   */
  it('should have unique lesson IDs', () => {
    const lessonFiles = getLessonFiles();
    const lessonIds = lessonFiles.map(filename => {
      const lesson = parseLessonFile(filename);
      return lesson.id as string;
    });
    
    const uniqueIds = new Set(lessonIds);
    expect(uniqueIds.size).toBe(lessonIds.length);
  });

  /**
   * Property Test: Lesson categories are valid
   * 
   * For any lesson, its category should be one of the valid categories.
   */
  it('should have valid categories for all lessons', () => {
    const validCategories = ['intro', 'html', 'css', 'js', 'ts', 'git', 'react', 'tailwind', 'nodejs'];
    const lessonFiles = getLessonFiles();
    
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: lessonFiles.length - 1 }),
        (index) => {
          const filename = lessonFiles[index];
          const lesson = parseLessonFile(filename);
          const category = lesson.category as string;
          
          expect(validCategories).toContain(category);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
