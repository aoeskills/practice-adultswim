import styled from 'styled-components';

const StraightText = styled.p`
margin: 0;
padding: 0;
white-space: nowrap;
@media (max-width: 768px) {
  display: inline;
  white-space: inherit;
}
`;

export default StraightText;
