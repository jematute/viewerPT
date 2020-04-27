import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { faHome, faSearchPlus, faSearchMinus, faPrint, faFilePdf, faComment, faAddressBook, faFile, faBars, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { ViewerService } from 'src/app/viewer/viewer.service';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
        }),
        animate(400,
          style({
            transform: 'translateX(0)',
          })
        )
      ]),
      transition(':leave', [
        style({}),
        animate(400,
          style({
            transform: 'translateX(-100%)',
          })
        )
      ])
    ]),
    trigger('slideIn', [
      state('*', style({ 'overflow-x': 'hidden' })),
      state('void', style({ 'overflow-x': 'hidden' })),
      transition('* => void', [
        style({ width: '*' }),
        animate(250, style({ width: 0 }))
      ]),
      transition('void => *', [
        style({ width: '0' }),
        animate(250, style({ width: '*' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LeftPanelComponent implements OnInit {

  constructor(public viewer: ViewerService) { }

  items = [];
  faCaretLeft = faCaretLeft;
  opened = true;
  
  toggle() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {



    this.items = [
      {
        label: 'Documents',
        icon: 'pi pi-pw pi-file',
        items: this.viewer.availableDocs
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        label: 'Print',
        icon: 'pi pi-fw pi-print',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Markup',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Workflow',
        icon: 'pi pi-fw pi-sitemap',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-sitemap',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      },
      {
        label: 'Collaboration',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
  }

  @Input()
  paneOpened = true;

  buttonClicked(doc) {
    this.viewer.openDocument(doc);
  }

}
