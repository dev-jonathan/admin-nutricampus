// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PratosComponent } from './pratos/pratos.component';
import { PratosService } from './pratos/pratos.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Importações do PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';

// Serviços do PrimeNG
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, PratosComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // PrimeNG Modules
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    RatingModule,
    TagModule,
    InputNumberModule,
    RippleModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [PratosService, ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
