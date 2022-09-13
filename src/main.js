import App from "./App.svelte";
class Modal {
  constructor() {
    this.manifest = {};
    this.manifest.answers = {}; 
    this.manifest.styles = {};
    this.manifest.styles.headerText = "Header";
  }

  get getManifest() {
    return this.manifest;
  }

  addInputs(inputs) {
    this.manifest.inputs = inputs;
  }

  addHeader(text) {
    this.manifest.styles.headerText = text;
  }

  addSaveBtnText(text) {
    this.manifest.styles.saveBtnText = text;
  }

  askUser() {    
      return this.open();      
  }

  open() {
    return new Promise((resolve, reject)=> {
      new App({
        target: document.body,
        props: {
          manifest: this.getManifest,
          resolveAnswers: () => this.getAnswers(resolve)
        }
      })
    })
  }

  getAnswers(resolve) {
    resolve(this.manifest.answers);     
  }
}

export default Modal;
