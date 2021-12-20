### Mobx

1. `npm install mobx mobx-react`
2. Create a file called `petStore` in `src`
3. define the `pets` class and inside create an empty array `pets= []`.
4. `import { makeObservable, observable, action } from "mobx";`.
5. make a constructor that will make this a store .
6. create a store and export it

### Using the store.

1. Instead of getting out pets list from our petsData file, we will now get it from our store. In App.js import petStore and replace the data file with our store.

### Adopting a pet.

1. We will move our adopt function to the store so we can access it anywere in our app. Move the function to the store.
2. Mark this functions as an action in the constructor.
3. In PetItem.js import our store and replace the fuction thats coming from props to our function that we did in the store.

### Not observing the change?

1. There's a component that needs to be marked as an observer, can you know which one it is and mark it as an observer?
2. Don't forget to `import { observer } from "mobx-react";`.
