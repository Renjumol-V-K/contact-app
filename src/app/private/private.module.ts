import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { CommonComponent } from '../common/common.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';


@NgModule({
  declarations: [CommonComponent, ToolBarComponent, ProfilePictureComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
