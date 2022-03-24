import "babel-polyfill";
// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
//test if the handlesubmit function is defined
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
})});