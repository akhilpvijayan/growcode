import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public angularFireStore:AngularFirestore) { }

getCategories(){
  return this.angularFireStore.collection("Categories").snapshotChanges();
}

getCategoriesbyId(id: string | undefined){
  return this.angularFireStore.collection("categories").doc(id).valueChanges();
}

createNewCategory(category: Category){
  return new Promise<any>((resolve,reject)=>{
    this.angularFireStore.collection("Categories").add(category)
    .then(response => {console.log(response)},error => reject(error));
});
}

updateCategory(category: Category,id: any){
  return this.angularFireStore.collection("Categories").doc(id)
  .update({
    category: category.category
  });
}

deleteCategory(category: Category){
  return this.angularFireStore.collection("Categories").doc(category.id).delete();
}

}
