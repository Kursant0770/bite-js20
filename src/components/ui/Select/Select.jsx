import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export function Select({ options = [], value, onChange, placeholder = 'Выберите...' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <Wrapper ref={ref}>
      <Trigger onClick={() => setOpen((p) => !p)}>
        <TriggerText $hasValue={!!selected}>{selected ? selected.label : placeholder}</TriggerText>
        <Chevron $isOpen={open} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6l4 4 4-4"
            stroke="#666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Chevron>
      </Trigger>

      {open && (
        <Dropdown>
          {options.map((opt) => (
            <Option
              key={opt.value}
              $isSelected={opt.value === value}
              onClick={() => {
                onChange?.(opt.value)
                setOpen(false)
              }}
            >
              {opt.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
`

const TriggerText = styled.span`
  color: ${({ $hasValue }) => ($hasValue ? '#111' : '#aaa')};
`

const Chevron = styled.svg`
  flex-shrink: 0;
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
`

const Option = styled.li`
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  color: #111;
`
