const animals = require('./animals.json')

type AnimalType = {
  animal_name: string
  hair: number
  feathers: number
  eggs: number
  milk: number
  airborne: number
  aquatic: number
  predator: number
  toothed: number
  backbone: number
  breathes: number
  venomous: number
  fins: number
  legs: number
  tail: number
  domestic: number
  catsize: number
  class_type: number
}

const fetchAquaticAnimalsNames = () => {
  const aquaticAnimals = animals.filter((animal: AnimalType) => animal.aquatic === 1)
  const namesOfAquaticAnimals = aquaticAnimals.map((animal: AnimalType) => animal.animal_name).sort()
  return namesOfAquaticAnimals

}

const answerAnimalsWithHair = () => {
  const animalsWithHair = animals.filter((animal: AnimalType) => animal.hair === 1)
  const animalsWithHairLength = animalsWithHair.length

  console.log('1. How many animals have hair?', animalsWithHairLength, '\n')
}

const answerAquaticAnimalNames = () => {
  const namesOfAquaticAnimals = fetchAquaticAnimalsNames()

  console.log('2. List the names of the aquatic animals:')
  console.log(namesOfAquaticAnimals, '\n')
}

const answerLetterAverage = (letter: string) => {
  const namesOfAquaticAnimals = fetchAquaticAnimalsNames()
  let letterOccurences = 0

  namesOfAquaticAnimals.map((name: string) => {
    const splitName = name.split('')

    const letterOccurence = splitName.filter((splitNameLetter: string) => splitNameLetter === letter).length
    letterOccurences = letterOccurences + letterOccurence

  })

  const average = letterOccurences / namesOfAquaticAnimals.length

  console.log('3. What is the average number of times the letter "a" appears in the names of aquatic animals?', average, '\n')

}

const answerTypeOfData = () => {

  console.log('4. What is the type of the data in animals.json?')
  console.log('In a terms of the whole dataset it\'s a JSON array of objects, in terms of each object it has a type of:')
  console.log(`
    type AnimalType = {
      animal_name: string
      hair: number
      feathers: number
      eggs: number
      milk: number
      airborne: number
      aquatic: number
      predator: number
      toothed: number
      backbone: number
      breathes: number
      venomous: number
      fins: number
      legs: number
      tail: number
      domestic: number
      catsize: number
      class_type: number
    }
  `)
}

const answerIncorrectAnswer = () => {
  console.log('5. Which of the answers below is not correct and why is it not correct?')
  console.log('Answer 2. because "turtle" is missing!')
}

const answerQuestions = () => {
  answerAnimalsWithHair()
  answerAquaticAnimalNames()
  answerLetterAverage('a')
  answerTypeOfData()
  answerIncorrectAnswer() // Such poor naming I know... but it tickled me
}

answerQuestions()
