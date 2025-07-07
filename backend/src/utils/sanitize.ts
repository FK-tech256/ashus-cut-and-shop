// Simple input sanitization utility
export function sanitizeInput(input: string): string {
  return input.replace(/[<>"'`]/g, '');
} 