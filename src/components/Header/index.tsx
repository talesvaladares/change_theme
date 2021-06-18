import { useContext } from 'react';
import {ThemeContext} from 'styled-components';
import Switch from 'react-switch';
import {shade} from 'polished';

import {useTheme} from '../../context/themeContext'

import {Container} from './styles';


export function Header(){

  const {colors, title} = useContext(ThemeContext);
  const {toggleTheme} = useTheme();

  return(
    <Container>
      <p>Olá</p>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}     
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />

    </Container>
  );
}