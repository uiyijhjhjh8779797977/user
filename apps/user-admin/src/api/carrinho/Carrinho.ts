import { JsonValue } from "type-fest";

export type Carrinho = {
  createdAt: Date;
  email: string;
  id: string;
  imagem: JsonValue;
  updatedAt: Date;
};
