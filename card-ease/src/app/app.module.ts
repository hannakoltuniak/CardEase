import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule ({
    declarations: [
        AppComponent,
        CardDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}