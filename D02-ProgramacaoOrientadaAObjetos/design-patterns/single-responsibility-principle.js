import fs from "fs";

class Journal {
  constructor() {
    Journal.count = 0;
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;

    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}

class PersistenceManager {
  save(filename, data) {
    fs.writeFileSync(filename, data);
  }

  load(filename) {}

  loadFromUrl(url) {}
}

let j = new Journal();
let pm = new PersistenceManager();

let filename = "/home/jimmytri0/repos/javascript/design-patterns/temp/journal.txt";

j.addEntry("I cried today");
j.addEntry("I ate a bug today");

pm.save(filename, j.toString());

console.log(j.toString());
