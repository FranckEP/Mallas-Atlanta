import {
    Button,
    createTheme,
    DEFAULT_THEME,
    mergeMantineTheme,
    rem
} from '@mantine/core';

const themeOverride = createTheme({
    colors: {
        blue: [
            '#3955DB',
            '#3D59E1',
            '#425EE5',
            '#4762E8',
            '#4C67EA',
            '#516BED',
            '#5670EF',
            '#536EF2',
            '#506CF5',
            '#4D6AF8',
            '#4A68FB',
            '#4766FE',
            '#4464FF'
        ],
        red: [
            '#DB3838',
            '#E13D3D',
            '#E74242',
            '#ED4747',
            '#F34C4C',
            '#F95151',
            '#FF5757',
            '#FF5454',
            '#FF5050',
            '#FF4D4D',
            '#FF4A4A',
            '#FF4646',
            '#FF4343'
        ]
    },
    autoContrast: true,
    fontFamily: 'Lora',
    defaultRadius: 'md',
    cursorType: 'pointer',
    defaultGradient: {
        from: 'blue',
        to: 'red',
        deg: 45,
    },
    other: {
        fontWeights: {
            bold: 700,
            extraBold: 900,
        },
    },
    fontSizes: {
        xs: rem(10),
        sm: rem(11),
        md: rem(14),
        lg: rem(16),
        xl: rem(20),
    },
    lineHeights: {
        xs: '1.4',
        sm: '1.45',
        md: '1.55',
        lg: '1.6',
        xl: '1.65',
    },
    components: {
        Button: Button.extend({
          defaultProps: {
            color: 'blue',
            variant: 'filled',
          },
        }),
      },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);