import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './header/nav/nav.component';
import {LogoComponent} from './logo/logo.component';
import {RouterModule} from "@angular/router";
import { PortfolioComponent } from './portfolio/portfolio.component';
import {routes} from "./app.routing";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NavComponent,
		LogoComponent,
		PortfolioComponent,
		AboutComponent,
		ContactComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		Title
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
