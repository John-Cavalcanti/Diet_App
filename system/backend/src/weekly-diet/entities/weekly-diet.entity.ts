export class WeeklyDiet {
  id: number;
  userId: number; // pseudo chave estrangeira
  meals: any[];
  createdAt: Date;
  updatedAt: Date;
}
