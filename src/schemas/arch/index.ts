// ── Component architecture (v2) ──────────────────────────────
//
// Four tables that replace forms/tables/screens/screen_widgets
// with a unified component model:
//
//   arch_component_blueprints  — "class": slots, overridable, contract
//   arch_components            — "instance": concrete config, elements
//   arch_component_elements    — children filling blueprint slots
//   arch_component_overrides   — tenant-level customisation
//
// These coexist with the old system (forms, tables, screens, etc.).
// All tables use the "arch_" prefix while both systems are live.

export {
  archComponentBlueprints,
  archComponentBlueprintsRelations,
  type IBlueprintSlot,
  type IBlueprintContractParam,
  type IBlueprintContractOutput,
} from "./componentBlueprints";

export {
  archComponents,
  archComponentsRelations,
  type IPermissionVisibility,
} from "./components";

export {
  archComponentElements,
  archComponentElementsRelations,
  type IElementParamBinding,
  type IElementGrid,
} from "./componentElements";

export {
  archComponentOverrides,
  archComponentOverridesRelations,
} from "./componentOverrides";
