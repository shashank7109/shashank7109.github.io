/**
 * StructuredData — injects a JSON-LD <script> into the document <head>.
 * Always sanitizes output to prevent XSS by escaping `<` characters.
 */
export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
