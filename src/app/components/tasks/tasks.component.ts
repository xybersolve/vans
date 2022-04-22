import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task: Task;
 
  tasks: Task[] = []; 
  trackByFn: number; // just for example
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // use Observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService
      .deleteTask(task)
      .subscribe(() => 
        (this.tasks = this.tasks.filter(t => t.id !== task.id))
      );
  }
  toggleTask(task: Task) {
    this.taskService.toggleTaskState(task).subscribe()
  }

  addTask(task: Task) {
    console.log(task);
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
