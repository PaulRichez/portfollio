export interface ITimeLine {
  nom: string;
  events: IEvent[];
}

export interface IEvent {
  dateDebut: string;
  dateFin: string;
  titre: string;
  description: string;
  footer: string;
}
