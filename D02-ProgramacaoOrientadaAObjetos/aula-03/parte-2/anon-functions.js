function decision(question, doOk, doCancel) {
  if (question === "OK") return doOk();
  return doCancel();
}

decision(
  "OK",
  function () {
    console.log("You agreed");
  },
  function () {
    console.log("You canceled the execution");
  }
);
decision(
  "Cancel",
  function () {
    console.log("You agreed");
  },
  function () {
    console.log("You canceled the execution");
  }
);
