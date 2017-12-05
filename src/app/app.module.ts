import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostsService } from './posts.service';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
