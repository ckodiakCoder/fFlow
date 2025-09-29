import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-ultimate-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './ultimate-flow.html',
  styleUrl: './ultimate-flow.scss'
})
export class UltimateFlow {}


