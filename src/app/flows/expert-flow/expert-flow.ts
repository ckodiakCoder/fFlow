import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-expert-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './expert-flow.html',
  styleUrl: './expert-flow.scss'
})
export class ExpertFlow {}
