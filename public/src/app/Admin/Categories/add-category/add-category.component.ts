import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  ngOnInit(): void {
  }

  public categoryForm: FormGroup;


  constructor(public crudService:CrudService,
    public formBuilder: FormBuilder){

    this.categoryForm = this.formBuilder.group({
      category: ['']
    })

  }

  createRecord(){
    this.crudService.createNewCategory(this.categoryForm.value);
    alert("Submitted");
  }

}
