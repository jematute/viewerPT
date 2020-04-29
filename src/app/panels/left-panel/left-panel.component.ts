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
  settingItems = [];
  faCaretLeft = faCaretLeft;
  opened = true;

  synergisLogo = "assets/images/synergislogo.png";
  
  toggle() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {

    this.settingItems = [
      {
        label: 'Settings',
        icon: 'pi pi-pw pi-cog',
        items: [
          {
            label: 'Settings 1',
            icon: 'pi pi-pw pi-file',
            items: []
          },
          {
            label: 'Settings 2',
            icon: 'pi pi-pw pi-file',
            items: []
          },
          {
            label: 'Settings 3',
            icon: 'pi pi-pw pi-file',
            items: []
          },
          {
            label: 'Settings 4',
            icon: 'pi pi-pw pi-file',
            items: []
          },
          {
            label: 'Settings 5',
            icon: 'pi pi-pw pi-file',
            items: []
          }
        ]
      },
    ]

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
        type: 34,
        icon: 'pi pi-fw pi-print',
        items: [
          { label: 'Print 1', icon: 'pi pi-fw pi-trash' },
          { label: 'Print 2', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Markup',
        icon: 'pi pi-fw pi-pencil',
        type: 54,
        items: [
          {
            label: 'Markup 1',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Markup 2',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Markup 2.1',
                items: [
                  {
                    label: 'Markup 2.1.1'
                  }
                ]
              },
              {
                label: 'Markup 2.2',
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
            label: 'Workflow 1',
            icon: 'pi pi-fw pi-sitemap',
            items: [
              { label: 'Workflow 1.1', icon: 'pi pi-fw pi-save' },
              { label: 'Workflow 1.2', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Workflow 2',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Workflow 2.1', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      },
      {
        label: 'Collaboration',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Collaboration 1',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Collaboration 1.1', icon: 'pi pi-fw pi-save' },
              { label: 'Collaboration 1.2', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Collaboration 2',
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

  buttonClicked(item) {
    switch (item.type) {
      case 1:
        this.viewer.openDocument(item);
        break;
    
      case 54:
        this.viewer.toggleMarkupMode();
        break;
      case 34:
        this.viewer.print();
        break;
    }
  }

}
