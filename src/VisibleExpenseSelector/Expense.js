import moment from "moment";
export default  (expenses,{text,sortBy,startDate,endDate})=>{  
    return expenses.filter((expense)=>{
            const TextFilter=text==""?true:(expense.description.toLowerCase()).includes(text.toLowerCase());
            const startDateFilter=startDate?startDate.isSameOrBefore(expense.createdAt,"day"):true ;
            const endDateFilter=endDate?endDate.isSameOrAfter(expense.createdAt,"day") :true; 
            return TextFilter&&startDateFilter&&endDateFilter
    }).sort((a,b)=>{ 
        if(sortBy=="date"){
         return a.createdAt<b.createdAt?1:-1;
        }
        else if(sortBy=="amount"){
         return parseFloat(a.amount,10)<parseFloat(b.amount)?1:-1;
        }
        else{
            return 0
        }
    })
}
