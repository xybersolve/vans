import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
// import { TmplAstRecursiveVisitor } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'; 
 
  constructor( private http: HttpClient ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    // hardcoded JSON read as Observable 
    //const tasks = of(TASKS); 
    //return tasks;
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);

  } 
  toggleTaskState(task: Task): Observable<Task>  {
    task.state = task.state === 3 ? 1 : task.state + 1;
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}`
    return this.http.post<Task>(url, task, httpOptions) 
  } 
}
