import{ Injectable} from '@angular/core';
import{HttpClient,HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoanTracker1 } from './LoanTracker1';

@Injectable({
    providedIn:'root'
})
export class TrackerService{
    baseUrl : String = 'http://localhost:8090/tracker/'
    constructor(private myhttp: HttpClient){}

    getAllLoansService(): Observable<LoanTracker1[]>{
        return this.myhttp.get<LoanTracker1[]>(this.baseUrl+"getAllLoans/")
    }

    /*deleteEmployeeService(empNo : number) : Observable<any>{
        return this.myhttp.delete<any>(this.baseUrl+"deleteEmp/"+empNo);
    }*/
    getLoan(loanId: number,phone:String):Observable<LoanTracker1[]>{
        return this.myhttp.get<LoanTracker1[]>(this.baseUrl+"getLoan/"+loanId+"/"+phone);
    }
    // getDebtorId(phono:string):Observable<number>
    // {
    //     alert("here");
    //     console.log("Console!!! "+JSON.stringify(this.myhttp.get("http://localhost:8090/tracker/getDeptorid/9360299927")));
    //     return this.myhttp.get<number>("http://localhost:8090/tracker/getDeptorid/"+phono);
    // }
}