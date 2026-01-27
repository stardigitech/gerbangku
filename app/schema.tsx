export function OrganizationSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Gerbangku",
                    url: "https://gerbangku.com",
                    logo: "https://gerbangku.com/logo.png",
                    description:
                        "Unified digital platform to manage business websites, operations, and workflows.",
                    sameAs: []
                })
            }}
        />
    );
}