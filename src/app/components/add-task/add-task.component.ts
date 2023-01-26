import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean= false;
  id: number = 0;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle()
                            .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length ===0){
      alert("Please add a task!");
      return
    }

    const newTask ={
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      id: this.id
    };

    this.onAddTask.emit(newTask);
  }



}
