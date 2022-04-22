import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faCheck, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); 
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  faCheck = faCheck;
  faCheckToSlot = faCheckToSlot;

  constructor() { }

  ngOnInit(): void {
  
  }
  onToggle(task: Task) {
    // debug.x
    // console.log('got onToggle: ', task.id)
    this.onToggleTask.emit(task)
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
    // debug.x
    // console.log('got delete request');
    // console.log("ID: ", task.id);
  }
}
