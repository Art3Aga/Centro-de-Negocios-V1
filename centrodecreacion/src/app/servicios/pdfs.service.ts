import { Injectable } from '@angular/core';
import { pdfMake } from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfsService {
  // private readonly pdfFonts: any;
  // pdfMake: any;
  constructor() {
    // this.pdfFonts = require('pdfmake/build/vfs_fonts');
  }

  GenerarPDF() {
    // this.pdfMake.vfs = this.pdfFonts.pdfMake.vfs;
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Txt('Hola Mundo').bold().italics().end
    );
    pdf.create().open();
    // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).open();
  }
}
