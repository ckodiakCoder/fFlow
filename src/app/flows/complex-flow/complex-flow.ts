import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-complex-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './complex-flow.html',
  styleUrl: './complex-flow.scss'
})
export class ComplexFlow {}
