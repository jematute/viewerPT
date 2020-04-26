import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { trigger, state, style, transition, group, animate } from '@angular/animations';
import { faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { slideInTop } from '../../../animations';

@Component({
    selector: 'app-panel-button',
    templateUrl: './panel-button.component.html',
    styleUrls: ['./panel-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [
        slideInTop
    ]
})
export class PanelButtonComponent implements OnInit {

    constructor() { }

    @Output()
    onClick = new EventEmitter<any>();

    @Input()
    item: MenuItem;
    showChildren = false;

    faCaretDown = faCaretDown;
    faCaretRight = faCaretRight;
    ngOnInit(): void {
    }

}
