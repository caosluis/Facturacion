import { Component, Inject, OnInit, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SucursalService } from "src/app/services/sucursal.service";

@Component({
  selector: "app-sucursal-cuis",
  templateUrl: "./sucursal-cuis.component.html",
  styleUrls: ["./sucursal-cuis.component.css"],
})
export class SucursalCuisComponent implements OnInit {
  loading = false;
  Respuesta: any;
  transaccion: any;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SucursalCuisComponent>,
    private sucursalService: SucursalService
  ) {}

  ngOnInit(): void {}
  Solicitar(sucursal) {
    this.loading = true;
    this.sucursalService
      .sife_sucursal_mule_solicitarCuis(sucursal)
      .then((data) => {
        this.transaccion = data.Respuesta.transaccion;
        this.Respuesta = data;
        this.loading = false;
      });
  }
  onClose() {
    this.dialogRef.close();
  }
}
