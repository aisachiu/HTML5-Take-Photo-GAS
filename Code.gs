function myFunction() {
  
}
function getContent(filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}

//
// -----
//  doGet - main function for web app
// -----

function doGet() {
  return HtmlService
      .createTemplateFromFile('sampleDetector')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
