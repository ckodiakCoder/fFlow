

import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import {Footer} from './shared/footer/footer';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Navbar,Footer], // ✅ Added RouterModule
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
