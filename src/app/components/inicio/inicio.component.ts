import { Component, OnInit } from '@angular/core';
import { SifeFechaHora } from 'src/app/models/sife-fecha-hora';
import { Socket } from 'ngx-socket-io';
import { SifeFechaHoraService } from 'src/app/services/sife-fecha-hora.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  

  sifefechahora = this.socket.fromEvent<Document>('Sifefechahora');
  
  constructor(private dataApi: SifeFechaHoraService,private socket: Socket) { }
  
  ngOnInit() {
    
  }
  
  
}
