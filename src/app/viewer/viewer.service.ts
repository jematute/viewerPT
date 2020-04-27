import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor() { 
    this.openDocument(this.availableDocs[0]);
    this.openedDocuments.push(...this.availableDocs.filter(d => d.id < 5));
  }

  onFileOpened = new EventEmitter<any>();
  onFileClosed = new EventEmitter<any>(); 
  currentDoc = null;
  markupMode = false;

  availableDocs = [
    { id: 1, label: "fans", image: 'fans.jpg', icon: "pi pi-fw pi-file", type: 1 },
    { id: 2, label: "assembly", image: 'assembly.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 3, label: "gemini", image: 'gemini.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 4, label: "house", image: 'house.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 5, label: "sony", image: 'sony.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 6, label: "sony2", image: 'sony2.jpg', icon: "pi pi-fw pi-file", type: 1},
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

  replaceDocument(doc) {
    this.openedDocuments.forEach((d, index) => {
      if (doc.id == d.id) {
        this.openedDocuments.splice(index, 1, this.currentDoc);
        this.currentDoc = {}
        setTimeout(() => {
          this.currentDoc = d;
        }, 1000);
      }
    });
  }

  closeDocument(item) {
    this.openedDocuments.forEach((i, key) => {
      if (item.id == i.id)
        this.openedDocuments.splice(key, 1);
    });
    this.onFileClosed.emit();
  }

}
