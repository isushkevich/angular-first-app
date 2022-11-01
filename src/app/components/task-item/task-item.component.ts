import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task): void {
    this.onToggleReminder.emit(task);
  }

}
