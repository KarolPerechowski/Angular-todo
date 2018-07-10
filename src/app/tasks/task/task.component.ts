import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.reset();
    this.taskService.selectedTask = {
      TaskID: null,
      TaskName: "",
      TaskDescription:"",
      TaskDate: null,
      TaskDificulty: 0

    }
  }
}
