import { Carrinho as TCarrinho } from "../api/carrinho/Carrinho";

export const CARRINHO_TITLE_FIELD = "id";

export const CarrinhoTitle = (record: TCarrinho): string => {
  return record.id || String(record.id);
};
