import firstNonRepeatingLetter from './firstNonRepeatingLetter'
let { describe, it } = global;

// describe('Simple Tests', () => {
//     it('should handle simple tests', () => {
//       expect(firstNonRepeatingLetter('a')).toBe('a');
//       Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//       Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//     });
//   });


  test('returns first unique character', () => {
    expect(firstNonRepeatingLetter('a')).toBe('a');
    expect(firstNonRepeatingLetter('stress')).toBe('t');
    expect(firstNonRepeatingLetter('moonmen')).toBe('e')
  });