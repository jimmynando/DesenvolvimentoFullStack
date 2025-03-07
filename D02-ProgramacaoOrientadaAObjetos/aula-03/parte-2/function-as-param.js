function decision(question, doOk, doCancel) {
  if (question === "OK") return doOk();
  return doCancel();
}

function showOk() {
  console.log("You agreed");
}

function showCancel() {
  console.log("You canceled the execution");
}

decision("OK", showOk, showCancel);
decision("Not OK", showOk, showCancel);
