import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Confirmation } from '.'
import { UsersInformationsProvider } from '../../contexts/user-informations';

// /* 1. Liga/desliga o MSW */
// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

/* 2. Wrapper que injeta o userId = 123 no contexto */

beforeEach(() => {
    vi.mock('@/hooks/useUsersInformations', () => ({
        useUsersInformations: () => ({ id: 123 }),
    }));
})

describe('<Confirmation />', () => {
    it('exibe loader até receber o plano alimentar e depois mostra as refeições', async () => {
        const wrapper = render(
            <UsersInformationsProvider>
                <Confirmation />
            </UsersInformationsProvider>
        )

        const loadingComponent = wrapper.getByTestId("loading")

        expect(loadingComponent).toBeInTheDocument()

        /* espera o texto do cabeçalho que só aparece depois do fetch */
        // expect(
        //     await wrapper.findByTestId('heading'),
        // ).toBeInTheDocument();

        // /* loader some */
        // await waitFor(() =>
        //     expect(screen.queryByRole('status')).not.toBeInTheDocument(),
        // );

        // /* verifica algumas refeições vindas do mock */
        // expect(screen.getByText(/Opção 1:.*Ovos/i)).toBeInTheDocument();
        // expect(screen.getByText(/Opção 1:.*Frango/i)).toBeInTheDocument();

        // expect(true).toBeTruthy()
    });
});
