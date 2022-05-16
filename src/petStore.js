import { makeAutoObservable } from "mobx";
import petsData from "./petsData";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }
  handleAdopt = (petId) =>
    (this.pets = this.pets.filter((pet) => pet.id !== petId));

  pets = petsData;
}
const petStore = new PetStore();
export default petStore;
