import { Component, OnInit } from '@angular/core';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService] //importujemy service i wstrzykujemy go w tasks a dzieki dziedziczeniu
  //bedzie to dostepne w każdym komponencie niżej
})
export class TasksComponent implements OnInit {

  constructor(private taskService : TaskService) { 

  }

  ngOnInit() {
  }

}
