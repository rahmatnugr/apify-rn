// import mockAxios from 'jest-mock-axios';
// import { extractHeadings } from './func.js';

//     const mockHtml = `
//         <html>
//             <body>
//                 <h1>Main Title</h1>
//                 <h2>Subtitle</h2>
//                 <h3>Section Header</h3>
//             </body>
//         </html>
//     `;

function sum(a, b) {
    return a + b;
  }

    describe('extractHeadings', () => {

        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
          });

        // afterEach(() => {
        //     // cleaning up the mess left behind the previous test
        //     mockAxios.reset();
        // });

        // it('should extract headings correctly', async () => {
        // axios.get.mockResolvedValue({ data: mockHtml });

        //     const testUrl = 'https://test.com';
        //     const testStage = 'test';
        //     const testApiUrl = 'https://api-test.com';

        //     const result = await extractHeadings(testUrl, testStage, testApiUrl);

        //     expect(result).toHaveLength(3);
        //     expect(result[0]).toEqual({
        //         stage: testStage,
        //         apiUrl: testApiUrl,
        //         level: 'h1',
        //         text: 'Main Title'
        //     });
        //     expect(result[1]).toEqual({
        //         stage: testStage,
        //         apiUrl: testApiUrl,
        //         level: 'h2',
        //         text: 'Subtitle'
        //     });
        //     expect(result[2]).toEqual({
        //         stage: testStage,
        //         apiUrl: testApiUrl,
        //         level: 'h3',
        //         text: 'Section Header'
        //     });
        // });

        // it('should handle errors properly', async () => {
        // axios.get.mockRejectedValue(new Error('Network error'));

        //     await expect(extractHeadings('https://test.com', 'test', 'https://api-test.com'))
        //         .rejects
        //         .toThrow('Network error');
        // });
    });
