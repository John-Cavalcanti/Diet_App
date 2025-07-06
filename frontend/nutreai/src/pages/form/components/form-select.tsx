// FormSelect.tsx
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

export function FormSelect() {
  const { register } = useFormContext();

  return (
    <Container>
      <Label htmlFor="sexo">Sexo</Label>

      <Select id="sexo" {...register("sexo")}>
        <option value="" disabled hidden>
          Selecione…
        </option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </Select>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: fit-content;
  font-size: 0.875rem;
  color: #000;
  padding-inline: 0.5rem;
  background: #fff;

  margin-bottom: -0.5rem;
  margin-left: 1rem;
  z-index: 1;
`;

const Select = styled.select`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  outline: none;
  color: #000;
  background: #fff;

  &:focus {
    border-color: #888;
  }

  option[disabled] {
    color: #aaa;
  }
`;
