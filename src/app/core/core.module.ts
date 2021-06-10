import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api-interceptor';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: "BASE_API_URL",
      useValue: environment.apiUrl
    }

  ],
})
export class CoreModule { }
