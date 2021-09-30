import { simple1000 } from "./check-sum"

describe("поведение функции свертки",()=>{
  it("преобразует пустую строку",()=>{
    expect(simple1000("")).toBe("0");
  });
  it("преобразует строку 1",()=>{
    expect(simple1000("1")).toBe("411");
  });
  it("преобразует короткую строку 2",()=>{
    expect(simple1000("2")).toBe("782");
  });
  it("преобразует строку 42",()=>{
    expect(simple1000("42")).toBe("266");
  });
  it("преобразует строку 4957771234",()=>{
    expect(simple1000("4957771234")).toBe("819")
  })
  const r = Array(1000).fill(null).map((_,ix)=>simple1000(ix.toString()));
  console.log(r);
})