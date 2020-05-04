import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FileFormComponent } from './components/file-form/file-form.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';
import { FileListComponent } from './components/file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FileFormComponent,
    FilePreviewComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular, Aplicación de Imagenes con Nodejs, Mongodb, Express & Typescript (Stack MEAN)
// 09:23

// Angular Material 7 Tutorial
// 11:46