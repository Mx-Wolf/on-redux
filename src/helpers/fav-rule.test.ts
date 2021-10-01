import { checkFavRule } from "./fav-rule"

describe("правило проверки, является ли телефон избранным",()=>{
  it("подтверждает наличие в списке избранных номера, отображаемого на дисплее",()=>{
    const ex = "test-string";
    expect(checkFavRule({favorites:[ex],display:ex})).toBe(true);
  });
});