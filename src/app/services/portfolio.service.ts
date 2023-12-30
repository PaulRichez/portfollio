import { Injectable } from '@angular/core';
import { IProject } from '../models/porfolio.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public portoflioData: IProject[] = [
    {
      name: 'Ng-cursor',
      npm: 'https://www.npmjs.com/package/ng-cursor',
      github: 'https://github.com/PaulRichez/libCreator/tree/master/projects/paulrichez/ng-cursor',
      shotDescription: 'A simple Angular directive to choose the cursor css propertie',
      voirPlus: true
    },
    {
      name: 'EasyTerminal',
      npm: 'https://www.npmjs.com/package/easy-terminal',
      github: 'https://github.com/PaulRichez/easy-terminal',
      shotDescription: 'Un simple terminal écrit en vanilla js sans aucune dépendance.',
      voirPlus: true
    },
    {
      name: 'Strapi route permissions',
      npm: 'https://www.npmjs.com/package/strapi-plugin-server-route-permission',
      github: 'https://github.com/PaulRichez/strapi4-plugin-route-permission',
      shotDescription: `Un plugin pour Strapi qui offre la possibilité de configurer des rôles sur les routes du serveur pour générer des autorisations.`,
      voirPlus: true
    },
    {
      name: 'Easygroupware',
      shotDescription: `Site web (frontEnd + backEnd) de type groupware avec gestion des mails, fichiers, contacts, calendrier.`,
      github: 'https://github.com/PaulRichez/easygroupware',
      voirPlus: false
    },
    {
      name: 'Mini object path',
      npm: 'https://www.npmjs.com/package/mini-object-path',
      github: 'https://github.com/PaulRichez/mini-object-path',
      shotDescription: `Une petite bibliothèque pour obtenir ou définir un objet via le chemin.`,
      voirPlus: true
    },
    {
      name: 'Mon ancien site web',
      github: 'https://github.com/PaulRichez/MyAngVirtualCurriculumVitae',
      shotDescription: `Mon ancien site web, codé en VueJs et Firebase.`,
      voirPlus: false
    },
    {
      name: 'Animated sign pad',
      npm: 'https://www.npmjs.com/package/animated-sign-pad',
      github: 'https://www.npmjs.com/package/animated-sign-pad',
      shotDescription: `Module tout-en-un pour dessiner et générer facilement des signatures animées.`,
      voirPlus: true
    }
  ];;

  constructor() { }

}
