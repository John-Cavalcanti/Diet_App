export class WeeklyDiet {
  private _id: number;
  private _userId: number;
  private _meals: object;
  private _createdAt: Date | null;
  private _updatedAt: Date | null;

  constructor(userId: number, meals: object) {
    this._id = 0;
    this._userId = userId;
    this._meals = meals;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  setId(id: number) {
    this._id = id;
  }

  setUserId(id: number) {
    this._userId = id;
  }

  setMeals(meals: object) {
    this._meals = meals;
  }

  setCreatedAtDate(date: Date) {
    this._createdAt = date;
  }

  setUpdatedAtDate(date: Date) {
    this._updatedAt = date;
  }

  getMeals() {
    return this._meals;
  }

  getId() {
    return this._id;
  }

  getCreatedAtDate() {
    return this._createdAt;
  }

  getUpdatedAtDate() {
    return this._updatedAt;
  }

  getUserId() {
    return this._userId;
  }
}
