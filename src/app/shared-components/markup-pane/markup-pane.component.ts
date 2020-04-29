import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faEyeSlash, faEye, faFilter, faSearch, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-markup-pane',
  templateUrl: './markup-pane.component.html',
  styleUrls: ['./markup-pane.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkupPaneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faFilter = faFilter;
  faSearch = faSearch;
  faFileAlt = faFileAlt;

  columnDefs = [
    {headerName: 'Category', field: 'category', width: 150 },
    {headerName: 'Page', field: 'page', width: 90 },
    {headerName: 'Text', field: 'text', width: 190 },
    {headerName: 'Status', field: 'status', width: 120 },
    {headerName: 'Comments', field: 'comments', width: 190 },
    {headerName: 'Visible', field: 'visible', width: 90, cellRenderer: params => {
      return "<input type='checkbox' />"
    } },
    {headerName: 'Author', field: 'author', width: 140 },
    {headerName: 'Creation Date', field: 'creationdate', width: 140 },
    {headerName: 'Color', field: 'color', width: 100, cellRenderer: params => {
      return `<div style="margin: 5px 0 0 10px; width: 12px; height: 12px; background: ${params.value}"><div>`
    } },
    {headerName: 'Layer', field: 'layer', width: 90 },
    {headerName: 'Lock', field: 'lock', width: 100, cellRenderer: params => {
      return "<input type='checkbox' />"
    } },
];

rowData = [
    { category: 'Reator Area', page: 2, text: "Need to increase......", status: 'Accepted', comments: 'Great idea!', visible: 'true', author: 'Ackerman', creationdate: '12/24/2019', color: 'blue', layer: '1', lock: false  },
    { category: 'Leader', page: 2, text: "Wrong size value in....", status: 'Accepted', comments: 'Value increased to 6"', visible: 'true', author: 'Schuler', creationdate: '12/25/2019', color: 'green', layer: '3', lock: false  },
    { category: 'Cloud/Callout', page: 3, text: "Add additional value....", status: 'Rejected', comments: 'Are you kidding?', visible: 'true', author: 'Gasper', creationdate: '12/26/2019', color: 'red', layer: '2', lock: false  },
];

}
