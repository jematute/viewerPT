import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor() { 

  }



  currentDoc = null;

  availableDocs = [
    { label: "fans", image: 'fans.jpg', icon: "pi pi-fw pi-file"},
    { label: "assembly", image: 'assembly.jpg', icon: "pi pi-fw pi-file"},
    { label: "gemini", image: 'gemini.jpg', icon: "pi pi-fw pi-file"},
    { label: "house", image: 'house.jpg', icon: "pi pi-fw pi-file"},
    { label: "sony", image: 'sony.jpg', icon: "pi pi-fw pi-file"},
    { label: "sony2", image: 'sony2.jpg', icon: "pi pi-fw pi-file"},
  ]

  openedDocuments = [

  ]

  openDocument(name) {
    this.currentDoc = this.availableDocs.filter(d => d.label == name)[0];
    if (this.openedDocuments.filter(d => d.label == name).length === 0)
      this.openedDocuments.push(this.currentDoc);
  }

}
