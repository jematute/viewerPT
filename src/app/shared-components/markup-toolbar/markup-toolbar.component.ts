import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faFillDrip, faRedo, faUndo, faArrowsAlt, faArrowsAltV, faCaretRight, faCaretLeft, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { slideInSide } from 'src/app/animations';

@Component({
  selector: 'app-markup-toolbar',
  templateUrl: './markup-toolbar.component.html',
  styleUrls: ['./markup-toolbar.component.scss'],
  animations: [
    slideInSide
  ]
})
export class MarkupToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  faGripVertical = faGripVertical;
  collapsed = false;

  menu = [
    {
      type: ElementType.Section,
      items: [
        {
          label: 'Markup Type',
          type: ElementType.ButtonLarge
        },
        {
          label: 'Scale',
          type: ElementType.ButtonLarge
        }
      ],
    },
    {
      type: ElementType.Section,
      items: [
        {
          type: ElementType.SubSection,
          items: [
            {
              type: ElementType.ButtonSmall,
              label: 'Calibri',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Font Size',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Bold',
            },
          ]
        },
        {
          type: ElementType.SubSection,
          items: [
            {
              type: ElementType.ButtonSmall,
              label: 'Text Color',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Style',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Align',
            },
          ]
        },

      ]
    },
    {
      type: ElementType.Section,
      items: [
        {
          type: ElementType.SubSection,
          items: [
            {
              type: ElementType.ButtonSmall,
              label: 'Line Color',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Line Style',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Line Thickness',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Line Arrow',
              icon: faArrowsAltV
            },
          ]
        },
        {
          type: ElementType.SubSection,
          items: [
            {
              type: ElementType.ButtonSmall,
              label: 'Fill Color',
              icon: faFillDrip
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Fill Transparency',
            },
            {
              type: ElementType.ButtonSmall,
              label: 'Hatch',
            },
          ]
        },

      ]
    },
    {
      type: ElementType.Section,
      items: [
        {
          label: 'Group',
          type: ElementType.ButtonLarge
        },
        {
          label: 'Ungroup',
          type: ElementType.ButtonLarge
        }
      ],
    },
    {
      type: ElementType.Section,
      items: [
        {
          label: 'Rotate Clock',
          type: ElementType.ButtonLarge,
          icon: faRedo
        },
        {
          label: 'Rotate Counter Clock',
          type: ElementType.ButtonLarge,
          icon: faUndo
        }
      ],
    },
    {
      type: ElementType.Section,
      items: [
        {
          label: 'Front',
          type: ElementType.ButtonLarge
        },
        {
          label: 'Back',
          type: ElementType.ButtonLarge
        }
      ],
    },
    {
      type: ElementType.Section,
      items: [
        {
          label: 'Quick Styles',
          type: ElementType.ButtonLarge
        },
        {
          label: 'Add to',
          type: ElementType.ButtonLarge
        }
      ],
    }
  ]


}

export enum ElementType {
  Section = 1,
  SubSection,
  ButtonLarge,
  ButtonSmall
} 
