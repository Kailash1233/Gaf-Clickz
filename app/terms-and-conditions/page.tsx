import ContactPage from "@/components/contact-page";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pb-20">
        <div className="relative w-full h-[20vh] md:h-[65vh]">
          <Image
            src="/images/banner.png"
            alt="Terms and Conditions Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-quiche tracking-widest">
            Terms and Conditions
          </h1>
          <div className="prose max-w-none space-y-8 text-gray-300 font-gotham">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Booking and Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A deposit of 50% of the total session fee is required to
                  confirm your booking.
                </li>
                <li>
                  Full payment must be made before or on the day of the session
                  unless otherwise agreed in writing.
                </li>
                <li>
                  The deposit is non-refundable unless the session is cancelled
                  by the Studio.
                </li>
                <li>Payments can be made via Gpay, card, or cash.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Cancellations and Rescheduling
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Clients may reschedule a session with at least 10 days&apos;
                  notice without penalty.
                </li>
                <li>
                  If a session is cancelled by the Client within 15 days of the
                  scheduled time, the deposit will be forfeited.
                </li>
                <li>
                  The Studio reserves the right to cancel or reschedule a
                  session due to unforeseen circumstances. In such cases, the
                  Client will be offered a refund or alternative booking.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Client Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Clients are responsible for arriving on time for their
                  scheduled session.
                </li>
                <li>
                  The Client must notify the Studio of any specific requests or
                  preferences regarding the session in advance.
                </li>
                <li>
                  Clients must obtain permission for any location, props, or
                  people to be photographed and ensure all individuals being
                  photographed consent to the session.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Copyright and Usage
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio retains full copyright to all images taken during
                  the session.
                </li>
                <li>
                  The Studio grants the Client a personal license to use the
                  images for non-commercial purposes.
                </li>
                <li>
                  The Studio may use the images for promotional purposes unless
                  the Client opts out in writing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Delivery of Photos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Digital photos will be delivered within 4 weeks following the
                  session.
                </li>
                <li>
                  The Studio is not responsible for delays caused by technical
                  issues or force majeure.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Privacy and Data Protection
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio collects personal information to facilitate the
                  booking.
                </li>
                <li>
                  The Studio agrees to keep personal information confidential.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio is not liable for any accidents, injuries, or
                  damages during the session.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                8. Behaviour and Conduct
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Client agrees to behave professionally during the session.
                </li>
                <li>
                  The Studio reserves the right to end a session early due to
                  inappropriate conduct.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Force Majeure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio will not be liable for failures due to events
                  beyond its control.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Amendments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  These terms may be amended, and Clients will be notified of
                  material changes.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <ContactPage />
    </>
  );
}
