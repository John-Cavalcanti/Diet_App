import styled from "styled-components"
import logo from "../../assets/logo.png"
import cafeDaManha from "../../assets/icons/cafe-da-manha.png"
import almoco from "../../assets/icons/almoco.png"
import jantar from "../../assets/icons/jantar.png"
import lanche from "../../assets/icons/lanche.png"
import folha from "../../assets/folha.png"
import { Card } from "../../componens/card"
import { PrimaryButton } from "../../componens/primary-button"

export function Confirmation() {
    return (
        <Container>
            <Header>
                <h1><img src={logo} /></h1>
                <h2>Seu plano alimentar</h2>
                <h3>Este é seu plano alimentar personalizado.</h3>
            </Header>
            <Card>
                <MealPlanCard>
                    <CardTitle>Refeições</CardTitle>
                    <Bar />
                    <MealTitle><img src={cafeDaManha} />Café da manhã</MealTitle>
                    <MealList>
                        <li><span>Opção 1:</span> 2 ovos mexidos com 1 fatia de pão integral (50g) e 1 fruta (ex: banana, maçã ou 1 xícara de morangos).</li>
                        <li><span>Opção 2:</span>Vitamina com 1 scoop de whey protein, 200ml de leite desnatado ou bebida vegetal, 1/2 banana e 1 colher de sopa de aveia.</li>
                        <li><span>Opção 3:</span>1 xícara de iogurte natural desnatado (170g) com 3 colheres de sopa de granola sem açúcar e 1/2 xícara de frutas vermelhas</li>
                    </MealList>
                    <Bar />
                    <MealTitle><img src={almoco} />Almoço</MealTitle>
                    <MealList>
                        <li><span>Opção 1:</span>120g de peito de frango grelhado ou assado, 4 colheres de sopa de arroz integral, 1 concha média de feijão e salada à vontade (folhas verdes, tomate, pepino, cenoura ralada) com 1 colher de sopa de azeite</li>
                        <li><span>Opção 2:</span>150g de peixe assado ou cozido, 3 colheres de sopa de purê de batata doce e brócolis cozido no vapor ou salada à vontade com 1 colher de sopa de azeite.</li>
                        <li><span>Opção 3:</span>120g de carne magra (patinho, alcatra) grelhada, 4 colheres de sopa de quinoa cozida e salada colorida (alface, tomate, milho, ervilha, beterraba) com 1 colher de sopa de azeite.</li>
                    </MealList>
                    <Bar />
                    <MealTitle><img src={jantar} />Jantar</MealTitle>
                    <MealList>
                        <li><span>Opção 1:</span>1 banana com 1 colher de sopa de pasta de amendoim integral</li>
                        <li><span>Opção 2:</span>1 fatia de pão integral com 1 fatia de peito de peru light.</li>
                        <li><span>Opção 3:</span>1 iogurte natural desnatado com 1/2 xícara de frutas.</li>
                    </MealList>
                    <Bar />
                    <MealTitle><img src={lanche} />Lanches</MealTitle>
                    <MealList>
                        <li><span>Opção 1:</span>120g de peito de frango desfiado com legumes variados (cenoura, abobrinha, couve-flor) refogados em - pouco azeite.</li>
                        <li><span>Opção 2:</span>Sopa de legumes com cubos de frango ou carne magra.</li>
                        <li><span>Opção 3:</span>Omelete de 2 ovos com queijo branco e espinafre, acompanhado de salada verde.</li>
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
    display: grid;
    grid-template-areas:
    'header header'
    'mealplan feedback';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 10rem 1fr;
    height: 100%;
    background: ${({ theme }) => theme["background-color"]};
    padding: 2rem;

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
    bottom: -29.5rem;
    right: 0;
`