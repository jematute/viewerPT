import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrintPanelComponent } from '../shared-components/print-panel/print-panel.component';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(public dialog: MatDialog) { 
    this.openDocument(this.availableDocs[this.startingDoc]);
    this.openedDocuments.push(...this.availableDocs.filter(d => d.id > 4 && d.id < 11 && d.id != this.startingDoc + 1));
  }

  startingDoc = 5;
  onFileOpened = new EventEmitter<any>();
  onFileClosed = new EventEmitter<any>();
  onThumbnailResize = new EventEmitter<any>();  
  onEnterMarkupMode = new EventEmitter<any>(); 
  currentDoc = null;
  markupMode = true;

  availableDocs = [
    { id: 1, label: "fans", image: 'fans.jpg', icon: "pi pi-fw pi-file", type: 1 },
    { id: 2, label: "assembly", image: 'assembly.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 3, label: "gemini", image: 'gemini.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 4, label: "house", image: 'house.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 5, label: "cylinder", image: 'cylinder.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 6, label: "engine", image: 'engine.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 7, label: "wheel", image: 'wheel.jpg', icon: "pi pi-fw pi-file", type: 1 },
    { id: 8, label: "2DDrawing", image: '2DDrawing.png', icon: "pi pi-fw pi-file", type: 1},
    { id: 9, label: "red cylinder", image: 'redcylinder.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 10, label: "aerre", image: 'aerre.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 11, label: "sony", image: 'sony.jpg', icon: "pi pi-fw pi-file", type: 1},
    { id: 12, label: "sony2", image: 'sony2.jpg', icon: "pi pi-fw pi-file", type: 1},
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

  toggleMarkupMode() {
    this.markupMode = !this.markupMode;
    if (this.markupMode)
      this.onEnterMarkupMode.emit();
  }

  print() {
    this.dialog.open(PrintPanelComponent, {
      height: '500px',
      width: '800px',
      data: { doc: this.currentDoc }
    });
  }

  thumbNailResize(newSize) {
    this.onThumbnailResize.emit(newSize);
  }

}
