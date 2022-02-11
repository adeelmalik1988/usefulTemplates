// routes
import React from "react"
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
// import ScrollToTop from './components/ScrollToTop';
// import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

function App() {
  return (
    <ThemeConfig>
      {/* <ScrollToTop /> */}
      <GlobalStyles />
      {/* <BaseOptionChartStyle /> */}
      <Router />
    </ThemeConfig>
  );
}

export default App;
