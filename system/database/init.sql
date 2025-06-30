CREATE USER jvpsc WITH PASSWORD 'jvpscDesPW';

CREATE TABLE IF NOT EXISTS USERS(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Using UUID for primary key
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  birthday DATE NOT NULL,
  height INT NOT NULL,
  weight INT NOT NULL,
  workouts_frequency VARCHAR(255) NOT NULL,
  goals VARCHAR(255) NOT NULL,
  food_restrictions VARCHAR(255),
  food_preferences VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS WEEKLY_DIET(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Using UUID for primary key
  user_id UUID NOT NULL,
  meals JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

