declare module '@docusaurus/plugin-content-docs' {
  type ExtractSidebarItemConfig<T> = T extends (infer U)[] ? U : never;
  export type SidebarItemConfig = ExtractSidebarItemConfig<SidebarsConfig[string]>;
}