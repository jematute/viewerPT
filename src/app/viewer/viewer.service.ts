import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor() { 

  }

  onFileOpened = new EventEmitter<any>();
  onFileClosed = new EventEmitter<any>(); 
  currentDoc = null;

  availableDocs = [
    { id: 1, label: "fans", image: 'fans.jpg', icon: "pi pi-fw pi-file"},
    { id: 2, label: "assembly", image: 'assembly.jpg', icon: "pi pi-fw pi-file"},
    { id: 3, label: "gemini", image: 'gemini.jpg', icon: "pi pi-fw pi-file"},
    { id: 4, label: "house", image: 'house.jpg', icon: "pi pi-fw pi-file"},
    { id: 5, label: "sony", image: 'sony.jpg', icon: "pi pi-fw pi-file"},
    { id: 6, label: "sony2", image: 'sony2.jpg', icon: "pi pi-fw pi-file"},
  ]

  openedDocuments = [

  ]

  openDocument(doc) {
    if (this.currentDoc && doc.id == this.currentDoc.id)
      return
    doc = this.availableDocs.filter(d => d.id === doc.id)[0];
    let added = false;
    this.openedDocuments.forEach((d, index) => {
      if (d.id == doc.id) {
        this.openedDocuments.splice(index, 1);
      }
    });
    if (this.currentDoc) {
      this.openedDocuments.push(this.currentDoc);
    }
    this.currentDoc = null,
    setTimeout(() => {
      this.currentDoc = doc;
    }, 500);  
    this.onFileOpened.emit(doc);
  }

  closeDocument(item) {
    this.openedDocuments.forEach((i, key) => {
      if (item.id == i.id)
        this.openedDocuments.splice(key, 1);
    });
    this.onFileClosed.emit();
  }

}
