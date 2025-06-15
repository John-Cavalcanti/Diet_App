import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export class User {
  private _id: number | null;
  private _name: string;
  private _email: string;
  private _birthday: Date;
  private _weight: number;
  private _height: number;
  
  private _workoutsFrequency: string;

  private _goals: string;

  private _foodRestrictions?: string;

  private _foodPreferences?: string;

  constructor(dto: CreateUserDto | UpdateUserDto) {
    this._id = null;
    this._name = dto.name;
    this._email = dto.email;
    this._birthday = new Date(dto.birthday);
    this._height = dto.height;
    this._weight = dto.weight;
    this._workoutsFrequency = dto.workoutsFrequency;
    this._goals = dto.goals;
    this._foodRestrictions = dto.foodRestrictions;
    this._foodPreferences = dto.foodPreferences;
  }

  getId(): number | null {
    return this._id;
  }

  setId(id: number): void {
    this._id = id;
  }

  getEmail(): string {
    return this._email;
  }

  setEmail(email: string): void {
    this._email = email;
  }

  getBirthday(): Date {
    return this._birthday;
  }

  setBirthday(birthday: Date): void {
    this._birthday = birthday;
  }

  getHeight(): number {
    return this._height;
  }

  setHeight(height: number): void {
    this._height = height;
  }

  getWeight(): number {
    return this._weight;
  }

  setWeight(weight: number): void {
    this._weight = weight;
  }

  getName(): string {
    return this._name;
  }

  setName(name: string): void {
    this._name = name;
  }

  getWorkoutsFrequency(): string {
    return this._workoutsFrequency;
  }

  setWorkoutsFrequency(workoutsFrequency: string): void {
    this._workoutsFrequency = workoutsFrequency;
  }

  getGoals(): string {
    return this._goals;
  }

  setGoals(goals: string): void {
    this._goals = goals;
  }

  getFoodRestrictions(): string | undefined {
    return this._foodRestrictions;
  }

  setFoodRestrictions(foodRestrictions: string): void {
    this._foodRestrictions = foodRestrictions;
  }

  getFoodPreferences(): string | undefined {
    return this._foodPreferences;
  }

  setFoodPreferences(foodPreferences: string): void {
    this._foodPreferences = foodPreferences;
  }

}
