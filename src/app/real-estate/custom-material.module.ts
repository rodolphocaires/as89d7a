import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

const MaterialModules = [
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
];

@NgModule({
    imports: MaterialModules,
    exports: MaterialModules
})

export class CustomMaterialModule { }
