import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pob-interdiccion',
  templateUrl: './pob-interdiccion.component.html',
  styleUrls: ['./pob-interdiccion.component.css']
})
export class PobInterdiccionComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<PobInterdiccionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
   
    


  ngOnInit() {
  }

}

