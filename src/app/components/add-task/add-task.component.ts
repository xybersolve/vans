import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  subscription: Subscription; 

  text: string;
  state: number;
  reminder:boolean;
  showAddTask: boolean;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('got onSubmit');
    if(! this.text) {
      alert("Please add a task!");
      return;
    }
    const newTask = {
      text: this.text,
      state: this.state,
      reminder: this.reminder 
    }
    // @todo emit event
    this.onAddTask.emit(newTask);  

    this.text = '';
    this.state = null;
    this.reminder = false; 

  }  
}
