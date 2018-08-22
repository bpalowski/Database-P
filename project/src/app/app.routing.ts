import { ModuleWithProviders }  from '@angular/core'; //helps provide our router to the rest of the application.
import { Routes, RouterModule } from '@angular/router'; //contain code that will help us render specific components when specific URLs are provided to the router
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { AlbumComponent } from './album/album.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'market',
  component: MarketPlaceComponent
},
{
  path: 'album',
  component: AlbumComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'albums/:id',
  component: AlbumDetailComponent
}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
