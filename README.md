# animals
Thank you for taking the time to do this excercise. Please time yourself answering the five questions below. If you enjoy the excercise and can do them in about 30 minutes, we would love to interview you.

All of the questions below are based on [this dataset of zoo animals](./animals.json).

To to start the app via `nodemon`, run
```
yarn start
```

Please fork this repo and send your workings back to alan.thomson@helloself.com.

## Questions
1. How many animals have hair?
2. List the names of the aquatic animals
3. What is the average number of times the letter __"a"__ appears in the names of aquatic animals?
4. What is the type of the data in animals.json?
5. Which of the answer below is not correct and why is it not correct?

## Answers
1. One
2. ```
   [
   "alligator",
   "anchovy",
   "barracuda",
   "crocodile",
   "dart frog",
   "firebelly",
   "flounder",
   "gharial",
   "halibut",
   "jellyfish",
   "mackerel",
   "marlin",
   "salamander",
   "scallop",
   "siren",
   "squid",
   "tree frog",
   "trout",
   "wart toad"
   ]
   ```
3. `0.9`

4. ``` 
   type Animal = {
    animal_name: string;
    hair: number;
    feathers: number;
    eggs: number;
    milk: number;
    airborne: number;
    aquatic: number;
    predator: number;
    toothed: number;
    backbone: number;
    breathes: number;
    venomous: number;
    fins: number;
    legs: number;
    tail: number;
    domestic: number;
    catsize: number;
    class_type: number;
   }
   ```

