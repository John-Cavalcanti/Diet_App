import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('weekly_diet')
export class WeeklyDiet {
  @PrimaryGeneratedColumn()
  private _id: number;

  @Column({name: 'user_id', type: 'int', nullable: false})
  private _userId: number;

  @Column({name: 'meals', type: 'jsonb', nullable: false})
  private _meals: object;

  @Column({name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false})
  private _createdAt: Date;

  @Column({name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false})
  private _updatedAt: Date;

  constructor(userId: number, meals: object) {
    this._id = 0;
    this._userId = userId;
    this._meals = meals;
    //this._createdAt = new Date();
    //this._updatedAt = new Date();
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

  getUserId()
  {
    return this._userId;
  }

  getCreatedAtDate() {
    return this._createdAt;
  }

  getUpdatedAtDate() {
    return this._updatedAt;
  }

  toObject() {
    return {
      id: this._id,
      userId: this._userId,
      meals: this._meals,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }
}
