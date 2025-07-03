import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '../pages/form/components/form-inputs';

interface FormData {
    birthDate: string;
    weight: string;
    height: string;
    gender: string;
}

export function UserFormCard() {
    const methods = useForm<FormData>();
    const { handleSubmit } = methods;

    const onSubmit = (data: FormData) => {
        console.log("Dados do formulário:", data);
        // lugar de botar os dados no back ending, eu pensei em deixar o voltar e o proximo levando ao youtube, mas acho que fica melhor assim;
    };

    return (
        <FormProvider {...methods}>
            <CardContainer onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <Title>Vamos te conhecer melhor!</Title>
                    <Subtitle>
                        Informe alguns dados para criar seu plano alimentar.
                        Essas informações são importantes para personalizar
                        sua alimentação.
                    </Subtitle>
                </Header>

                <FormContent>
                    {}
                    <FormInput
                        id="birthDate"
                        label="Data de nascimento"
                        placeholder="dd/mm/aaaa"
                        type="date"
                    />
                    <FormInput
                        id="weight"
                        label="Peso"
                        placeholder="0.00kg"
                        type="number"
                    />
                    <FormInput
                        id="height"
                        label="Altura"
                        placeholder="Altura (centímetros)"
                        type="number"
                    />
                    <FormInput
                        id="gender"
                        label="Sexo"
                        placeholder="Sexo"
                        type="select"
                    />
                </FormContent>

                <Actions>
                    <Button type="button" variant="secondary">Voltar</Button>
                    <Button type="submit" variant="primary">Próximo</Button>
                </Actions>
            </CardContainer>
        </FormProvider>
    );
}

const CardContainer = styled.form`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 450px; /* Ajuste a largura máxima conforme necessário */
    margin: 40px auto; /* Centraliza o card na página */
`;

const Header = styled.div`
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
`;

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px; /* Espaçamento entre os inputs */
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 8px;
`;

interface ButtonProps {
    variant: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    flex: 1; /* Para os botões ocuparem espaço igual */

    ${props => props.variant === 'primary' && `
        background-color: #388e3c; /* Verde para Próximo */
        color: #fff;
        border: 1px solid #388e3c;

        &:hover {
            background-color: #2e7d32;
        }
    `}

    ${props => props.variant === 'secondary' && `
        background-color: #fff; /* Branco para Voltar */
        color: #388e3c;
        border: 1px solid #388e3c;

        &:hover {
            background-color: #f0f0f0;
        }
    `}
`;