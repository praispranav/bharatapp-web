const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1>Privacy Policy for Bharatapp Messenger</h1>
        <p>
          This Privacy Policy explains how <strong>Learn Now Academy</strong>{" "}
          ("we," "us," or "our") handles information from and about you when you
          use our application, <strong>Bharatapp Messenger</strong>.
        </p>

        <hr />

        <h2>1. Information We Collect</h2>
        <p>
          We collect information to provide and enhance our services. The types
          of information we collect include:
        </p>
        <ul>
          <li>
            <strong>Information You Provide Directly:</strong> When you use our
            app, we may collect information you voluntarily provide, such as
            your name, phone number, profile picture, and any other data you
            input when setting up your account.
          </li>
          <li>
            <strong>Contacts Information:</strong> To help you connect with
            people you know, the app requests permission to access your device's
            contact list. With your explicit consent, we may use this
            information to identify which of your contacts are also using the
            app and to facilitate the creation of new chats and calls.{" "}
            <strong>
              We do not store or upload your entire contact list to our servers.
            </strong>{" "}
            This data is processed on your device to create a temporary,
            encrypted hash for contact matching.
          </li>
          <li>
            <strong>Voice and Video Call Data:</strong> We collect metadata
            related to your calls, such as the time, date, and duration of the
            call, and the participants involved.{" "}
            <strong>
              We do not record, store, or otherwise access the content of your
              voice and video communications.
            </strong>{" "}
            All calls are end-to-end encrypted, ensuring that the content
            remains private between the participants.
          </li>
          <li>
            <strong>Usage and Device Data:</strong> As is common in modern
            applications, we automatically collect data about your device and
            how you interact with the app. This can include your IP address,
            device type, operating system, unique device identifiers, and a
            record of the features you use. This data is often used for
            analytics to help us understand app usage patterns and improve
            performance.
          </li>
        </ul>

        <hr />

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>To Provide and Manage the Service:</strong> To operate the
            core functionality of the app, manage your user account, and enable
            seamless voice and video calling.
          </li>
          <li>
            <strong>To Improve App Functionality:</strong> We analyze usage data
            to identify trends, diagnose technical issues (e.g., crashes or
            bugs), and introduce new features to enhance your experience.
          </li>
          <li>
            <strong>To Secure Our Services:</strong> We use data to monitor for
            and prevent fraudulent activity, unauthorized access, and other
            security risks.
          </li>
          <li>
            <strong>To Communicate with You:</strong> We may use your contact
            information to send you important service updates, security alerts,
            and customer support messages.
          </li>
        </ul>

        <hr />

        <h2>3. Third-Party Services and Data Sharing</h2>
        <p>
          The app may integrate with third-party services and libraries to
          provide certain functionalities. These services may have their own
          privacy policies governing the data they collect. We may share your
          information with these third parties only to the extent necessary to
          provide the services you have requested. Examples may include:
        </p>
        <ul>
          <li>
            <strong>Analytics Providers:</strong> We may use third-party
            analytics services (e.g., Google Analytics for Firebase) to better
            understand how our app is used. These services collect anonymous
            data to help us improve the app.
          </li>
          <li>
            <strong>Crash Reporting Services:</strong> In the event of an app
            crash, we may use services (e.g., Sentry, Firebase Crashlytics) that
            collect non-personal information about the crash to help us fix bugs
            and improve stability.
          </li>
        </ul>
        <p>
          <strong>
            We will not sell, rent, or trade your personal information with
            third parties for their own promotional purposes.
          </strong>
        </p>

        <hr />

        <h2>4. Your Choices and Rights</h2>
        <p>You have control over your data:</p>
        <ul>
          <li>
            <strong>Contacts Access:</strong> You can enable or disable our
            access to your contacts at any time through your device's settings.
          </li>
          <li>
            <strong>Account Deletion:</strong> If you wish to delete your
            account and associated personal information, you may do so by
            contacting our support team. We will take reasonable steps to delete
            your data, though some information may be retained for a limited
            period for legal or security purposes.
          </li>
        </ul>

        <hr />

        <h2>5. Data Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your personal information from unauthorized access, use, or
          disclosure. However, no data transmission over the internet or
          electronic storage is 100% secure. While we strive to protect your
          data, we cannot guarantee its absolute security.
        </p>

        <hr />

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. We will notify
          you of any material changes by posting the new policy on this page or
          through other communication channels. Your continued use of the app
          after a policy change constitutes your acceptance of the updated
          terms.
        </p>

        <hr />

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> praispranav@gmail.com
          </li>
          <li>
            <strong>Website:</strong> https://www.learnnowacademy.co.in
          </li>
        </ul>

        <p className="last-updated">
          <strong>Last updated:</strong> [Current Date]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
