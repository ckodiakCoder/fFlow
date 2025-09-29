import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-advanced-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './advanced-flow.html',
  styleUrl:'./advanced-flow.scss'
})
export class AdvancedFlow {}
