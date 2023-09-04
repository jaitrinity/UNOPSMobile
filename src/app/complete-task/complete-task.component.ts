import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/SharedService';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.scss']
})
export class CompleteTaskComponent implements OnInit {
  public checklist = "";
  public color1 = "#28c1f4";
  public button = "#5490cc";
  public isTaskDiv = true;
  public empId = "";
  public completedTask = [];
  public tempTask = [];
  public transactionDetList = [];
  constructor(private route: ActivatedRoute, private sharedService : SharedService) {
    this.route.queryParams.subscribe(params => {
      this.empId = params['empId'];
    });
  }

  ngOnInit(): void {
    this.getCompletedTask()
  }

  getCompletedTask(){
    if(this.empId == ""){
      alert("Employee id not found");
      return;
    }
    let jsonData = {
      empId : this.empId
    }
    this.sharedService.getCompletedTask(jsonData)
    .subscribe(
      (result)=>{
        // console.log(result)
        this.tempTask = result.submitList;
        this.completedTask = result.submitList;

      },
      (error)=>{

      }
    )
  }

  viewActId = "";
  viewDetails(stObj : any){
    this.viewActId = stObj.activityId;
    this.isTaskDiv = !this.isTaskDiv;
    this.transactionDetList = [];
    let jsonData = {
      menuId : stObj.menuId,
      transactionId : stObj.activityId
    }
    this.sharedService.getMenuTrasactionsDet(jsonData)
    .subscribe(
      (result)=>{
        this.transactionDetList = result.wrappedList[0].transactionDetList;
      },
      (error)=>{

      }
    )
  }

  selectChecklist(){
    if(this.checklist == ""){
      this.completedTask = this.tempTask;
    }
    else {
      this.completedTask = [];
      for(let i=0; i<this.tempTask.length;i++){
        let taskObj = this.tempTask[i];
        let menuId = taskObj.menuId
        if(menuId == this.checklist){
          this.completedTask.push(taskObj)
        }
      }
    }
  }

}
