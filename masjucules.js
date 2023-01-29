// function qui mettra en majuscule la premiere lettre de chaque mots 
function UpperCase(str) {
    return str.toUpperCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substr(1)
    })
    .join(' ')
}
console.log(UpperCase('ceci est un test de ma fonction upper case'))