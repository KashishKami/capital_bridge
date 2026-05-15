
const PrivacyPolicy = () => {
  return (
    <main
      style={{ padding: "120px 5% 80px", maxWidth: "1000px", margin: "0 auto" }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "2rem" }}>
        Privacy Policy
      </h1>

      <div
        className="policy-content"
        style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
      >
        <p style={{ marginBottom: "1.5rem" }}>
          At Capital Bridge Logistics, we are committed to protecting the
          privacy and security of our clients' personal information. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal data.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Collection of Personal Information
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          We may collect personal information such as names, addresses, email
          addresses, and phone numbers when you engage with our services. This
          information is collected solely for the purpose of providing and
          improving our services, and is obtained through voluntary submission
          or through interactions with our website or customer service
          representatives.
        </p>
        <p
          style={{
            marginBottom: "1.5rem",
            fontWeight: 600,
            color: "var(--text-main)",
          }}
        >
          SMS opt-in or phone numbers for the purpose of SMS are not shared with
          any third parties or affiliate companies for marketing purposes.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Usage of Personal Information
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          We use personal information to communicate with clients, process
          orders, and provide customer support. Additionally, we may use this
          information to improve our services, personalize user experiences, and
          send relevant updates or promotional materials with consent. We take
          reasonable measures to protect the security of your personal
          information and prevent unauthorized access, disclosure, or
          alteration.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          SMS For Consent Communication
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          The information such as Phone Numbers obtained as part of the SMS
          consent process will not be shared with third parties for marketing
          purposes.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Types of SMS Communications
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Upon consenting to receive text messages from Capital Bridge, you may
          receive communications related to:
          <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Order Confirmation</li>
            <li>Tracking Updates</li>
          </ul>
        </p>
        <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
          Example: Hello, your shipment has been confirmed. The Order ID for
          your shipment is #XXXX. Reply STOP to opt out of SMS messaging at any
          time.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Opt-Out Options
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          Customers can opt-out of SMS messaging from Capital Bridge by replying
          STOP at any time to any received SMS message. Once opted out, they
          will receive no further SMS communication. Customers can opt back in
          at any time by replying START.
        </p>

        <h2
          style={{
            color: "var(--text-main)",
            fontSize: "1.5rem",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Changes to Privacy Policy
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          We reserve the right to update this Privacy Policy to reflect changes
          in our practices or to comply with legal requirements. Any changes
          will be posted on our website, and clients will be notified of
          significant updates via email or other communication channels.
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
          If you have any questions or concerns about our Privacy Policy or the
          handling of your personal information, do not hesitate to contact us
          at <strong>cs@capitalbridgelogistics.com</strong> or{" "}
          <strong>(888) 575-8884</strong>.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
