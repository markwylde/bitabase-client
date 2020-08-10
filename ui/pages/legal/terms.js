const menu = require('../../components/menu');
const footer = require('../../components/footer');

module.exports = function (app, html) {
  return html`
    <div>
      <main>
        ${menu(app, html)}
        
        <div class="container">
          <h1>Terms of Service</h1>
          <h2>1. Information about us</h2>
          <p>1.1. We operate the website bitabase.com.  We are
          Bitabase Limited, a company registered in England and Wales
          under company number XXXXXXXXXX and with our registered office at XXXXXXXXXX.
          Our VAT number is XXXXXXXXXX.</p>

          <p>1.2. To contact us, please email us at legal@bitabase.com.</p>

          <h2>2.Terms of website use</h2>
          <p>2.1. This terms of use (together with the documents
          referred to in it) tells you the terms of use on which you may make
          use of our site (<a href='https://bitabase.com'>bitabase.com</a>) and other products sites within our network, 
          whether as a guest or a registered user. Use of our site includes accessing, browsing,
          or registering to use our site.</p>

          <p>2.2. Please read these terms of use carefully
          before you start to use our site, as these will apply to your use of
          our site. We recommend that you print a copy of this for future
          reference.</p>

          <p>2.3. By using our site, you confirm that you accept
          these terms of use and that you agree to comply with them. </p>

          <p>2.4. If you do not agree to these terms of use, you
          must not use our site.</p>

          <h2>3. Other applicable terms</h2>
          <p>3.1. Use of our website is free and we take steps
          to ensure it is available to all permitted users. From time to time
          we may restrict access to some or all parts of our website. We will
          make all reasonable efforts to ensure that our website is always
          available to you but we do not guarantee that our website will be
          continuously available. We also do not guarantee that your use of our
          website will be uninterrupted or error-free, or that our website and
          server will be free from attack (e.g. from viruses). </p>

          <p>3.2. These terms of use refer to the following
          additional terms, which also apply to your use of our site:</p>

          <ul>
              <li><p>Our Privacy Policy, which sets out the terms on which we process any
              personal data we collect from you, or that you provide to us. By
              using our site, you consent to such processing and you warrant that
              all data provided by you is accurate.</p></li>
              <li><p>Our Cookie Policy, which sets out information about the cookies on our
              site.</p></li>
          </ul>

          <p>3.3. These Terms will apply to any contract between
          us for the sale of Products to you (<strong>Contract</strong>). Please read
          these Terms carefully and make sure that you understand them, before
          ordering any Products from our site. </p>

          <p>3.4. Please note that by ordering any of our
          Products, you agree to be bound by these Terms and the other
          documents expressly referred to in it.</p>

          <p>3.5. We may revise these terms of use at any time
          by amending this page in accordance with clause 7 of these Terms. </p>

          <p>3.6. Every time you wish to order Products, please
          check these Terms to ensure you understand the terms which will apply
          at that time. </p>

          <p>3.7. These Terms, and any Contract between us, are
          only in the English language.</p>

          <h2>4. Our right to vary these terms</h2>
          <p>4.1 We may revise these Terms from time to time in
          the following circumstances:   
          </p>
          <ul>
              <li type='a'><p>changes in how we accept payment from you; and</p></li>
              <li type='a'><p>changes in relevant laws and regulatory requirements.</p></li>
          </ul>

          <p>4.2. Every time you order Products from us, the
          Terms in force at that time will apply to the Contract between you
          and us.</p>

          <h2>5. Our Products</h2>
          <p>5.1. The images of the Products on our site are for
          illustrative purposes only. Although we have made every effort to
          display the colours accurately, we cannot guarantee that your
          computer's display of the colours accurately reflect the colour of
          the Products. Your Products may vary from those images. </p>

          <p>5.2. The interface of the Products may vary from
          that shown on images on our site.</p>

          <h2>6. How contracts are formed between you and us</h2>
          <p>6.1. These Terms and any document expressly
          referred to in them constitute the entire agreement between you and
          us. You acknowledge that you have not relied on any statement,
          promise or representation made or given by or on behalf of us which
          is not set out in these Terms or any document expressly referred to
          in them.</p>

          <p>6.2. For the steps you need to take to place an
          order on our site, please refer to the <a href='/faq'>FAQs</a>
          and <a href='/community'>Support Forum</a>.  
          </p>
          <p>6.3. Our order process allows you to check and
          amend any errors before submitting your order to us. Please take the
          time to read and check your order at each page of the order process.</p>

          <p>6.4. After you place an order, you will receive an
          e-mail from us acknowledging that we have received your order. 
          However, please note that this does not mean that your order has been
          accepted.  Our acceptance of your order will take place as described
          in clause 6.5.</p>

          <p>6.5. We will confirm our acceptance to you by sending you an e-mail that 
          confirms that the Products <a href='https://bitabase.com/products'>are available for download</a>.  
          The Contract between us will only be formed when we send you the Download Confirmation. </p>

          <p>6.6. If we are unable to supply you with a Product,
          for example because that Product is not in stock or no longer
          available or because of an error in the price on our site as referred
          to in clause 8, we will inform you of this by e-mail and we will not
          process your order. If you have already paid for the Products, we
          will refund you the full amount as soon as possible.</p>

          <h2>7. Communications between us</h2>
          <p>7.1. When we refer, in these Terms, to "in
          writing", this will include e-mail.</p>

          <p>7.2. If we have to contact you or give you notice
          in writing, we will do so by e-mail or by pre-paid post to the
          invoice address you provide to us in your order.</p>

          <p>7.3. Please note that any notice given by you to
          us, or by us to you, will be deemed received and properly served
          immediately when posted on our website, 24 hours after an e-mail
          is sent, or three days after the date of posting of any letter. 
          In proving the service of any notice, it will be sufficient to prove,
          in the case of a letter, that such letter was properly addressed,
          stamped and placed in the post and, in the case of an e-mail, that
          such e-mail was sent to the specified e-mail address of the
          addressee. The provisions of this clause shall not apply to the
          service of any proceedings or other documents in any legal action.</p>

          <h2>8. Price of products</h2>
          <p>8.1. The prices of the Products will be as quoted
          on our site from time to time. We take all reasonable care to ensure
          that the prices of Products are correct at the time when the relevant
          information was entered onto the system. However if we discover an
          error in the price of Product(s) you ordered, please see clause 8.4
          for what happens in this event.</p>

          <p>8.2. Prices for our Products may change from time
          to time, but changes will not affect any order which we have
          confirmed with a Download Confirmation.</p>

          <p>8.3. The price of a Product includes VAT (where
          applicable) at the applicable current rate chargeable in the UK for
          the time being. However, if the rate of VAT changes between the date
          of your order and the date of delivery, we will adjust the VAT you
          pay, unless you have already paid for the Products in full before the
          change in VAT takes effect.</p>

          <p>8.4. Our site contains a large number of Products.
          It is always possible that, despite our reasonable efforts, some of
          the Products on our site may be incorrectly priced. If we discover an
          error in the price of the Products you have ordered we will inform
          you of this error and we will give you the option of continuing to
          purchase the Products at the correct price or cancelling your order.
          We will not process your order until we have your instructions. If we
          are unable to contact you using the contact details you provided
          during the order process, we will treat the order as cancelled and
          notify you in writing. Please note that if the pricing error is
          obvious and unmistakeable and could have reasonably been recognised
          by you as a mispricing, we do not have to provide the Products to you
          at the incorrect (lower) price.</p>

          <h2>9. How to pay</h2>
          <p>9.1. You can only pay for Products using a debit
          card or credit card. We accept the following cards: </p>
          <ul>
              <li type='a'>Mastercard;</li>
              <li type='a'>Maestro;</li>
              <li type='a'>Solo; and</li>
              <li type='a'>Visa, Visa Debit and Visa Electron.</li>
          </ul>

          <p>9.2. Please note that all payment transactions will
          be made through a third party provider who maintain their own Terms of Use and
          Privacy policies.  We do not accept any responsibility or liability
          for these policies.  Please check these policies before you submit
          any personal data to this website.</p>

          <p>9.3. Payment for the Products is in advance. We
          will not charge your debit card or credit card until we dispatch your
          order.</p>

          <h2>10. Delivery</h2>
          <p>10.1. Delivery will be completed when we deliver
          the Download Confirmation to the address you gave us.</p>

          <p>10.2. The Products will be your responsibility from
          the completion of delivery.</p>

          <h2>11.Our liability</h2>
          <p>11.1. We only supply the Products for internal use
          by your business, and you agree not to use the Product for any
          re-sale purposes.</p>

          <p>11.2. Nothing in these Terms limit or exclude our liability for:</p>

          <ul type='a'>
              <li type='a'>death or personal injury caused by our negligence;</li>
              <li type='a'>fraud or fraudulent misrepresentation;</li>
              <li type='a'>breach of the terms implied by section 12 of
          the Sale of Goods Act 1979 (title and quiet possession); or</li>
              <li type='a'>defective products under the Consumer
          Protection Act 1987.</li>
          </ul>

          <p>11.3. Subject to clause 11.2, we will under no circumstances whatever be liable to
          you, whether in contract, tort (including negligence), breach of
          statutory duty, or otherwise, arising under or in connection with the
          Contract for:</p>

          <ul>
              <li type='a'>any loss of profits, sales, business, or
          revenue;</li>
              <li type='a'>loss or corruption of data, information or
          software;</li>
              <li type='a'>loss of business opportunity;</li>
              <li type='a'>loss of anticipated savings;</li>
              <li type='a'>loss of goodwill; or</li>
              <li type='a'>any indirect or consequential loss.</li>
          </ul>

          <p>11.4. Subject to clause 11.2 and clause 11.3 , our
          total liability to you in respect of all other losses arising under
          or in connection with the Contract, whether in contract, tort
          (including negligence), breach of statutory duty, or otherwise, shall
          in no circumstances exceed the price paid for the Products.</p>

          <p>11.5. Except as expressly stated in these Terms, we
          do not give any representation, warranties or undertakings in
          relation to the Products. Any representation, condition or warranty
          which might be implied or incorporated into these Terms by statute,
          common law or otherwise is excluded to the fullest extent permitted
          by law. In particular, we will not be responsible for ensuring that
          the Products are suitable for your purposes.</p>

          <h2>12.Events outside our control</h2>
          <p>12.1. We will not be liable or responsible for any
          failure to perform, or delay in performance of, any of our
          obligations under a Contract that is caused by an Event Outside Our
          Control. An Event Outside Our Control is defined below in clause 12.2.</p>

          <p>12.2. An Event Outside Our Control means any act or event beyond
          our reasonable control, including without limitation strikes,
          lock-outs or other industrial action by third parties, civil
          commotion, riot, invasion, terrorist attack or threat of terrorist
          attack, war (whether declared or not) or threat or preparation for
          war, fire, explosion, storm, flood, earthquake, subsidence, epidemic
          or other natural disaster, or failure of public or private
          telecommunications networks.</p>

          <p>12.3. If an Event Outside Our Control takes place
          that affects the performance of our obligations under a Contract:</p>

          <ul>
              <li type='a'>we will contact you as soon as reasonably
          possible to notify you; and</li>
              <li type='a'>our obligations under a Contract will be
          suspended and the time for performance of our obligations will be
          extended for the duration of the Event Outside Our Control. Where the
          Event Outside Our Control affects our delivery of Products to you, we
          will arrange a new delivery date with you after the Event Outside Our
          Control is over. </li>
          </ul>

          <h2>13. Viruses</h2>
          <p>13.1. We do not guarantee that our site will be
          secure or free from bugs or viruses.</p>
          <p>13.2. You are responsible for configuring your
          information technology, computer programmes and platform in order to
          access our site. We recommend that you use your own appropriate virus
          protection software.</p>
          <p>13.3. You must not misuse our site by knowingly
          introducing viruses, trojans, worms, logic bombs or other material
          which is malicious or technologically harmful. You must not attempt
          to gain unauthorised access to our site, the server on which our site
          is stored or any server, computer or database connected to our site.
          You must not attack our site via a denial-of-service attack or a
          distributed denial-of service attack. By breaching this provision,
          you would commit a criminal offence under the Computer Misuse Act
          1990. We will report any such breach to the relevant law enforcement
          authorities and we will co-operate with those authorities by
          disclosing your identity to them. In the event of such a breach, your
          right to use our site will cease immediately.</p>

          <h2>14. How we use your personal information</h2>
          <p>We only use your personal information in accordance with our 
          <a href='/privacy'>Privacy</a> and
          <a href='/cookies'>Cookie</a> policies.  Please take the 
          time to read these, as they include important terms that apply to you.</p>

          <h2>15. Linking to our site</h2>
          <p>15.1. You may link to our home page, provided you
          do so in a way that is fair and legal and does not damage our
          reputation or take advantage of it.</p>

          <p>15.2. You must not establish a link in such a way
          as to suggest any form of association, approval or endorsement on our
          part where none exists.</p>

          <p>15.3. You must not establish a link to our site in
          any website that is not owned by you. </p>

          <p>15.4. Our site must not be framed on any other
          site, nor may you create a link to any part of our site other than
          the home page.</p>

          <p>15.5. We reserve the right to withdraw linking
          permission without notice.</p>

          <p>15.6. The website in which you are linking must
          comply in all respects with the standards set out in Clauses 16 and
          17 of these terms.</p>

          <p>15.7. If you wish to make any use of content on our
          site other than that set out above, please contact legal@bitabase.com.</p>

          <h2>16.Prohibited uses</h2>
          <p>16.1. You may use our site only for lawful purposes.</p>
          <p>16.2. You may not use our site:</p>
          <ul>
              <li>In any way that
              breaches any applicable local, national or international law or
              regulation.</li>
              <li>In any way that is unlawful or
              fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
              <li>For the purpose of harming or
              attempting to harm minors in any way.</li>
              <li>To send, knowingly receive,
              upload, download, use or re-use any material which does not comply
              with our content standards as set out in Clause [] below.</li>
              <li>To transmit, or procure the
              sending of, any unsolicited or unauthorised advertising or
              promotional material or any other form of similar solicitation
              (spam).</li>
              <li>To knowingly transmit any data,
              send or upload any material that contains viruses, Trojan horses,
              worms, time-bombs, keystroke loggers, spyware, adware or any other
              harmful programs or similar computer code designed to adversely
              affect the operation of any computer software or hardware.</li>
          </ul>

          <p>16.3. You also agree:</p>
          <ul>
              <li><p>Not to reproduce, duplicate, copy or re-sell any part of our site.</p></li>
              <li><p>Not to access without authority, interfere with, damage or disrupt:</p></li>
              <li><p>any part of our site;</p></li>
              <li><p>any equipment or network on which our site is stored;</p></li>
              <li><p>any software used in the provision of our site; or </p></li>
              <li><p>any equipment or network or software owned or used by any third party.</p></li>
          </ul>

          <h2>17. Content standards</h2>
          <p>17.1. These content standards apply to any and all
          material which you contribute to our site, and
          to any interactive services associated with it. </p>
          <p>17.2. You must comply with the spirit of the
          following standards as well as the letter. The standards apply to
          each part of any contribution as well as to its whole.</p>
          <p>17.3. Contributions must:</p>
          <ul>
              <li><p>Be accurate (where they state facts).</p></li>
              <li><p>Be genuinely held (where they state opinions).</p></li>
              <li><p>Comply with applicable law in the UK and in any country from which they are posted.</p></li>
          </ul>

          <p>17.4. Contributions must not:</p>
          <ul>
              <li><p>Contain any material which is defamatory of any person.</p></li>
              <li><p>Contain any material which is obscene, offensive, hateful or inflammatory.</p></li>
              <li><p>Promote sexually explicit material.</p></li>
              <li><p>Promote violence.</p></li>
              <li><p>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</p></li>
              <li><p>Infringe any copyright, database right or trade mark of any other person.</p></li>
              <li><p>Be likely to deceive any person.</p></li>
              <li><p>Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.</p></li>
              <li><p>Promote any illegal activity.</p></li>
              <li><p>Be threatening, abuse or invade another&rsquo;s privacy, or cause annoyance, inconvenience or needless anxiety.</p></li>
              <li><p>Be likely to harass, upset, embarrass, alarm or annoy any other person.</p></li>
              <li><p>Be used to impersonate any person, or to misrepresent your identity or affiliation with any person.</p></li>
              <li><p>Give the impression that they emanate from us, if this is not the case.</p></li>
              <li><p>Advocate, promote or assist any unlawful act such as (by way of example only) copyrightinfringement or computer misuse.</p></li>
          </ul>

          <h2>18. Suspension and termination</h2>
          <p>18.1. We will determine, in our discretion, whether
          there has been a breach of this acceptable use policy through your
          use of our site.  When a breach of this policy has occurred, we may
          take such action as we deem appropriate.</p>

          <p>18.2. Failure to comply with sections 16 and 17 of
          these terms (acceptable use policy) constitutes a material breach of
          these <a href='/terms'>Terms of Website Use</a> upon which
          you are permitted to use our site, and may result in our taking all
          or any of the following actions:</p>
          <ul>
              <li><p>Immediate, temporary or permanent withdrawal of your right to use our site.</p></li>
              <li><p>Immediate, temporary or permanent removal of any posting or material uploaded by you to our site.</p></li>
              <li><p>Issue of a warning to you.</p></li>
              <li><p>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but
              not limited to, reasonable administrative and legal costs) resulting
              from the breach.</p></li>
              <li><p>Further legal action against you.</p></li>
              <li><p>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.</p></li>
          </ul>

          <p>18.3. We exclude liability for actions taken in
          response to breaches of this acceptable use policy.  The responses
          described in this policy are not limited, and we may take any other
          action we reasonably deem appropriate.</p>

          <h2>19. Third party links and resources in our site</h2>
          <p>19.1. Where our site contains links to other sites
          and resources provided by third parties, these links are provided for
          your information only.</p>
          <p>19.2. We have no control over the contents of those
          sites or resources.</p>

          <h2>20. Interactive services</h2>
          <p>20.1. We may from time to time provide interactive
          services on our site, including, without limitation, live chat
          services and bulletin boards (<strong>interactive services</strong>).</p>

          <p>20.2. Where we do provide any interactive service,
          we will provide clear information to you about the kind of service
          offered, if it is moderated and what form of moderation is used
          (including whether it is human or technical).</p>

          <p>20.3. We will do our best to assess any possible
          risks for users (and in particular, for children) from third parties
          when they use any interactive service provided on our site, and we
          will decide in each case whether it is appropriate to use moderation
          of the relevant service (including what kind of moderation to use) in
          the light of those risks. However, we are under no obligation to
          oversee, monitor or moderate any interactive service we provide on
          our site, and we expressly exclude our liability for any loss or
          damage arising from the use of any interactive service by a user in
          contravention of our content standards, whether the service is
          moderated or not.</p>

          <p>20.4. The use of any of our interactive services by
          a minor is subject to the consent of their parent or guardian. We
          advise parents who permit their children to use an interactive
          service that it is important that they communicate with their
          children about their safety online, as moderation is not foolproof.
          Minors who are using any interactive service should be made aware of
          the potential risks to them.</p>

          <p>20.5. Where we do moderate an interactive service,
          we will normally provide you with a means of contacting the
          moderator, should a concern or difficulty arise.</p>

          <h2>21. Trade marks</h2>
          <p>"bitabase" is a UK registered trade mark registered with Trade Mark Number
          <a href="http://www.ipo.gov.uk/tmcase/Results/1/UK00003006560">UK00003006560</a>.</p>

          <h2>22. Applicable law</h2>
          <p>These terms of use, its subject matter and its formation (and any non-contractual
          disputes or claims) are governed by English law.  You and we hereby
          agree to the exclusive jurisdiction of the courts of England and
          Wales.</p>
          <h2>23. Miscellaneous</h2>
          <p>23.1. We may transfer our rights and obligations
          under a Contract to another organisation, but this will not affect
          your rights or our obligations under these Terms. </p>

          <p>23.2. You may only transfer your rights or your
          obligations under these Terms to another person if we agree in
          writing.</p>

          <p>23.3. This contract is between you and us. No other
          person shall have any rights to enforce any of its terms, whether
          under the Contracts (Rights of Third Parties Act) 1999 or otherwise.</p>

          <p>23.4. Each of the paragraphs of these Terms operates separately. If any court or 
          relevant authority decides that any of them are unlawful or unenforceable, the remaining 
          paragraphs will remain in full force and effect.</p>

          <p>23.5. If we fail to insist that you perform any of
          your obligations under these Terms, or if we do not enforce our
          rights against you, or if we delay in doing so, that will not mean
          that we have waived our rights against you and will not mean that you
          do not have to comply with those obligations. If we do waive a
          default by you, we will only do so in writing, and that will not mean
          that we will automatically waive any later default by you.</p>

          <p>23.6. We will not file a copy of the Contract between us.</p>

          <h2>24. Contact us</h2>
          <p>To contact us, please email legal@bitabase.com.</p>

        </div>
      </main>

      ${footer(app, html)}
    </div>
  `;
};
