import { http, HttpResponse } from "msw"

interface PostLoginResponse {
    token: string
}

interface PostLoginProps {
    email: string,
    password: string
}

const DEMO_EMAIL = 'demo@site.com';
const DEMO_PASS  = '12345678Aa';

export const loginMock = http.post('/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as PostLoginProps;

    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      return HttpResponse.json<PostLoginResponse>(
        { token: 'mock‑jwt‑abcdef.123.456' },
        { status: 200 },
      );
    }

    // return HttpResponse.json(
    //   { message: 'Credenciais inválidas' },
    //   { status: 401 },
    // );
  })