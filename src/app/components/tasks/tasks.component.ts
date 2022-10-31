import { Component, OnInit } from '@angular/core';
// import {TASKS} from '../../mock-tasks';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
