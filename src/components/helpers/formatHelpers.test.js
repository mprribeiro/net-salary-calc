const formatHelpers = require("./formatHelpers")
// @ponicode
describe("formatHelpers.formatNumber", () => {
    test("0", () => {
        let callFunction = () => {
            formatHelpers.formatNumber("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            formatHelpers.formatNumber("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            formatHelpers.formatNumber("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            formatHelpers.formatNumber(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
