import { Component } from '@angular/core';
import { Q } from 'module-a';
import { R } from 'module-b';
import { S } from 'module-c';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  get Q() {
    return Q;
  }

  get R() {
    return R;
  }

  get S() {
    return S;
  }
}
