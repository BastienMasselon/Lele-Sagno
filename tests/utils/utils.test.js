import { makeExcerpt, makeDatePrettier } from '../../src/utils/utils'

describe('utils functions', () => {

    it('should return a formated date string when given a timestamp', () => {
        expect(makeDatePrettier('2023-07-28T20:06:44')).toBe('28 juillet 2023');
    });

    describe('Excerpt function', () => {
        it('should return an excerpt of a string followed by three digits', () => {
            expect(makeExcerpt("Une embuscade !", 5)).toBe('Une e...');
        });

        test('returns the input string when it doesn\'t exceed the string length limit', () => {
            expect(makeExcerpt("Une embuscade !", 15)).toBe('Une embuscade !');
        });
    });

});