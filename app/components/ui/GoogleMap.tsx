export default function GoogleMap() {
  return (
    <div className="w-full h-[420px] rounded-xl overflow-hidden border border-zinc-200">
      <iframe
        title="Ariana Office Location"
        src="https://www.google.com/maps?q=Moparahalli%20Doddaballapura%20Karnataka&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
}
