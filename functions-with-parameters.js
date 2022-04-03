/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"
function greeter(name) {
  console.log('Hoi ' + name + '!');
}
greeter('Zana')

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds (minutes){
  return console.log(minutes * 60)
}
minutesToSeconds(1)
minutesToSeconds(3)
minutesToSeconds(23)

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(string1, string2) {
  //*Function* *FunctionName* *(FunctionValues, FunctionValues*
  return console.log(string1 + string2)
  //*Return*= Gives assignment on what to call *Console.log(Merge function values by '+')
}
merge('abra','cadabra')
//*CallFunctionName* -> (Call function value by opening with *''* and call second by closing with *,*)
merge('zoet','sappig')


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(ageOfDog) {
  // *function* *functionname* *functionValueExpectation*
  const multiplier = ageOfDog * 7
  //*Added const to add the multiplier* *Const name to call upon later on* *Call upon functionvalue to multiply by destined value*
  return  console.log('Jouw hond is ' + multiplier + ' jaar oud in mensenjaren')
  // Return consolelog with sentence and call upon const where needed
}
calculateDogYears(6)
calculateDogYears(2)

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"
 function wrapper(word, character) {
   // *function* *functionname* *expected function values*
   const mechanism = character + word + character
   // implemented what i want my function to do inside a CONST variable
   return console.log(mechanism)
   // console log with simply the mechanism inside
 }
wrapper('bril', '*')
wrapper('beep', '"')
wrapper('kaas','Q')
//*functionname*: to call upon my function -> added the values by opening with ' and distance them by ,

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."
function createDetailString(firstName, lastName, profession){
return console.log('Het beroep van ' + firstName + ' ' + lastName + ' is ' + profession + '.')
}
createDetailString('Jan', 'Jansen', 'docent')
createDetailString('Kees', 'Klaasen', 'brandweerman')