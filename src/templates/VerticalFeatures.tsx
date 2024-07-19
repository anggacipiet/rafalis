import { VerticalFeatureRow } from '@/component/feature/VerticalFeatureRow';
import { Section } from '@/component/layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Kenali Kami Sebagai Calon Mitra Anda"
    description="Rafalis Erha Jaya merupakan produsen dan supplier beton pracetak (precast) di indonesia, senantiasa berkomitmen memberikan pelayanan yang terbaik kepada klien dan customer loyal kami. produk yang berkualitas, respon cepat, dan memenuhi standar kualitas yang telah ditentukan. Dengan pengalaman dan keahlian kami di bidang industri konstruksi."
  >
    <VerticalFeatureRow
      title="Customer Orientied"
      description="Memproduksi dan menjual beton yang memenuhi persyaratan pelanggan, dengan pengalaman dan keahlian kami di bidang industri konstruksi."
      image="/assets/images/customer.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Berkualitas, presisi dan mutu terjamin"
      description="Product di buat melalui quality control yang sangat ketat dengan material terbaik,memiliki standar SNI bersertifikat dan telah lolos uji lab, maka kami menjamin Produk Beton Pracetak kami akan selalu bisa memenuhi standar kualitas yang telah ditentukan."
      image="/assets/images/ISO.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Pengiriman tepat waktu dan garansi 100% uang kembali"
      description="Pengiriman tepat waktu, jika barang yang kami kirim tidak sesuai dengan spesifikasi yang anda pesan."
      image="/assets/images/konsep.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
