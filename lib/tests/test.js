"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const app_1 = require("../app");
// Example Test to get you started.
// Describe what the test is, and then what 'it' should do.
// Then evaluate what you 'expect' it do.
describe('Hello World Test', () => {
    it('should return Hello World', () => {
        const helloWorldString = 'Hello World!';
        const mainReturn = app_1.main();
        chai_1.expect(mainReturn).to.equal(helloWorldString);
    });
});
