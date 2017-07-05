let names = ["Ioana", "Lorena", "Vali", "Ramona", "Adela", "Zeno", "Paul"];
let i;
for(i = 0; i < names.length; i++) {
    names.sort();
    document.write("<pre>" + (i+1) + ":"+ names[i] + "</pre>");
}