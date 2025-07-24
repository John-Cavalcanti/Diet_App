import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  public id: number | null;

  @Column({name: 'username', type: 'varchar', length: 50, nullable: false})
  public name: string;
  
  @Column({name: 'email', type: 'varchar', length: 100, nullable: false})
  public email: string;
  
  @Column({name: 'birthday', type: 'date', nullable: false})
  public birthday: Date;

  @Column({name: 'weight', type: 'float', nullable: false})
  public weight: number;

  @Column({name: 'height', type: 'float', nullable: false})
  public height: number;

  @Column({name: 'password', type: 'varchar', length: 255, nullable: false})
  public password: string;

  @Column({name: 'workouts_frequency', type: 'varchar', length: 255, nullable: false})
  public workoutsFrequency: string;

  @Column({name: 'goals', type: 'varchar', length: 255, nullable: false})
  public goals: string;

  @Column({name: 'food_restrictions', type: 'varchar', length: 255, nullable: false})
  public foodRestrictions?: string;

  @Column({name: 'food_preferences', type: 'varchar', length: 255, nullable: false})
  public foodPreferences?: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp', nullable: false})
  public createdAt: Date;

  constructor(dto?: CreateUserDto | UpdateUserDto) {
    this.id = (dto as any)?.id;
    this.name = dto?.name ?? '';
    this.email = dto?.email ?? '';
    this.birthday =  dto?.birthday ? new Date(dto.birthday) : new Date();
    this.height = dto?.height ?? 0;
    this.weight = dto?.weight ?? 0;
    this.workoutsFrequency = dto?.workoutsFrequency ?? '';
    this.goals = dto?.goals ?? '';
    this.foodRestrictions = dto?.foodRestrictions;
    this.foodPreferences = dto?.foodPreferences;
    this.password = dto?.password ?? '';
  }

  getId(): number | null {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getBirthday(): Date {
    return this.birthday;
  }

  setBirthday(birthday: Date): void {
    this.birthday = birthday;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getWorkoutsFrequency(): string {
    return this.workoutsFrequency;
  }

  setWorkoutsFrequency(workoutsFrequency: string): void {
    this.workoutsFrequency = workoutsFrequency;
  }

  getGoals(): string {
    return this.goals;
  }

  setGoals(goals: string): void {
    this.goals = goals;
  }

  getFoodRestrictions(): string | undefined {
    return this.foodRestrictions;
  }

  setFoodRestrictions(foodRestrictions: string): void {
    this.foodRestrictions = foodRestrictions;
  }

  getFoodPreferences(): string | undefined {
    return this.foodPreferences;
  }

  setFoodPreferences(foodPreferences: string): void {
    this.foodPreferences = foodPreferences;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      birthday: this.birthday,
      height: this.height,
      weight: this.weight,
      workoutsFrequency: this.workoutsFrequency,
      goals: this.goals,
      foodRestrictions: this.foodRestrictions,
      foodPreferences: this.foodPreferences,
      createdAt: this.createdAt,
    };
  }
}
