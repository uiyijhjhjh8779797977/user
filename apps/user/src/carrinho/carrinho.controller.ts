import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarrinhoService } from "./carrinho.service";
import { CarrinhoControllerBase } from "./base/carrinho.controller.base";

@swagger.ApiTags("carrinhos")
@common.Controller("carrinhos")
export class CarrinhoController extends CarrinhoControllerBase {
  constructor(
    protected readonly service: CarrinhoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
