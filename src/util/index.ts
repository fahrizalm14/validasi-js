export enum ESchemaName {
  STRING = "str",
  NUMBER = "num",
  BOOLEAN = "bool",
  CUSTOM = "custom",
}

export const isString = (val: string) => typeof val === "string";
export const isBoolean = (val: boolean) => typeof val === "boolean";
export const isNumber = (val: number) => typeof val === "number";
