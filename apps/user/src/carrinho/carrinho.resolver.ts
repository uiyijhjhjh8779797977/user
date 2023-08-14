import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CarrinhoResolverBase } from "./base/carrinho.resolver.base";
import { Carrinho } from "./base/Carrinho";
import { CarrinhoService } from "./carrinho.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Carrinho)
export class CarrinhoResolver extends CarrinhoResolverBase {
  constructor(
    protected readonly service: CarrinhoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
