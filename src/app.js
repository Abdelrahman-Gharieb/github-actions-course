function greet(name) {
    return `Hello, ${name}!`
}

module.exports = greet; // Ensure Function Is exportable 
// If run directly, print output (useful for debugging)

//if (require.main == module) {
//    console.log(greet("World"));
//}