import { Component } from '@angular/core';

@Component({
  //allows use of relative path for templateUrl
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`
})
export class TasksComponent {  }
