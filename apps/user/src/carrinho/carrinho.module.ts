import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarrinhoModuleBase } from "./base/carrinho.module.base";
import { CarrinhoService } from "./carrinho.service";
import { CarrinhoController } from "./carrinho.controller";
import { CarrinhoResolver } from "./carrinho.resolver";

@Module({
  imports: [CarrinhoModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarrinhoController],
  providers: [CarrinhoService, CarrinhoResolver],
  exports: [CarrinhoService],
})
export class CarrinhoModule {}
