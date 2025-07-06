//used npm i chalk to install a instance of chalk in my project. 
// "npm install" or "npm i" is the terminal command to install a package
//npm i ou npm instal alone, without any package name, is used to restore all dependencys in your project (rebuild /node_modules)
//"npm instal [package_name] -D" to install devDependencies
//"npm unistall [package_name]" to completely remove packages from project
//npm fund to see which dependencies are installed and from where they came
//npm update [package_name] to update a package, if it has a new version released
import chalk from "chalk";
import logSymbols from 'log-symbols';

console.log(logSymbols.success, chalk.green.italic("Servidor iniciado com sucesso!"));
console.log(logSymbols.error, chalk.red.bgBlack.bold("Servidor com problema!"))

//console.log(chalk.blue.bgGreen.italic("Olá, eu sou"));
//console.log(chalk.green.bgCyan.bold("Jarvis"));