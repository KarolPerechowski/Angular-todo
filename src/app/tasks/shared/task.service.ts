import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedTask: Task;
  constructor(private http: Http) { }
  
  postTask(task: Task){

    var body = JSON.stringify(task);
    var headerOptions = new Headers({'Content-type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions})
    this.http.post('url', body, requestOptions );
  }
}
