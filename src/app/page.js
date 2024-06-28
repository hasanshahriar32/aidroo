import Banner from "@/components/Banner";
import Business from "@/components/Business/Business";
import Category from "@/components/Category/Category";
import Consumer from "@/components/Consumer/Consumer";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
      <Business />
      <Consumer />
    </Layout>
  );
}
