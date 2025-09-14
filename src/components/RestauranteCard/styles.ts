import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
  border: 1px solid ${cores.orange};
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${cores.orange};
  color: ${cores.white};
  padding: 4px 6px;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  background-color: ${cores.orange};
  color: ${cores.white};
  text-decoration: none;
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
