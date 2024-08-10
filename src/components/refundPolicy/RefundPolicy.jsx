import React from "react";

const RefundPolicy = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>

      <div className="container mx-auto  sm:px-0 md:px-20">
        <div className="text-justify">
          <ul className="list-disc list-inside space-y-4 mb-6">
            <li>
              The total fee for any Program for admitted students may be paid on
              a Program basis. Such fees shall be paid within 2 days of the
              offer of admission.
            </li>
            <li>
              Fees are not refundable after the commencement of the course or
              after the student stops attending or leaves the course before its
              completion or is suspended by MTA India owing to non-attendance or
              misconduct.
            </li>
            <li>
              It is made clear that no refund of fee shall be made after the
              commencement of classes, even if the fresh admission continues
              against the vacant/dropout seats. It is further made clear that if
              a candidate seeks admission after the commencement of the classes
              and later withdraws his/her admission, no refund of fee in such
              case shall be made.
            </li>
            <li>
              Fees once deposited will not be refundable in any circumstances.
            </li>
            <li>
              MTA India reserves the right to modify and amend refund policies.
            </li>
          </ul>

          <p className="font-bold">Registered office:</p>
          <p>MICRODOT TECH ASPIRE SOLUTIONS PRIVATE LIMITED</p>
          <p>
            Khasra No 91, Ground Floor, Gali No 6, Wazirabad, New Delhi, North
            Delhi, Delhi, India, 110084
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
