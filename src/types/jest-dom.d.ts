import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toHaveStyle(style: Record<string, any>): R;
    }
  }
}
