import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  active: boolean;
}

const MenuLink = styled(Link)<MenuLinkProps>`
  padding: 10px 15px;
  box-sizing: content-box;
  border-bottom: 3px solid #ffffff;

  ${({ active }) => active && `border-bottom: 3px solid #3e78cf;`}

  :link {
    text-decoration: none;
  }

  :hover {
    border-bottom: 3px solid #3e78cf;
  }
`;

export { MenuLink };
