const filter = require("./filter.js");

describe("filter tests", () => {
    
    it("returns 'hello world' when 'hello world'", () => {
        const expected = "hello world";
        const actual = filter("hello world");
        expect(actual).toStrictEqual(expected);
    })

    it("returns 'hello world' when 'hello%world'", () => {
        const expected = "hello world";
        const actual = filter("hello%world");
        expect(actual).toStrictEqual(expected);
    })

    it("returns 'hello world' when '!hello world'", () => {
        const expected = "hello world";
        const actual = filter("!hello world");
        expect(actual).toStrictEqual(expected);
    })

    it("returns 'hello world' when ';hello?world!'", () => {
        const expected = "hello world";
        const actual = filter(";hello?world!");
        expect(actual).toStrictEqual(expected);
    })

    it("returns 'hello world' when 'hello;world'", () => {
        const expected = "hello world";
        const actual = filter("hello;world");
        expect(actual).toStrictEqual(expected);
    })

    it("returns 'hello world' when 'hello world?'", () => {
        const expected = "hello world";
        const actual = filter("hello world?");
        expect(actual).toStrictEqual(expected);
    })
})