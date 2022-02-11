//import React from "react"
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import breakpoints from './breakpoints';
//import Viewport from './viewPort';




const themeOptions: any = useMemo(
    () => ({
        palette,
        shape,
        typography,
        shadows,
        customShadows,
        breakpoints
    }), []
)

const theme = createTheme(themeOptions);

theme.components = componentsOverride(theme)

export default theme