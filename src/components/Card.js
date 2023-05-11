import { StyledCard } from './styled/Card.styled'

/**
 * ? layout={id % 2 === 0 && 'row-reverse'}
 *
 * ? We are passing row reverse to the styled card
 * ? only if we are parsin an even card based on its is
 * ? coming from the data as id (1, 2, 3, etc...) using
 * ? module operator
 */

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 ? 'row-reverse' : ''}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  )
}

export default Card
