import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id = "";
  name="";
  salary= "";
  department="";
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      id: this.id,
      name: this.name,
      salary: this.salary,
      department: this.department
    };
    this.postCreated.emit(post);
  }
  constructor() { }

  ngOnInit() {
  }

}
