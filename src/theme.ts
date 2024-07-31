import {
    createTheme,
    DEFAULT_THEME,
    mergeMantineTheme,
} from '@mantine/core';
  
const themeOverride = createTheme({
    fontFamily: "Lora", 
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);