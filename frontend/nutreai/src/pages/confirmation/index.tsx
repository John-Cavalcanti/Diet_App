import styled from "styled-components"
import logo from "../../assets/logo.png"
import cafeDaManha from "../../assets/icons/cafe-da-manha.png"
import almoco from "../../assets/icons/almoco.png"
import jantar from "../../assets/icons/jantar.png"
import lanche from "../../assets/icons/lanche.png"
import folha from "../../assets/folha.png"
import { Card } from "../../componens/card"
import { PrimaryButton } from "../../componens/primary-button"
import { useEffect, useState } from "react"
import type { Meal, WeeklyDiet } from "../../@types/meal-plan"
import { postWeeklyDiet } from "../../services/weekly-diet/post"
import { ClipLoader } from "react-spinners"

export function Confirmation() {
    const [refeicoesAgrupadas, setRefeicoesAgrupadas] = useState<
        { nome: string; opcoes: Meal[] }[]
    >([]);

    const agruparRefeicoesPorTipo = (mealPlan: WeeklyDiet) => {
        const todasRefeicoes: Meal[] = Object.values(mealPlan).flat();

        const tipos = ["cafe_da_manha", "almoco", "jantar", "lanche"];

        const refeicoesAgrupadas = tipos.map((tipo) => {
            const opcoes = todasRefeicoes
                .filter((refeicao) => refeicao.tipoRefeicao === tipo)
                .slice(0, 3)

            return {
                nome: tipo,
                opcoes
            };
        });

        return refeicoesAgrupadas;
    };

    useEffect(() => {
        const fetchMealPlan = async () => {
            console.log('ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')
                try {
                    const result = await postWeeklyDiet();
                    setRefeicoesAgrupadas(agruparRefeicoesPorTipo(result!))
                } catch (error) {
                    console.error("Erro ao buscar plano alimentar:", error);
                }
        };

        fetchMealPlan();
    }, []);

    if(refeicoesAgrupadas.length == 0){
         return <ClipLoader data-testid="loading" color="#123abc" loading={true} size={50} />;
    }

    return (
        <Container>
            <Header>
                <h1><img src={logo} /></h1>
                <h2 data-testid='heading'>Seu plano alimentar</h2>
                <h3>Este é seu plano alimentar personalizado.</h3>
            </Header>
            <Card>
                <MealPlanCard>
                    <CardTitle>Refeições</CardTitle>
                    <Bar />
                    <MealTitle><img src={cafeDaManha} />Café da manhã</MealTitle>
                    <MealList>
                        {
                            refeicoesAgrupadas[0].opcoes.map((opcao, i) => (
                                <li><span>Opção {i + 1}:</span>{opcao.descricao}</li>
                            ))
                        }
                    </MealList>
                    <Bar />
                    <MealTitle><img src={almoco} />Almoço</MealTitle>
                    <MealList>
                        {
                            refeicoesAgrupadas[1].opcoes.map((opcao, i) => (
                                <li><span>Opção {i + 1}:</span>{opcao.descricao}</li>
                            ))
                        }
                    </MealList>
                    <Bar />
                    <MealTitle><img src={jantar} />Jantar</MealTitle>
                    <MealList>
                        {
                            refeicoesAgrupadas[2].opcoes.map((opcao, i) => (
                                <li><span>Opção {i + 1}:</span>{opcao.descricao}</li>
                            ))
                        }
                    </MealList>
                    <Bar />
                    <MealTitle><img src={lanche} />Lanches</MealTitle>
                    <MealList>
                        {
                            refeicoesAgrupadas[3].opcoes.map((opcao, i) => (
                                <li><span>Opção {i + 1}:</span>{opcao.descricao}</li>
                            ))
                        }
                    </MealList>
                </MealPlanCard>
            </Card>
            <SecondColumnContainer>
                <Card>
                    <FeedbacksCard>
                        <CardTitle>
                            Gostaria de sugerir alguma alteração?
                        </CardTitle>
                        <Input placeholder="Descreva aqui suas preferências ou sugestões de mudanças na rotina..." />
                        <Description>Seu feedback ajuda a ajustar ainda mais seu plano alimentar!</Description>
                        <PrimaryButton>Enviar Feedback</PrimaryButton>
                    </FeedbacksCard>
                </Card>
                <section>
                    <PrimaryButton>Confirmar Plano Alimentar</PrimaryButton>
                </section>
            </SecondColumnContainer>
            <BackgroundImage src={folha} />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-areas:
    'header header'
    'mealplan feedback';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 10rem 1fr;
    height: 100%;
    background: ${({ theme }) => theme["background-color"]};
    padding: 2rem;
    padding-bottom: 5rem;

    row-gap: 3rem;
    column-gap: 3rem;
`

const Header = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 3rem;

    gap: 0.5rem;

    h2 {
        font-size: 2.4rem;
    }

    h3 {
        font-size: 1.25;
    }
`
const Bar = styled.hr`
  margin: 24px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const MealPlanCard = styled.div`
    grid-area: mealplan;
    width: 100%;
    padding: 2rem;
`

const CardTitle = styled.h4`
    font-size: 1.5rem;
    gap: 1rem;
`

const MealTitle = styled.h5`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;

    img {
        margin-right: 8px;
        width: 1.5rem;
            
    }
`

const MealList = styled.ul`
    margin-top: 8px;
    margin-left: 20px;
    list-style: disc;

    li {
        margin-bottom: 10px;
        line-height: 1.5;

        span {
            font-weight: bold;
        }
    }
`

const SecondColumnContainer = styled.div`
    grid-area: feedback;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 3rem;

    section {
        width: 100%;
        padding-inline: 7rem;
    }
`

const FeedbacksCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;

    text-align: center;

    gap: 2rem;
`

const Input = styled.textarea`
    width: 100%;
    height: 7rem;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 0.875rem;
    resize: none;
    outline: none;

    &::placeholder {
        
        color: #aaa;
    }

    &:focus {
        border-color: ${({ theme }) => theme["green-700"]};
    }
`

const Description = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme["text-color"]};
`

const BackgroundImage = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`