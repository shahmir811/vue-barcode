import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';

// convert orderNo to base64Barcode
// convert base64Barcode to PNGImage
// Use PNGImage in pdf downloaded file

const generateAndDownloadBarcodeInPDF = (orderNo) => {
	let makeBase64Image = convertTextToBase64Barcode(orderNo);

	convertBase64ToPNGImage(makeBase64Image).then((realImage) => {
		const doc = new jsPDF('p', 'mm', 'a4');
		// Following we add 5 barcode images
		doc.addImage(realImage, 'PNG', 10, 10);
		doc.addImage(realImage, 'PNG', 10, 60);
		doc.addImage(realImage, 'PNG', 10, 110);
		doc.addImage(realImage, 'PNG', 10, 160);
		doc.addImage(realImage, 'PNG', 10, 210);

		doc.save('barcode.pdf');
	});
};

const convertBase64ToPNGImage = (url) => {
	return new Promise((resolve) => {
		let img = new Image();
		img.onload = () => resolve(img);
		img.src = url;
	});
};

const convertTextToBase64Barcode = (text) => {
	let canvas = document.createElement('canvas');
	JsBarcode(canvas, text, { format: 'CODE39' });
	return canvas.toDataURL('image/png');
};

export { generateAndDownloadBarcodeInPDF };
