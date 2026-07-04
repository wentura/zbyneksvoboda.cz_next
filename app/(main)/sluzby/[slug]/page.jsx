import { notFound } from "next/navigation";
import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { getServiceBySlug, servicesData } from "@/app/data/servicesData";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Služba nenalezena – Zbyněk Svoboda" };
  }

  return {
    title: `${service.title} – Zbyněk Svoboda`,
    description: service.detail.metaDescription,
    alternates: { canonical: `/sluzby/${service.slug}` },
    openGraph: {
      title: `${service.title} – Zbyněk Svoboda`,
      description: service.detail.metaDescription,
      url: `https://zbyneksvoboda.cz/sluzby/${service.slug}`,
      locale: "cs_CZ",
      type: "website",
    },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
