import { Injectable } from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedTask: Task;
  constructor() { }
}
