import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public reservations: Reservation[] = [];
  constructor() { }

  getReservations() : Reservation[] {
    return this.reservations; 
  }

  getRservation(id: string) : Reservation | undefined {
    return this.reservations.find(r => r.id === id);
  }

  addReservation(reservation: Reservation) : void {
    this.reservations.push(reservation);
  }

  updateReservation(reservation: Reservation) : void {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    this.reservations[index] = reservation;
  }

  deleteReservation(id: string):void{
    const index = this.reservations.findIndex(r => r.id === id);
    this.reservations.splice(index, 1);
  }
  
}
