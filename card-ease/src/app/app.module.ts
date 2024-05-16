import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { CardDetailFormComponent } from "./card-details/card-detail-form/card-detail-form.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule ({
    declarations: [
        AppComponent,
        CardDetailsComponent,
        CardDetailFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}