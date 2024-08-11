import styled from 'styled-components';
import { Link } from 'gatsby';

const DetailButton = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  text-decoration: none;
  
  background-color: ${props => props.style.background ? props.style.background : "black"};
  color: ${props => props.style.color ? props.style.color :"white" };

  &:visited {
    color: ${props => props.style.color ? props.style.color :"white" };
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default DetailButton;