import { expect } from "chai";
import { main } from "../app";


// Example Test to get you started.
// Describe what the test is, and then what 'it' should do.
// Then evaluate what you 'expect' it do.

describe('Hello World Test', () => {
    it('should return Hello World', () => {
        const helloWorldString = 'Hello World!';
        const mainReturn = main();
    
        expect(mainReturn).to.equal(helloWorldString);
    })
})