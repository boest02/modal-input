import Modal from "./build/bundle.js";

let inputs =[
  {
    name: "test1",
    label: "This is Test 1 Question:",
    type: "text",
    required: true,
  },
  {
    name: "test1a",
    label: "This is Test 1a Question:",
    type: "text",
    required: true,
  },
  {
    name: "test2",
    label: "This is Test 2 Question:",
    type: "text",
    required: false,
  },
];

let modal = new Modal();

modal.addInputs(inputs);
modal.askUser().then((result)=> console.log("@@@@@ Got Answers @@@: ", result)).catch((err=> console.log(err)));
// modal.open();

// console.log("updated");
// setInterval(()=>console.log("answers: ", modal.getAnswers()), 2000);

