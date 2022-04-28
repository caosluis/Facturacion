import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as glob from "../global";

@Injectable({
  providedIn: "root",
})
export class RolesService {
  constructor(private http: HttpClient) {}
  sife_roles_get() {
    const url_api = glob.host + ":" + glob.port + "/api/sife_roles";
    return this.http.get<any[]>(url_api).toPromise();
  }
  sife_roles_get_roleID(role) {
    const url_api =
      glob.host +
      ":" +
      glob.port +
      '/api/sife_roles/?filter={"where":{"role":"' +
      role +
      '"}}';
    return this.http.get<any[]>(url_api).toPromise();
  }
  sife_roles_patch(roleID, configuracion) {
    const url_api = glob.host + ":" + glob.port + "/api/sife_roles/" + roleID;
    return this.http
      .patch<any[]>(url_api, { configuracion: configuracion })
      .toPromise();
  }
  sife_roles_post(role) {
    console.log(role);

    const url_api = glob.host + ":" + glob.port + "/api/sife_roles";
    return this.http.post<any[]>(url_api, role).toPromise();
  }
  sife_roles_delete(roleID) {
    const url_api = glob.host + ":" + glob.port + "/api/sife_roles/" + roleID;
    return this.http.delete<any[]>(url_api).toPromise();
  }
}
