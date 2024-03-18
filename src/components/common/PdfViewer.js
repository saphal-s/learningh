import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import abc from "../../data/JavaScriptNote.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = (item) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }
  return (
    <div>
      <Nav
        pageNumber={pageNumber}
        numPages={numPages}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
      <div
        hidden={loading}
        style={{ height: "calc(100vh - 64px)", overflow: "auto" }}
        // className="flex items-center"
      >
        <div className="h-full flex justify-center mx-auto">
          <Document
            file={abc}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            renderMode="canvas"
            className=""
          >
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={onPageLoadSuccess}
              onRenderError={() => setLoading(false)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

function Nav({ pageNumber, numPages, goToNextPage, goToPreviousPage }) {
  return (
    <nav
      className="bg-black"
      style={{
        borderTop: "1px solid #fff",
      }}
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div
              className="flex flex-shrink-0 items-center "
              style={{
                color: "#fff",
              }}
            >
              <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
                <span>Previous</span>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                <span>Next</span>
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="bg-gray-900 text-white rounded-md px-3 text-sm font-medium">
              <span>{pageNumber}</span>
              <span className="text-gray-400"> / {numPages}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PdfViewer;
