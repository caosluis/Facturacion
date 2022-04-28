import { Component, Inject, OnInit, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PdvService } from "src/app/services/pdv.service";

@Component({
  selector: "app-pdv-cuis",
  templateUrl: "./pdv-cuis.component.html",
  styleUrls: ["./pdv-cuis.component.css"],
})
export class PdvCuisComponent implements OnInit {
  loading = false;
  Respuesta: any;
  transaccion: any;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PdvCuisComponent>,
    private pdvService: PdvService
  ) {}

  ngOnInit(): void {}
  Solicitar(sucursal) {
    this.loading = true;
    this.pdvService.sife_pdv_mule_solicitarCuis(sucursal).then((data) => {
      this.transaccion = data.Respuesta.transaccion;
      this.Respuesta = data;
      this.loading = false;
    });
  }
  onClose() {
    this.dialogRef.close();
  }
}
