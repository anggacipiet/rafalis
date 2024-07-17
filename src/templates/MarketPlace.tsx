import { GSheetCmsMarketplace } from "@/component/gsheet-cms/GSheetCmsMarketplace";
import { Section } from "@/component/layout/Section";
import { StoreProps } from "@/shared/props";

const Marketplace = ({products}: StoreProps) => (
  <Section
    title="Product Kami"
    description="Jelajahi toko kami dan temukan semua penawaran kami"
  >
    <GSheetCmsMarketplace products={products}/>
  </Section>
);

export { Marketplace };


