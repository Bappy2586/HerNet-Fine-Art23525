// src/component/FileDownload.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import jsPDF from 'jspdf';
import './FileDownload.css';

const FileDownload = () => {
  const downloadExcelFile = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      { Name: 'John Doe', Age: 28, Location: 'New York' },
      { Name: 'Jane Doe', Age: 22, Location: 'San Francisco' },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'sample.xlsx');
  };

  const downloadWordFile = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun('This is a sample Word document created using the docx library.'),
                new TextRun({
                  text: ' This is bold text.',
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'sample.docx');
    });
  };

  const downloadPdfFile = () => {
    const doc = new jsPDF();
    doc.text('This is a sample PDF document.', 10, 10);
    doc.save('sample.pdf');
  };

  return (
    <Container className="file-download-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">File Download</h2>
          <Button variant="primary" className="w-100 mb-2" onClick={downloadExcelFile}>
            Download Excel File
          </Button>
          <Button variant="primary" className="w-100 mb-2" onClick={downloadWordFile}>
            Download Word File
          </Button>
          <Button variant="primary" className="w-100" onClick={downloadPdfFile}>
            Download PDF File
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FileDownload;
