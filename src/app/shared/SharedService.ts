
import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Constant } from "../constant/Constant";

@Injectable({ providedIn: 'root'})
export class SharedService{
    private baseURL : string = "";
    constructor(private http:Http){
        this.baseURL = Constant.baseURL;
    }

    public getAllListBySelectType(jsonData: any, selectType : string) {
        return this.http.post(this.baseURL+'getAllList.php?selectType='+selectType,jsonData)
               .map((response:Response) => response.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getCompletedTask(jsonData : any){
        return this.http.post(this.baseURL+'getCompletedTask.php',jsonData)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getMenuTrasactionsDet(jsonData : any){    
        return this.http.post(this.baseURL+'getMenuTrasactionsDet.php',jsonData)
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}