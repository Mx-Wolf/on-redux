import { checkTenDigitRule } from "./ten-digit-rule"

describe("правило проверки номрера на дисплее",()=>{
  it("считает номер из десяти цифр валидным",()=>{
    expect(checkTenDigitRule({display:"1231231230"})).toBe(true);
  })
})