/**
 * Property Tests: React Lessons Expansion
 * 
 * **Feature: react-lessons-expansion**
 * 
 * These tests verify the correctness properties defined in the design document
 * for the React lessons expansion feature.
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

const LESSONS_DIR = path.join(process.cwd(), 'src/content/lessons');

/**
 * Expected React lesson IDs as defined in Requirements 1.1
 */
const EXPECTED_REACT_LESSON_IDS = [
  'react-intro',
  'react-jsx',
  'react-components',
  'react-state',
  'react-effects',
  'react-events',
  'react-hooks',
  'react-patterns',
];

/**
 * Parse a lesson file and return its data
 */
function parseLessonFile(filename: string): Record<string, unknown> {
  const filePath = path.join(LESSONS_DIR, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Get all React lesson files
 */
function getReactLessonFiles(): string[] {
  const files = fs.readdirSync(LESSONS_DIR);
  return files.filter(file => file.startsWith('react-') && file.endsWith('.json'));
}


/**
 * Property 2: Lesson Structure Completeness
 * 
 * **Feature: react-lessons-expansion, Property 2: Lesson Structure Completeness**
 * **Validates: Requirements 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2**
 * 
 * *For any* React lesson JSON file, the file SHALL contain all required fields
 * (id, category, title, description, content, exercises) and the exercises array
 * SHALL have at least 3 items.
 */
describe('Property 2: Lesson Structure Completeness', () => {
  const reactLessonFiles = getReactLessonFiles();

  it('should have all 8 expected React lessons', () => {
    const lessonIds = reactLessonFiles.map(file => {
      const lesson = parseLessonFile(file);
      return lesson.id as string;
    });

    for (const expectedId of EXPECTED_REACT_LESSON_IDS) {
      expect(lessonIds).toContain(expectedId);
    }
    expect(reactLessonFiles.length).toBe(8);
  });

  it('should have valid structure for all React lessons (property-based)', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: reactLessonFiles.length - 1 }),
        (index) => {
          const filename = reactLessonFiles[index];
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

          // Verify category is 'react'
          expect(lesson.category).toBe('react');

          // Verify at least 3 quiz questions (Requirements 2.2, 3.2, etc.)
          const exercises = lesson.exercises as Array<Record<string, unknown>>;
          expect(exercises.length).toBeGreaterThanOrEqual(3);

          // Verify each exercise has required structure
          for (const exercise of exercises) {
            expect(exercise).toHaveProperty('question');
            expect(exercise).toHaveProperty('options');
            expect(exercise).toHaveProperty('answer');
            expect(exercise).toHaveProperty('explanation');
            expect(typeof exercise.question).toBe('string');
            expect(Array.isArray(exercise.options)).toBe(true);
            expect(typeof exercise.answer).toBe('number');
            expect(typeof exercise.explanation).toBe('string');
          }

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have unique lesson IDs among React lessons', () => {
    const lessonIds = reactLessonFiles.map(file => {
      const lesson = parseLessonFile(file);
      return lesson.id as string;
    });

    const uniqueIds = new Set(lessonIds);
    expect(uniqueIds.size).toBe(lessonIds.length);
  });

  it('should have non-empty content for all React lessons', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: reactLessonFiles.length - 1 }),
        (index) => {
          const filename = reactLessonFiles[index];
          const lesson = parseLessonFile(filename);

          // Content should be non-empty
          expect((lesson.content as string).length).toBeGreaterThan(0);
          
          // Title and description should be non-empty
          expect((lesson.title as string).length).toBeGreaterThan(0);
          expect((lesson.description as string).length).toBeGreaterThan(0);

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});


/**
 * Property 3: Navigation Contains All React Lessons
 * 
 * **Feature: react-lessons-expansion, Property 3: Navigation Contains All React Lessons**
 * **Validates: Requirements 10.1, 10.3**
 * 
 * *For any* React lesson ID, that ID SHALL appear in the navigation data
 * under a section with title "React".
 */
describe('Property 3: Navigation Contains All React Lessons', () => {
  // Import navigation data using dynamic import
  const navigationPath = path.join(process.cwd(), 'src/data/navigation.ts');
  const navigationContent = fs.readFileSync(navigationPath, 'utf-8');
  
  // Extract navSections from the file content
  function extractNavSections(): Array<{ title: string; items: Array<{ id: string }> }> {
    // Parse the React section from navigation.ts
    const reactSectionMatch = navigationContent.match(
      /title:\s*['"]React['"][\s\S]*?items:\s*\[([\s\S]*?)\]/
    );
    
    if (!reactSectionMatch) {
      throw new Error('Could not find React section in navigation.ts');
    }
    
    // Extract all IDs from the React section
    const idMatches = reactSectionMatch[1].matchAll(/id:\s*['"]([^'"]+)['"]/g);
    const reactItems = Array.from(idMatches).map(match => ({ id: match[1] }));
    
    return [{ title: 'React', items: reactItems }];
  }
  
  // Extract TOTAL_LESSONS from the file
  function extractTotalLessons(): number {
    const match = navigationContent.match(/TOTAL_LESSONS\s*=\s*(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }
  
  const navSections = extractNavSections();
  const TOTAL_LESSONS = extractTotalLessons();

  it('should have a React section in navigation', () => {
    const reactSection = navSections.find(
      (section: { title: string }) => section.title === 'React'
    );
    expect(reactSection).toBeDefined();
  });

  it('should contain all React lesson IDs in navigation (property-based)', () => {
    const reactSection = navSections.find(
      (section: { title: string }) => section.title === 'React'
    );
    expect(reactSection).toBeDefined();
    
    const navReactIds = reactSection!.items.map(
      (item: { id: string }) => item.id
    );

    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: EXPECTED_REACT_LESSON_IDS.length - 1 }),
        (index) => {
          const expectedId = EXPECTED_REACT_LESSON_IDS[index];
          expect(navReactIds).toContain(expectedId);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have exactly 8 React lessons in navigation', () => {
    const reactSection = navSections.find(
      (section: { title: string }) => section.title === 'React'
    );
    expect(reactSection).toBeDefined();
    expect(reactSection!.items.length).toBe(8);
  });

  it('should have correct TOTAL_LESSONS count (23)', () => {
    expect(TOTAL_LESSONS).toBe(23);
  });

  it('should have navigation items matching lesson files', () => {
    const reactLessonFiles = getReactLessonFiles();
    const reactSection = navSections.find(
      (section: { title: string }) => section.title === 'React'
    );
    expect(reactSection).toBeDefined();
    
    const navReactIds = reactSection!.items.map(
      (item: { id: string }) => item.id
    );
    
    const fileLessonIds = reactLessonFiles.map(file => {
      const lesson = parseLessonFile(file);
      return lesson.id as string;
    });

    // Every navigation ID should have a corresponding lesson file
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: navReactIds.length - 1 }),
        (index) => {
          const navId = navReactIds[index];
          expect(fileLessonIds).toContain(navId);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have React lessons in logical learning order', () => {
    const reactSection = navSections.find(
      (section: { title: string }) => section.title === 'React'
    );
    expect(reactSection).toBeDefined();
    
    const navReactIds = reactSection!.items.map(
      (item: { id: string }) => item.id
    );

    // Verify the order matches the expected learning progression
    expect(navReactIds).toEqual(EXPECTED_REACT_LESSON_IDS);
  });
});
