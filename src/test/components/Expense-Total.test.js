import ExpenseTotal from "../../components/Expense-Total";
import expenses from "../fixtures/expenses";

test("should handle empty expense",()=>{
    const action=ExpenseTotal([]);
    expect(action).toBe(0);
})
test("should handle empty expense",()=>{
     const action=ExpenseTotal([expenses[2]]);
     expect(action).toBe(4500);
})
test("should handle empty expense",()=>{
     const action=ExpenseTotal(expenses);
     expect(action).toBe(114195);
})