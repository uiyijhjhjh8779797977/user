import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarrinhoServiceBase } from "./base/carrinho.service.base";

@Injectable()
export class CarrinhoService extends CarrinhoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
