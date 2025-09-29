import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-intermediate-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './intermediate-flow.html',
  styleUrl: './intermediate-flow.scss'
})
export class IntermediateFlow {}

