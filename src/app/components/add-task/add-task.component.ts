import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id:number=0
  text: string="";
  day: string="";
  reminder: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a Task!");
      return
    }
    const {id,text,day,reminder} = this
    const newTask = {id,text,day,reminder}
    
    this.onAddTask.emit(newTask);  
    
  }
  


}
