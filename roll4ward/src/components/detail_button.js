import styled from 'styled-components';
import { Link } from 'gatsby';

const DetailButton = styled(Link)`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  
  background-color: ${props => props.background ? props.background : "black"};
  color: ${props => props.color ? props.color :"white" };

  &:visited {
    color: ${props => props.color ? props.color :"white" };
  }
`;

export default DetailButton;