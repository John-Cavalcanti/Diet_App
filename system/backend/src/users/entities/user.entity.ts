import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  private _id: number | null;

  @Column({name: 'username', type: 'varchar', length: 50, nullable: false})
  private _name: string;
  
  @Column({name: 'email', type: 'varchar', length: 100, nullable: false})
  private _email: string;
  
  @Column({name: 'birthday', type: 'date', nullable: false})
  private _birthday: Date;

  @Column({name: 'weight', type: 'float', nullable: false})
  private _weight: number;

  @Column({name: 'height', type: 'float', nullable: false})
  private _height: number;

  @Column({name: 'password', type: 'varchar', length: 255, nullable: false})
  private _password: string;

  @Column({name: 'workouts_frequency', type: 'varchar', length: 255, nullable: false})
  private _workoutsFrequency: string;

  @Column({name: 'goals', type: 'varchar', length: 255, nullable: false})
  private _goals: string;

  @Column({name: 'food_restrictions', type: 'varchar', length: 255, nullable: false})
  private _foodRestrictions?: string;

  @Column({name: 'food_preferences', type: 'varchar', length: 255, nullable: false})
  private _foodPreferences?: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp', nullable: false})
  private _createdAt: Date;

  constructor(dto: CreateUserDto | UpdateUserDto) {
    this._id = (dto as any).id || null;
    this._name = dto.name;
    this._email = dto.email;
    this._birthday = new Date(dto.birthday);
    this._height = dto.height;
    this._weight = dto.weight;
    this._workoutsFrequency = dto.workoutsFrequency;
    this._goals = dto.goals;
    this._foodRestrictions = dto.foodRestrictions;
    this._foodPreferences = dto.foodPreferences;
    this._password = dto.password;
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

  getPassword(): string {
    return this._password;
  }

  setPassword(password: string): void {
    this._password = password;
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

  getCreatedAt(): Date {
    return this._createdAt;
  }

  toObject() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      birthday: this._birthday,
      height: this._height,
      weight: this._weight,
      workoutsFrequency: this._workoutsFrequency,
      goals: this._goals,
      foodRestrictions: this._foodRestrictions,
      foodPreferences: this._foodPreferences,
      createdAt: this._createdAt,
    };
  }
}
