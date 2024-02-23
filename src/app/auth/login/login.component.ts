import { Component } from '@angular/core';
import { SharedModuleModule } from '../../core/sharedModules/shared-module/shared-module.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
