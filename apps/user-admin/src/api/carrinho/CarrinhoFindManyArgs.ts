import { CarrinhoWhereInput } from "./CarrinhoWhereInput";
import { CarrinhoOrderByInput } from "./CarrinhoOrderByInput";

export type CarrinhoFindManyArgs = {
  where?: CarrinhoWhereInput;
  orderBy?: Array<CarrinhoOrderByInput>;
  skip?: number;
  take?: number;
};
