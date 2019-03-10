import rot13 from './rot13'

test("Rot13", () => {
    expect(rot13("test")).toBe("grfg"); //Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
    expect(rot13("Test")).toBe("Grfg"); // "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
})

  