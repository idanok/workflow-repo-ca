import { describe, it, expect } from 'vitest';
import { isActivePath, getUserName } from './utils.js'; // adjust path if needed

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });
});

describe('getUserName', () => {
  beforeEach(() => localStorage.clear());

  it('returns null when no user exists in storage', () => {
    expect(getUserName()).toBe(null);
  });
});
