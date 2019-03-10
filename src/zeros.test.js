import zeros from './zeros'


test("returns number of zeros in n!", () => {
    expect(zeros(0)).toBe(0);
    expect(zeros(6)).toBe(1);
    expect(zeros(30)).toBe(7)
});
  