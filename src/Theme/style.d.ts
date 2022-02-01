import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defaultMaxWidth: string;
    brandWhite: string;
    brandBlue: {
      active: string;
      inactive: string;
    };
    textColor: string;
    bgColor: {
      mainBg: string;
      subBg: string;
    };
  }
}
