import "next";

declare module "next" {
  interface ModularizeImportsConfig {
    [key: string]: {
      transform: string;
    };
  }

  interface ExperimentalConfig {
    modularizeImports?: ModularizeImportsConfig;
  }
}