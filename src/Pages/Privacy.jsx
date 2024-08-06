import React from 'react';
import './Privacy.css';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Privacy = () => {
  return (
    <>
    <Navbar />
    <div className='Pirvacy-Container '>
    <h1 className="information-container-header custom-header-title">Privacy <div className="break-div"><br /></div><span className="glow-text">Policy</span></h1>
      
      <div>
        <p className='custom-header-subtitle-no-centner glow-text'>Clippergoat Privacy Policy</p>
        <br />
        <p className='Pirvacy-P'>Effective Date: july 1st, 2024. <br/> Welcome to Clippergoat, a premier provider of AI-powered editing services. Your privacy is critically important to us, and this Privacy Policy describes how Clippergoat ("we", "us", or "our") collects, uses, processes, and shares your personal information through our services and website (collectively, the "Service").
        </p>

        <p className='custom-header-subtitle-no-centner glow-text'>Information Collection</p>
        <p className='Pirvacy-P'>We collect information about you in the following ways: <br/>
        Information You Provide: This includes information submitted when creating an account, using our services, or contacting us for support, such as your name, email address, and the content you edit or upload.
Automated Information Collection: When you access our Service, we automatically collect certain information about your device and usage of our Service, including IP addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data.
Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our Service and hold certain information, enhancing your experience with our Service.
</p>
        
        <p className='custom-header-subtitle-no-centner glow-text'>Use of Information
        </p>
        <p className='Pirvacy-P'>The information we collect is used to:
<br />    Provide, maintain, and improve our Service.
Communicate with you, including to provide customer support and to respond to your inquiries.
Understand and analyze how you use our Service for improvement.
Detect, prevent, and address technical issues and fraud.
    </p>
        
        <p className='custom-header-subtitle-no-centner glow-text'>Sharing of Information
        </p>
        <p className='Pirvacy-P'>We may share information we collect about you as follows: <br />
        Service Providers: With third-party service providers who perform services on our behalf, under strict data protection terms.
Legal Obligations: When required by law or to respond to legal process or lawful requests, including from law enforcement and government agencies.
Protection of Rights and Safety: To protect the rights, property, or safety of Clippergoat, our users, or others, including to prevent fraud and reduce credit risk.
</p>
        
        <p className='custom-header-subtitle-no-centner glow-text'>Security</p>
        <p className='Pirvacy-P'>We take the security of your information seriously and implement reasonable security measures to protect it. However, no security system is impenetrable, and we cannot guarantee the security of our databases, nor can we guarantee that the information you supply won't be intercepted while being transmitted to us over the Internet.
        </p>
        
        <p className='custom-header-subtitle-no-centner glow-text'>International Transfers
        </p>
        <p className='Pirvacy-P'>Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
        </p>

        <p className='custom-header-subtitle-no-centner glow-text'>Your Rights
        </p>
        <p className='Pirvacy-P'>Depending on where you reside, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict its use. To exercise these rights, please contact us at the information below.

        </p>
        <p className='custom-header-subtitle-no-centner glow-text'>Changes to This Privacy Policy

        </p>
        <p className='Pirvacy-P'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.

        </p>
        <p className='custom-header-subtitle-no-centner glow-text'>Contact Us

        </p>
        <p className='Pirvacy-P'>For any questions please contact us at support@Clippergoat.com

        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Privacy;