import TimeElapsed from '../src/TimeElapsed';

describe('Past Month', () => {
  it('Test month in a different year but less than 12 months', () => {
    const time = new Date("2021-12-25T12:00:00");
    expect(TimeElapsed({time: time})).toBe("1 year ago");
  });
});

describe('This Month t', () => {
  it('Test the same month', () => {
    const time = new Date("2022-04-25T12:00:00");
    expect(TimeElapsed({time: time})).toBe("Happening in 8 months");
  });
});




