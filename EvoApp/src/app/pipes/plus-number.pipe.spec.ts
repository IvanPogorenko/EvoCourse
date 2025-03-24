import { PlusNumberPipe } from './plus-number.pipe';

describe('PlusNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PlusNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
