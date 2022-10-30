import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  Category!: Category[];

  constructor(private crudService: CrudService, private route: ActivatedRoute,private data: CrudService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  removeCategory(Category:any){
    if(confirm("Are you sure to delete" + Category.category)){
      this.crudService.deleteCategory(Category);
    }
  }

  getCategories() {

    this.data.getCategories().subscribe(res => {

      this.Category = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

}
