import TimeElapsed from '../src/TimeElapsed';

describe('Past Year', () => {
  it('Test if calculates year correctly', () => {
    const time = new Date("1999-03-25T12:00:00");
    expect(TimeElapsed({time: time})).toBe("23 years ago");
  });
});

describe('Future Year', () => {
  it('Test if calculates future year correctly', () => {
    const time = new Date("2028-03-25T12:00:00");
    expect(TimeElapsed({time: time})).toBe("Happening in 6 years");
  });
});



