import { Injectable } from "@angular/core";
import * as glob from "../global";
import * as moment from "moment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FacturaElectronicaLoteService {
  constructor(private http: HttpClient) {}

  sife_facturaElectronica_lote_get(empresa, fecha) {
    var Fecha = moment(fecha).format("YYYY-MM-DD");
    const url_api =
      glob.host +
      ":" +
      glob.port +
      '/api/sife_facturaElectronica_lote?filter={"where": {"nit":"' +
      empresa +
      '","fecha": {"between": ["' +
      Fecha +
      'T00:00:00.000Z","' +
      Fecha +
      'T23:59:59.999Z"]}},"order":["fecha DESC"]}';

    return this.http.get<any[]>(url_api).toPromise();
  }
  sife_facturaElectronica_lote_estado_get(idlote) {
    const url_api =
      glob.host +
      ":" +
      glob.port +
      '/api/sife_facturaElectronica_lote_estado?filter={"where":{"idlote":"' +
      idlote +
      '"},"order":["fecha DESC"]}';

    return this.http.get<any[]>(url_api).toPromise();
  }
  sife_facturaElectronica_lote_verificar(Lote) {
    const url_api =
      glob.host +
      ":" +
      glob.port +
      "/api/sife_facturaElectronica_lote/validapaquete";
    return this.http.post<any>(url_api, Lote).toPromise();
  }
  sife_facturaElectronica_lote_get_limit(Lote) {
    const url_api =
      glob.host + ":" + glob.port + "/api/sife_facturaElectronica_lote/" + Lote;
    return this.http.get<any>(url_api).toPromise();
  }

  sife_offlineregistraeventos(empresa){
    const url_api =
      glob.host + ":" + glob.port + "/api/sife_facturaElectronica_lote/mule/offlineregistraeventos";
    return this.http.post<any>(url_api, empresa).toPromise();
  }

  sife_facturaElectronica_lote_reenvio(Lote) {
    console.log("LOS DATOS SON" + JSON.stringify(Lote))
    const url_api =
      glob.host +
      ":" +
      glob.port +
      "/api/sife_facturaElectronica_lote/mule/offlineenviopaquete";
    return this.http.post<any>(url_api, Lote).toPromise();
  }
}
