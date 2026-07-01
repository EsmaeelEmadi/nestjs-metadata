import { Module } from "@nestjs/common";
import { ClsModule } from "nestjs-cls";
import { ComponentsController } from "./components.controller";

@Module({
  imports: [ClsModule],
  controllers: [ComponentsController],
})
export class ComponentsModule {}
