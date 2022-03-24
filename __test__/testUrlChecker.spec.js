// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker"
//test if the checkforurl function is defined
describe("Testing the submit functionality", () => {
    test("Testing the checkForURL() function", () => {
           expect(checkForURL).toBeDefined();
})});