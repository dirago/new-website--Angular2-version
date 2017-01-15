import {Routes} from "@angular/router";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent}
]