export {}
let message = 'Welcome Back';
console.log(message);

// This error is coming after compiling, this error happens because the file is treated as a script rather than a module, a module has its own scope whereas scripts share the global scope, to get rid of this error we need to add we need to add an export statement at the top which exports nothing by adding an import or export statement typescript treats this file as a module instead of a script, so at the top the statement export and then nothing just a pair of curly braces.