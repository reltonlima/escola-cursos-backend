const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/**
 * Gera um certificado em PDF para um aluno.
 * @param {string} studentName - Nome do aluno.
 * @param {string} courseName - Nome do curso.
 * @param {string} outputPath - Caminho para salvar o certificado.
 */
const generateCertificate = (studentName, courseName, outputPath) => {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(outputPath));

    doc.fontSize(25).text('Certificado de Conclusão', { align: 'center' });
    doc.moveDown();
    doc.fontSize(20).text(`Este certificado é concedido a: ${studentName}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(20).text(`Pelo curso: ${courseName}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text('Data de emissão: ' + new Date().toLocaleDateString(), { align: 'center' });

    doc.end();
};

/**
 * Função para emitir um certificado e retornar o caminho do arquivo.
 * @param {string} studentName - Nome do aluno.
 * @param {string} courseName - Nome do curso.
 * @returns {Promise<string>} - Caminho do certificado gerado.
 */
const issueCertificate = async (studentName, courseName) => {
    const outputPath = path.join(__dirname, '../../certificates', `${studentName.replace(/\s+/g, '_')}_certificate.pdf`);
    generateCertificate(studentName, courseName, outputPath);
    return outputPath;
};

module.exports = {
    issueCertificate,
};