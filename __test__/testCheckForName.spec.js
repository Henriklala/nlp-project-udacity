// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"
//test if the checkforname function is defined
describe("Testing the submit functionality", () => {
    test("Testing the checkForName() function", () => {
           expect(checkForName).toBeDefined();
})});