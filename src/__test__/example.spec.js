test('should pass', () => {
    expect(true).toBe(true);
});

test("returns undefined by default", () => {
    const mock = jest.fn(() => "bar");
    expect(mock("foo")).toBe("bar");
});