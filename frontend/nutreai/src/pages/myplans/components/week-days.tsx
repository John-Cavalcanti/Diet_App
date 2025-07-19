import styled from "styled-components"
import { useState, useEffect } from "react"

const days = ["DOM.", "SEG.", "TER.", "QUA.", "QUI.", "SEX.", "SAB."]

interface WeekDaysProps {
  activeDay?: number
  onChange: (dayIndex: number) => void
}

export function WeekDays({ activeDay, onChange }: WeekDaysProps) {
  const [selectedDay, setSelectedDay] = useState<number>(activeDay ?? new Date().getDay())

  useEffect(() => {
    if (activeDay !== undefined) setSelectedDay(activeDay)
  }, [activeDay])

  return (
    <DaysRow>
      {days.map((day, idx) => (
        <DayButton
          key={day}
          active={selectedDay === idx}
          onClick={() => {
            setSelectedDay(idx)
            onChange(idx)
          }}
        >
          {day}
        </DayButton>
      ))}
    </DaysRow>
  )
}

const DaysRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const DayButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => active ? theme["green-100"] : "transparent"};
  color: ${({ active, theme }) => active ? theme["green-700"] : "#222"};
  border: none;
  border-radius: 24px;
  padding: 0.5rem 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme["green-100"]};
    color: ${({ theme }) => theme["green-700"]};
  }
`