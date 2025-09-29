import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-easy-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './easy-flow.html',
  styleUrl: './easy-flow.scss'
})
export class EasyFlow {}

