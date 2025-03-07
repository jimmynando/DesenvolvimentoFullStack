function decision(question, doOk, doCancel) {
  if (question === "OK") return doOk();
  return doCancel();
}

let beOk = function showOk() {
  console.log("You agreed");
};

let beCancel = function showCancel() {
  console.log("You canceled the execution");
};

decision("OK", beOk, beCancel);
decision("Cancel", beOk, beCancel);
