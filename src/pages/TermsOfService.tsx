import React from "react";

const TermsOfService = () => {
  return (
    <main
      style={{ padding: "120px 5% 80px", maxWidth: "1000px", margin: "0 auto" }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "2rem" }}>
        Terms & Conditions
      </h1>

      <div
        className="policy-content"
        style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
      >
        <p style={{ marginBottom: "1.5rem" }}>
          Capital Bridge is a firm believer of transparency and values and
          consumer satisfaction. Your use of this website is solely based upon
          your acceptance of the Terms & Conditions included in this document.
          By using this website, you acknowledge and accept these Terms &
          Conditions.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Acceptance of Terms
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          If you don't agree with any section of these Terms and Conditions, you
          must not make use of this website. Capital Bridge LLC reserves the
          right to change these Terms & Conditions at its sole discretion from
          time to time.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Broker Status
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Capital Bridge is a Freight Logistics Company operating as a "Freight
          Broker" and is licensed by the Department of Transportation (DOT),
          Federal Motor Carrier Safety Administration (FMCSA) and other
          government agencies as required by law.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Usage Limits
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          This Site is provided by us solely to assist customers in meeting
          their logistics needs, gathering information, determining the
          availability of travel-related goods and services, making legitimate
          reservations or otherwise transacting business with travel suppliers,
          and for no other purposes.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Your Rights
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          You can provide us with the information necessary to provide you with
          the shipment facilities requested according to the terms defined in
          this Privacy Policy and Capital Bridge Terms of Use. You can choose
          not to provide us with any information, although it may be needed to
          take advantage of certain features offered on Capital Bridge.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Retention of Information
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          We will retain your personal information for the period necessary to
          fulfill the purposes outlined in our Privacy Policy unless a longer
          retention period is required or permitted by law.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Contact Us
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          If you have any questions or concerns about these Terms & Conditions,
          please contact us at <strong>cs@capitalbridgelogistics.com</strong> or{" "}
          <strong>(888) 575-8884</strong>.
        </p>
      </div>
    </main>
  );
};

export default TermsOfService;
