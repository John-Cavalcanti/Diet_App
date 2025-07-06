import React, { useState } from 'react';
import BreakfastModal from '../componens/card_info_refeicoes';

const CardInfoRefeicoesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BreakfastModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
};

export default CardInfoRefeicoesPage;