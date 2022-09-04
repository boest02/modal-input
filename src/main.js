import App from "./App.svelte";
class Modal {
  constructor() {
    this.manifest = {};
    this.manifest.answers = false;    
  }

  get getManifest() {
    return this.manifest;
  }

  addInputs(inputs) {
    this.manifest.inputs = inputs;
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
          resolveAnswers: () => this.getAnswers(resolve, reject)
        }
      })
    })
  }

  getAnswers(resolve, reject) {
    if(!this.manifest.answers) {
      reject(new Error("Canceled by User"));
    } else {
      resolve(this.manifest.inputs); 
    }	
  }
}

export default Modal;
