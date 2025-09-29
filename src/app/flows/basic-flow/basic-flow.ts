import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'app-basic-flow',
  standalone: true,
  imports: [CommonModule, FFlowModule],
  templateUrl: './basic-flow.html',
  styleUrl: './basic-flow.scss'
})
export class BasicFlow {}