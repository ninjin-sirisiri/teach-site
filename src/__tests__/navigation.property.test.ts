/**
 * Property Tests: Navigation Item Completeness
 * 
 * **Feature: nodejs-npm-lessons**
 * 
 * These tests verify the correctness properties defined in the design document
 * for navigation items.
 */
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { navSections } from '../data/navigation';

/**
 * Property 4: Navigation Item Completeness
 * 
 * **Feature: nodejs-npm-lessons, Property 4: Navigation Item Completeness**
 * **Validates: Requirements 3.2, 3.3**
 * 
 * *For any* navigation item in navSections, it SHALL have non-empty `id`, `icon`, `label`, and `badge` properties.
 */
describe('Property 4: Navigation Item Completeness', () => {
  // Flatten all navigation items for testing
  const allNavItems = navSections.flatMap(section => section.items);

  it('should have all required properties for every navigation item (property-based)', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: allNavItems.length - 1 }),
        (index) => {
          const item = allNavItems[index];
          
          // Verify required properties exist and are non-empty
          expect(item).toHaveProperty('id');
          expect(item).toHaveProperty('icon');
          expect(item).toHaveProperty('label');
          expect(item).toHaveProperty('badge');
          
          // Verify non-empty strings
          expect(typeof item.id).toBe('string');
          expect(item.id.length).toBeGreaterThan(0);
          
          expect(typeof item.icon).toBe('string');
          expect(item.icon.length).toBeGreaterThan(0);
          
          expect(typeof item.label).toBe('string');
          expect(item.label.length).toBeGreaterThan(0);
          
          expect(typeof item.badge).toBe('string');
          expect(item.badge.length).toBeGreaterThan(0);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have unique ids across all navigation items', () => {
    const ids = allNavItems.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have Node.js intro and npm basics in tools section', () => {
    const toolsSection = navSections.find(section => section.title === 'ツール');
    expect(toolsSection).toBeDefined();
    
    const toolsItems = toolsSection!.items;
    const nodejsIntro = toolsItems.find(item => item.id === 'nodejs-intro');
    const npmBasics = toolsItems.find(item => item.id === 'npm-basics');
    
    expect(nodejsIntro).toBeDefined();
    expect(nodejsIntro!.icon).toBe('🟢');
    expect(nodejsIntro!.badge).toBe('nodejs');
    
    expect(npmBasics).toBeDefined();
    expect(npmBasics!.icon).toBe('📦');
    expect(npmBasics!.badge).toBe('nodejs');
  });

  it('should have Node.js/npm lessons before Git/GitHub/Deploy in tools section', () => {
    const toolsSection = navSections.find(section => section.title === 'ツール');
    expect(toolsSection).toBeDefined();
    
    const toolsItems = toolsSection!.items;
    const nodejsIndex = toolsItems.findIndex(item => item.id === 'nodejs-intro');
    const npmIndex = toolsItems.findIndex(item => item.id === 'npm-basics');
    const gitIndex = toolsItems.findIndex(item => item.id === 'git-intro');
    
    expect(nodejsIndex).toBeLessThan(gitIndex);
    expect(npmIndex).toBeLessThan(gitIndex);
  });
});

/**
 * Additional validation for navigation sections
 */
describe('Navigation Sections Validation', () => {
  it('should have non-empty title for all sections', () => {
    for (const section of navSections) {
      expect(section.title.length).toBeGreaterThan(0);
    }
  });

  it('should have at least one item in each section', () => {
    for (const section of navSections) {
      expect(section.items.length).toBeGreaterThan(0);
    }
  });
});
