import React from "react"
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
} from '@mui/material/styles';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import breakpoints from './breakpoints';
//import { ThemeOptions } from "@mui/system";
//import Viewport from './viewPort';
//import theme from "./theme"


declare module '@mui/material/styles' {
    interface Theme {
        palette: typeof palette,
        shape: typeof shape,
        customShadows: typeof customShadows,
        //breakpoints: typeof breakpoints

    }

    interface ThemeOptions {
        paletter?: typeof palette,
        shape?: typeof shape,
        customShadows?: typeof customShadows,
        //breakpoints?: typeof breakpoints

    }
}

ThemeConfig.propTypes = {
    children: PropTypes.node
  };
  
  export default function ThemeConfig({ children }) {
    const themeOptions = useMemo(
      () => ({
        palette,
        shape,
        typography,
        shadows,
        customShadows
      }),
      []
    );
  
    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);
  
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
  