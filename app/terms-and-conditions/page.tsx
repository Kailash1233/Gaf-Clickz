import Dock from "@/components/Dock";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Dock />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[20vh] w-full">
          <Image
            src="/images/TandC.jpg"
            alt="Fashion Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">Terms and Conditions</h1>
          <div className="prose max-w-none space-y-8">
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
                <li>Payments can be made via Gpay, card, cash.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Cancellations and Rescheduling
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Clients may reschedule a session with at least 10 day&apos;s
                  notice without penalty.
                </li>
                <li>
                  If a session is cancelled by the Client within 15 days of the
                  scheduled time, the deposit will be forfeited.
                </li>
                <li>
                  The Studio reserves the right to cancel or reschedule a
                  session due to unforeseen circumstances, such as illness or
                  equipment failure. In such cases, the Client will be offered a
                  refund or alternative booking.
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
                  the session, including digital files and prints.
                </li>
                <li>
                  The Studio grants the Client a personal license to use the
                  images for non-commercial purposes. Commercial use requires a
                  separate agreement.
                </li>
                <li>
                  The Studio may use the images for promotional purposes,
                  including online portfolios, social media, and advertising. If
                  you prefer not to have your images used in this way, you must
                  inform the Studio in writing prior to the session.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Delivery of Photos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Digital photos will be delivered to the Client within 4 weeks
                  following the session, unless otherwise agreed upon.
                </li>
                <li>
                  The Studio is not responsible for any delays caused by
                  technical issues, third-party vendors, or force majeure.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Privacy and Data Protection
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio collects personal information (such as name,
                  contact information) to facilitate the booking and completion
                  of the session.
                </li>
                <li>
                  The Studio agrees to keep your personal information
                  confidential and will not share it with third parties without
                  your consent, except as required by law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio will not be held liable for any accidents,
                  injuries, or damages that occur during the session.
                </li>
                <li>
                  The Client agrees to release the Studio from any claims or
                  liabilities related to the session, including damage to
                  personal property or injury to persons.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                8. Behaviour and Conduct
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Client agrees to behave professionally and respectfully
                  during the session.
                </li>
                <li>
                  The Studio reserves the right to end a session early if the
                  Client&apos;s behaviour is deemed inappropriate, disruptive,
                  or unsafe. In such cases, no refund will be provided.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Force Majeure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Studio will not be liable for any failure or delay in
                  performing its obligations due to causes beyond its reasonable
                  control, including but not limited to natural disasters,
                  illness, or other unforeseen events.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Amendments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  These terms and conditions may be amended from time to time.
                  The Client will be notified of any material changes, and the
                  new terms will apply to future bookings.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
