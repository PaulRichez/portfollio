import { Injectable } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DateToCurrentPipe } from '../pipes/dateToCurrent.pipe';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
declare var myCvData: any;
@Injectable({
  providedIn: 'root'
})
export class CvService {
  private myCvData = myCvData;
  constructor(
    private dateToCurrentPipe: DateToCurrentPipe,
  ) { }

  getMyCV() {
    console.log('myCvData', myCvData);
    const age = this.dateToCurrentPipe.transform(myCvData.user.birthDay);

    const getCoding = () => {
      const _width = 150;
      const stack = [];
      stack.push({ text: 'Mes Compétences', style: 'title' });
      myCvData.coding.forEach((c: any) => {
        stack.push(c.key);
        const widths = [c.value / 100 * _width, (100 - c.value) / 100 * _width];
        stack.push(
          {
            margin: [0, 0, 0, 10],
            table: {
              widths,
              heights: 6,
              body: [
                [
                  '', ''
                ],
              ],
            },
            layout: {
              fillColor: (rowIndex: any, node: any, columnIndex: any) => {
                return (columnIndex === 0) ? 'white' : null;
              },
              hLineColor: 'white',
              vLineColor: 'white',
            },
          }
        );
      });
      return { stack };
    }

    const getContact = () => {
      const stack = [];
      stack.push({ text: 'Contact', style: 'title' });
      stack.push({ text: `${myCvData.user.email}` });
      stack.push({ text: `${myCvData.user.phoneNumber}` });
      stack.push({ text: `${myCvData.user.linkedin}`, style: 'link' });
      stack.push({ text: `${myCvData.user.github}`, style: 'link' });
      stack.push({ text: `${myCvData.user.website}`, style: 'link' });
      return { stack };
    }

    const getLangues = () => {
      const stack = [];
      stack.push({ text: 'Langues', style: 'title' });
      stack.push({ ul: myCvData.languages.map((l: any) => l.key) })
      return { stack };
    }

    const getDiplomas = () => {
      const stack: any = [{ text: 'Mes diplômes', style: 'title' },];

      myCvData.diplomas.forEach((d: any) => {
        stack.push({
          table: {
            widths: [100, '*'],
            body: [
              [
                { text: getFormatedDateForDiplomas(d) },
                [{ text: d.title }, { text: d.description }]
              ],
            ]
          },
          margin: [0, 15, 0, 0],
          layout: {
            defaultBorder: false,
          },
        });
      });
      return { stack };
    }

    const getExperiences = () => {
      const stack: any = [{ text: 'Mes Experiences', style: 'title' },];
      myCvData.experiences.forEach((d: any) => {
        stack.push({
          table: {
            widths: [100, '*'],
            body: [
              [
                { text: getFormatedDateForDiplomas(d) },
                [
                  { text: `${d.job} - ${d.business}` },
                  { ul: d.descriptions.map((l: any) => l), style: 'desc' }
                ]
              ],
            ]
          },
          margin: [0, 15, 0, 0],
          layout: {
            defaultBorder: false,
          },
        });
      });
      return { stack };
    }

    const getFormatedDateForDiplomas = (item: any) => {
      if (item.startDate && item.endDate == 'Now') {
        return "Depuis " + new Date(item.startDate).getFullYear();
      } else if (item.startDate && item.endDate) {
        return (
          "De " +
          new Date(item.startDate).getFullYear() +
          " à " +
          new Date(item.endDate).getFullYear()
        );
      } else {
        return "En " + new Date(item.startDate).getFullYear().toString();
      }
    }

    const column1: any[] = [
      {
        image: 'profil',
        fit: [100, 100],
        alignment: 'center',
      },
      { text: `${myCvData.user.postName}`, alignment: 'center', margin: [0, 5, 0, 5], },
      { text: `${myCvData.user.firstName} ${myCvData.user.lastName}`, alignment: 'center', margin: [0, 5, 0, 5], },
      { text: `${age} Ans - ${myCvData.user.city}`, alignment: 'center' },
      getCoding(),
      getLangues(),
      getContact(),
    ];
    const column2: any[] = [
      getExperiences(),
      getDiplomas(),
    ];


    const docDefinition: TDocumentDefinitions = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [0, 0, 0, 0],
      defaultStyle: {
        fontSize: 13,
        lineHeight: 1.2
      },
      images: {
        profil: window.location.origin + '/assets/images/profil.jpg',
      },
      info: {
        title: 'Paul Richez CV',
        author: 'Paul Richez',
        subject: 'CV de Paul Richez',
        keywords: 'CV',
        creator: 'Paul Richez',
      },
      styles: {
        title: {
          bold: true,
          margin: [0, 20, 0, 5],
          fontSize: 14,
          decoration: 'underline'
        },
        link: {
          fontSize: 9
        },
        desc: {
          fontSize: 11,
          color: 'grey',
        }
      },
      content: [
        {
          table: {
            widths: [200, '*',],
            heights: 10000,
            body: [
              [
                { stack: column1, color: 'white', margin: [15, 15, 15, 15] },
                column2
              ],
            ],
          },
          layout: {
            fillColor: function (rowIndex: any, node: any, columnIndex: any) {
              return (columnIndex === 0) ? 'black' : null;
            },
            defaultBorder: false,
          },
        }
      ]
    }
    return pdfMake.createPdf(docDefinition);
  }
}
