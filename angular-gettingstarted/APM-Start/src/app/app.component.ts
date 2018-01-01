import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
      <pm-top-menu [pageTitle]="pageTitle"></pm-top-menu>
      <div class='container'>
          <router-outlet></router-outlet>
      </div>
   </div>
  `
})

export class AppComponent {
  pageTitle: string = 'ACME Product Management'
}
