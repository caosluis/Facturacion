import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as glob from "../../../global";

@Component({
  selector: 'app-cuadrofacturas',
  templateUrl: './cuadrofacturas.component.html',
  styleUrls: ['./cuadrofacturas.component.css']
})
export class CuadrofacturasComponent implements OnInit {
  host = glob.host;
  safeSrc: SafeResourceUrl;
   
  constructor(
    private sanitizer: DomSanitizer
  ) {
    //QAS
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.host+":41/app/kibana#/dashboard/33360a50-dd94-11eb-9f81-cd97a988a105?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A5000)%2Ctime%3A(from%3Anow%2Fd%2Cto%3Anow%2Fd))");
    //PRD
    //this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.host+":41/app/kibana#/dashboard/85bd8ee0-94ca-11ec-aa9b-9547488f64a2?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A2000)%2Ctime%3A(from%3Anow%2Fd%2Cto%3Anow%2Fd))");
    
   }

  ngOnInit(): void {
  }

}
