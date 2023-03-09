import { Component, Input, OnInit } from '@angular/core';

import { IconProp } from '@fortawesome/fontawesome-svg-core'


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // icons
  @Input() iconName!: IconProp;

  // Button Text
  @Input() buttonText!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
