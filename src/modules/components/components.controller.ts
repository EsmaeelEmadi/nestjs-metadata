import {
  Controller,
  Get,
  Param,
  Query,
  Headers,
  Version,
} from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiTags } from "@nestjs/swagger";
import { OkDto } from "@wrk-t/ts-exc";
import { ComponentsService } from "../../services/components.service";
import { SimpleEntityDto } from "../../common/simple-dto";

@ApiTags("Components")
@Controller("components")
export class ComponentsController {
  constructor(private readonly svc: ComponentsService) {}

  // ── Render endpoint ─────────────────────────────────────────

  @Get(":id")
  @Version("1")
  @ApiHeader({ name: "x-lang", required: false })
  @ApiHeader({ name: "x-tenant-id", required: false })
  @ApiOperation({
    summary: "Get component render data",
    description:
      "Returns a fully resolved component tree: blueprint metadata, elements grouped by slot, referenced sub-components, and tenant overrides applied.",
    operationId: "get_component_render_v1",
  })
  async findById(
    @Param("id") id: string,
    @Query("include") include?: string,
    @Query("context") context?: string,
    @Headers("x-lang") lang?: string,
    @Headers("x-tenant-id") tenantId?: string,
  ) {
    if (include === "render") {
      const result = await this.svc.getRender(id, {
        locale: lang ?? "en",
        tenantId: tenantId ?? null,
        context: context ? JSON.parse(context) : undefined,
      });
      return new OkDto(result);
    }
    const record = await this.svc.selectOneById(id);
    return new OkDto(new SimpleEntityDto(record as any));
  }

  // ── List endpoint ──────────────────────────────────────────

  @Get()
  @Version("1")
  @ApiOperation({
    summary: "List components",
    operationId: "get_components_list_v1",
  })
  async findMany(@Query() query: any) {
    const r = await this.svc.findMany(query);
    return new OkDto(r);
  }
}
