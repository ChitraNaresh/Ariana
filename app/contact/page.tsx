import GoogleMap from "../components/ui/GoogleMap";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-serif mb-12 text-center">
            Connect with the Ariana Team
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>mkonhg@dongyangc.com</p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 8050504189<br />+91 6309061601</p>
              </div>

              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p>
                  Moparahalli, Doddaballapura Tq,<br />
                  Bengaluru Rural Dist – 562110
                </p>
              </div>
            </div>

            {/* Google Map */}
            <GoogleMap />
          </div>
        </div>
      </section>
    </main>
  );
}
