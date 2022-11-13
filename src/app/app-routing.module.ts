import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressFormComponent } from "./address-form/address-form.component";
import { AppComponent } from "./app.component";
import { IdentificationFormComponent } from "./identification-form/identification-form.component";
import { PersonalDetailsFormComponent } from "./personal-details-form/personal-details-form.component";


const routes: Routes = [

    {
        path: '',
        component: AppComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'personal'
          },
          {
            path: 'personal',
            component: PersonalDetailsFormComponent
          },
          {
            path: 'identification',
            component: IdentificationFormComponent
          },
          {
            path: 'address',
            component: AddressFormComponent
          }
        ]
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
