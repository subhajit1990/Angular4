import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ProductComponent } from './products/product.component';
import { UserComponent } from './users/user.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'products', component: ProductComponent },
            { path: 'users', component: UserComponent },
            { path: '**', redirectTo: 'products', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }