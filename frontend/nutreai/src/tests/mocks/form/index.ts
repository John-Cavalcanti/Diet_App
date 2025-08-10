import { http, HttpResponse } from 'msw'

interface PostFormProps {
    name: string,
    email: string,
    birthday: string,
    height: number,
    weight: number,
    workoutsFrequency: string,
    goals: string,
    foodRestrictions: string,
    foodPreferences: string
}

interface PostFormResponse {
	_id: number,
	_name: string,
	_email: string,
	_birthday: string,
	_weight: number,
	_height: number,
	_workoutsFrequency: string
	_goals: string,
	_foodRestrictions: string,
	_foodPreferences: string
}

const fakeUser: PostFormResponse = {
  _id: 999,
  _name: 'Usuário Demo',
  _email: 'demo@site.com',
  _birthday: '1990-01-01',
  _height: 180,
  _weight: 75,
  _workoutsFrequency: '1-3 vezes na semana',
  _goals: 'Ganhar massa',
  _foodRestrictions: 'Alergia à nozes"',
  _foodPreferences: 'Low‑carb',
};

export const postFormMock =   http.post('/api/users', async () => {

    return HttpResponse.json(fakeUser, {status: 200});
  })