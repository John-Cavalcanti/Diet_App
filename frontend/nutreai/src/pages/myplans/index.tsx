import styled from "styled-components"
import { Sidebar } from "../../componens/sidebar"
import { Header } from "../../componens/header"
import { WeekDays } from "./components/week-days"
import { MealsList } from "./components/meal-card"
import { useState, useEffect } from "react"
import { TopActions } from "./components/top-actions"
import { getWeeklyDiet } from "../../services/weekly-diet/get"
import { MealDetailsModal, type MealInput } from "../../componens/meal-details-modal"
import { ConfirmInfoModal } from "../../componens/confirm-info-modal"
import type { UserInfo } from "../../@types/user-info"
import { getUserInfo } from "../../services/user"
import { postWeeklyDiet } from "../../services/weekly-diet/post"

const weekDayNames = [
  "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
]
const weekDayKeys = [
  "domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"
]

interface BackendMeal {
  tipoRefeicao: string;
  descricao: string;
  calorias: number;
  carboidratos: number;
  proteinas: number;
  gorduras: number;
}

export function MyPlans() {
  const [activeDay, setActiveDay] = useState<number>(new Date().getDay())
  const [weeklyDiet, setWeeklyDiet] = useState<any>(null)
  const [selectedMeal, setSelectedMeal] = useState<MealInput | null>(null);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [userInformation, setUserInformation] = useState<UserInfo | null>(null);
  const [isLoadingNewDiet, setIsLoadingNewDiet] = useState(false);

  const today = new Date()
  const selectedDate = new Date(today)
  selectedDate.setDate(today.getDate() + (activeDay - today.getDay()))

  const formattedDate = selectedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long"
  })

  const todayKey = weekDayKeys[activeDay]

  const handleOpenDetails = (mealData: BackendMeal) => {
    let formattedName = mealData.tipoRefeicao;
    switch(mealData.tipoRefeicao){
      case "cafe_da_manha": formattedName = "Café da Manhã";
        break;
      case "almoco": formattedName = "Almoço";
        break;
      case "jantar": formattedName = "Jantar";
        break;
      case "lanche": formattedName = "Lanche";
        break;
    }

    const mealForModal: MealInput = {
      name: formattedName,
      totalCalories: mealData.calorias,
      ingredients: [mealData.descricao],
      macrosInGrams: {
        carbs: mealData.carboidratos,
        protein: mealData.proteinas,
        fat: mealData.gorduras,
      },
    };
    setSelectedMeal(mealForModal);
  };
  
  const handleCloseModal = () => {
    setSelectedMeal(null);
  };

  function handleNewDietModal(){
    setIsConfirmModalVisible(true);
  }

  async function handleConfirm(){
    if(!userInformation) return;

    setIsLoadingNewDiet(true);

    try{
      console.log("Gerando dieta...");
      const newDiet = await postWeeklyDiet();
      setIsConfirmModalVisible(false);
      setIsLoadingNewDiet(false);
      
      // substituir por encaminhamento p/ página: Rotina gerada após ajustes
      console.log("Dieta gerada com sucesso!\n", newDiet);
      setWeeklyDiet(newDiet);

    } catch(error){
      console.error("Falha ao gerar a dieta: ", error);
    }
  }

    // coleta de dados da dieta
  useEffect(() => {
    async function fetchDiet() {
      const data = await getWeeklyDiet()
      setWeeklyDiet(data.at(-1)._meals) // retorna a última dieta gerada pelo usuário
    }
    fetchDiet()
  }, [weeklyDiet])

  // coleta de dados do usuário
  useEffect(() => {
    getUserInfo().then(data => setUserInformation(data));
  }, []);

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Sidebar />
      <MainContent>
        <Content>
          <ActionsWeekRow>
            <WeekDays activeDay={activeDay} onChange={setActiveDay} />
            <TopActions onNewDiet={handleNewDietModal} />
          </ActionsWeekRow>
          <Title>
            {weekDayNames[activeDay]}, {formattedDate}
          </Title>
          {weeklyDiet && weeklyDiet[todayKey] && (
            <MealsList meals={weeklyDiet[todayKey]} onOpenDetails={handleOpenDetails} />
          )}
        </Content>
      </MainContent>
      <MealDetailsModal
        isOpen={!!selectedMeal}
        onClose={handleCloseModal}
        meal={selectedMeal}
      />
      <ConfirmInfoModal
        isOpen={isConfirmModalVisible}
        onClose={() => setIsConfirmModalVisible(false)}
        onConfirm={handleConfirm}
        onEdit={() => { /* implementar futuramente*/ }}
        isSubmitting = {isLoadingNewDiet}
        userData={userInformation}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fff;
  position: relative;
`

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`

const MainContent = styled.div`
  width: calc(100% - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

`
const Content = styled.div`
  width: fit-content;
  height: fit-content;
`
const Title = styled.h2`
  font-size: 1.5rem;
  color: #217A47;
  margin-bottom: 3.5rem;
  padding-left: 0.5rem;
`

const ActionsWeekRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
  gap: 21rem; 
`