import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CarrinhoWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  imagem?: JsonFilter;
};
