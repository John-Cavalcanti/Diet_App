import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('weekly_diet')
export class WeeklyDiet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'user_id', type: 'int', nullable: false})
  userId: number;

  @Column({name: 'meals', type: 'jsonb', nullable: false})
  meals: object;

  @Column({name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false})
  createdAt: Date;

  @Column({name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false})
  updatedAt: Date;

  constructor(userId: number, meals: object) {
    this.id = 0;
    this.userId = userId;
    this.meals = meals;
  }

  setId(id: number) {
    this.id = id;
  }

  setUserId(id: number) {
    this.userId = id;
  }

  setMeals(meals: object) {
    this.meals = meals;
  }

  setCreatedAtDate(date: Date) {
    this.createdAt = date;
  }

  setUpdatedAtDate(date: Date) {
    this.updatedAt = date;
  }

  getMeals() {
    return this.meals;
  }

  getId() {
    return this.id;
  }

  getUserId()
  {
    return this.userId;
  }

  getCreatedAtDate() {
    return this.createdAt;
  }

  getUpdatedAtDate() {
    return this.updatedAt;
  }

  toObject() {
    return {
      id: this.id,
      userId: this.userId,
      meals: this.meals,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
