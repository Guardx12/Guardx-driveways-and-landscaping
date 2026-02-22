import { useMemo, useState } from "react";
import {
  IconArrow,
  IconFacebookMark,
  IconGoogleMark,
  IconInstagramMark,
  IconLeaf,
  IconMail,
  IconMap,
  IconPhone,
  IconStar,
} from "../components/Icons";

const PHONE = "07000 000000";
const EMAIL = "hello@greenstonepaving.co.uk";

function Stars({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} />
      ))}
    </span>
  );
}

function SmartImage({ src, alt }) {
  return (
    <div className="smartImgWrap" style={{ "--bgimg": `url(${src})` }}>
      <img className="smartImg" src={src} alt={alt} />
    </div>
  );
}

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  }

  return (
    <div>
      {/* Header (different pattern: centered brand, minimal actions) */}
      <header className="header">
        <div className="container">
          <div className="headerRow">
            <div className="brand">
              <div className="mark" aria-hidden="true">
                <IconLeaf />
              </div>
              <div className="brandText">
                <strong>Greenstone Driveways</strong>
                <span>Driveways • Landscaping • Patios</span>
              </div>
            </div>

            <div className="headerActions">
              <a
                className="iconBtn"
                href={`tel:+44${PHONE.replace(/\s/g, "")}`}
                aria-label="Call"
                title="Call"
              >
                <IconPhone />
              </a>
              <a className="btn btnPrimary" href="#contact">
                Get a quote <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroCard">
              <div className="heroCopy">
                <div className="kicker">Driveways & landscaping</div>
                <h1 className="h1">Kerb appeal you can feel — built for UK weather.</h1>
                <p className="lead">
                  Premium block paving, resin and porcelain paving with clean landscaping finishes. Clear
                  quotes, tidy work, and a process that keeps your home usable.
                </p>

                <div className="heroBadges" aria-label="Highlights">
                  <span className="badge">Fully insured</span>
                  <span className="badge">5-year workmanship guarantee</span>
                  <span className="badge">Free site survey</span>
                </div>

                <div className="heroCtas">
                  <a className="btn btnPrimary" href="#contact">
                    Book a site survey <IconArrow />
                  </a>
                  <a className="btn" href="#work">
                    See recent work
                  </a>
                  <a className="btn" href="#reviews">
                    Read reviews
                  </a>
                </div>

                <div style={{ marginTop: 18 }} className="ratingCard" aria-label="Rating summary">
                  <div>
                    <b>4.9</b>
                    <small>Average rating • 162 reviews</small>
                  </div>
                  <div>
                    <Stars />
                    <div className="strip" style={{ marginTop: 10 }}>
                      <span className="logo">
                        <IconGoogleMark /> Google
                      </span>
                      <span className="logo">
                        <IconFacebookMark /> Facebook
                      </span>
                      <span className="logo">
                        <IconInstagramMark /> Instagram
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="heroCard heroMedia">
              <img src="/images/porcelain-close.jpg" alt="Porcelain driveway and edging" />
              <div className="mediaOverlay" />
              <div className="mediaTag">
                <div>
                  <strong>Porcelain paving</strong>
                  <span>Clean joints • crisp edges • low maintenance</span>
                </div>
                <Stars />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Gallery */}
      <section id="work" className="section">
        <div className="container">
          <div className="kicker">Recent work</div>
          <h2 className="h2">Driveways and gardens that look finished.</h2>
          <p className="sub">Porcelain paving, block paving and landscaping detail.</p>

          <div className="gallery" aria-label="Project gallery">
            <div className="frame span7 tall">
              <SmartImage src="/images/lawn-modern.jpg" alt="Modern lawn and timber fencing" />
              <div className="cap">Modern garden build — lawn, levels & timber</div>
            </div>

            <div className="frame span5 med">
              <SmartImage src="/images/rock-garden.jpg" alt="Rock garden landscaping" />
              <div className="cap">Landscaping detail — stone, planting & curves</div>
            </div>

            <div className="frame span5 med">
              <SmartImage src="/images/driveway-aerial.jpg" alt="Driveway aerial view" />
              <div className="cap">Large driveway install — clean lines</div>
            </div>

            <div className="frame span7 short">
              <SmartImage src="/images/driveway-gate.jpg" alt="Driveway with gate and paving" />
              <div className="cap">Entrance & edging — kerb appeal that lasts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section sectionAlt">
        <div className="container">
          <div className="kicker">Services</div>
          <h2 className="h2">Everything from sub-base to finish.</h2>
          <p className="sub">
            We build the boring parts properly: drainage falls, compaction, edge restraints and clean handover.
          </p>

          <div className="grid" role="list">
            <div className="card span4" role="listitem">
              <h3>Block paving driveways</h3>
              <p>Classic look, strong edges, tidy joints. Ideal for most homes and budgets.</p>
            </div>
            <div className="card span4" role="listitem">
              <h3>Resin & bound gravel</h3>
              <p>Sleek, low maintenance finish with proper prep and clear drainage planning.</p>
            </div>
            <div className="card span4" role="listitem">
              <h3>Porcelain paving</h3>
              <p>Premium patios and pathways with crisp lines and modern detailing.</p>
            </div>
            <div className="card span6" role="listitem">
              <h3>Landscaping & levels</h3>
              <p>Lawns, sleepers, retaining edges, planting beds and clean transitions from hard to soft.</p>
            </div>
            <div className="card span6" role="listitem">
              <h3>Drainage & foundations</h3>
              <p>Type 1 sub-base, compaction, channel drains, falls and soakaway options.</p>
            </div>
            <div className="card span12" role="listitem">
              <h3>How it works</h3>
              <p>1) Site survey → 2) Clear written quote → 3) Prep & sub-base → 4) Install → 5) Clean handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="section">
        <div className="container">
          <div className="kicker">Trust</div>
          <h2 className="h2">Accreditations, insurance and guarantees.</h2>
          <p className="sub">Built on clear standards: insurance, guarantees and documented processes.</p>

          <div className="strip" aria-label="Accreditations">
            <span className="logo">Marshalls Register</span>
            <span className="logo">Interlay / APL</span>
            <span className="logo">Public Liability</span>
            <span className="logo">Workmanship Guarantee</span>
            <span className="logo">Waste Carrier</span>
          </div>

          <div className="grid" style={{ marginTop: 18 }}>
            <div className="card span6">
              <h3>Written quotes, no surprises</h3>
              <p>Clear scope, inclusions and finish details. Variations only with approval.</p>
            </div>
            <div className="card span6">
              <h3>Clean site standards</h3>
              <p>Protect access routes, keep materials tidy, and leave the job looking finished.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="section sectionAlt">
        <div className="container">
          <div className="kicker">Reviews</div>
          <h2 className="h2">Homeowners recommend us.</h2>
          <p className="sub">Reviews with star ratings and platform indicators.</p>

          <div className="grid" style={{ marginTop: 18 }}>
            <div className="card span7">
              <div className="quote">
                <p>
                  “From the first survey to the final clean-down, the team were spot on. The driveway looks
                  incredible.”
                </p>
                <footer>
                  <Stars /> <span>Google Review</span> <span>— Homeowner, Sussex</span>
                </footer>
              </div>
            </div>
            <div className="card span5">
              <div className="quote">
                <p>
                  “Tidy, polite and they explained everything. Drainage was done properly and the finish is
                  perfect.”
                </p>
                <footer>
                  <Stars /> <span>Facebook Review</span> <span>— Client, Brighton</span>
                </footer>
              </div>
            </div>
            <div className="card span12">
              <div className="ratingCard">
                <div>
                  <b>4.9</b>
                  <small>Average rating across platforms • 162 reviews</small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Stars />
                  <div className="strip" style={{ marginTop: 10, justifyContent: "flex-end" }}>
                    <span className="logo">
                      <IconGoogleMark /> Google
                    </span>
                    <span className="logo">
                      <IconFacebookMark /> Facebook
                    </span>
                    <span className="logo">
                      <IconInstagramMark /> Instagram
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="kicker">Contact</div>
          <h2 className="h2">Get a fixed quote.</h2>
          <p className="sub">Tell us what you need and we’ll come back quickly with next steps.</p>

          <div className="grid" style={{ marginTop: 18 }}>
            <div className="card span5">
              <h3>Direct contact</h3>
              <p>Speak to the team, or send a message using the form.</p>
              <div className="strip" style={{ marginTop: 14 }}>
                <a className="logo" href={`tel:+44${PHONE.replace(/\s/g, "")}`}>
                  <IconPhone /> {PHONE}
                </a>
                <a className="logo" href={`mailto:${EMAIL}`}>
                  <IconMail /> {EMAIL}
                </a>
                <span className="logo">
                  <IconMap /> Sussex
                </span>
              </div>
              <div className="socialRow">
                <a className="logo" href="#" aria-label="Google">
                  <IconGoogleMark /> Google
                </a>
                <a className="logo" href="#" aria-label="Facebook">
                  <IconFacebookMark /> Facebook
                </a>
                <a className="logo" href="#" aria-label="Instagram">
                  <IconInstagramMark /> Instagram
                </a>
              </div>
              <p className="note" style={{ marginTop: 12 }}>
                Typical reply: within 1 business day.
              </p>
            </div>

            <div className="card span7">
              <h3>Contact form</h3>
              <p>Share a few details and we’ll get back to you.</p>

              <form onSubmit={onSubmit}>
                <div className="form" aria-label="Contact form">
                  <div className="field">
                    <div className="label">Name</div>
                    <input name="name" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <div className="label">Phone</div>
                    <input name="phone" placeholder="07..." required />
                  </div>
                  <div className="field">
                    <div className="label">Email</div>
                    <input type="email" name="email" placeholder="you@email.com" required />
                  </div>
                  <div className="field">
                    <div className="label">Job type</div>
                    <select name="type" defaultValue="Driveway">
                      <option>Driveway</option>
                      <option>Patio</option>
                      <option>Landscaping</option>
                      <option>Drainage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <textarea name="message" placeholder="Tell us about your project..." required />
                </div>

                <div className="actions">
                  <button className="btn btnPrimary" type="submit">
                    Send message <IconArrow />
                  </button>
                  <span className="note">
                    {sent ? "✅ Thanks — your message has been sent." : "We aim to reply within 1 business day."}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            <div>
              <div className="brand">
                <div className="mark" aria-hidden="true">
                  <IconLeaf />
                </div>
                <div className="brandText">
                  <strong>Greenstone Driveways</strong>
                  <span>Driveways • Landscaping • Patios</span>
                </div>
              </div>
              <div className="socialRow">
                <a className="logo" href="#" aria-label="Google">
                  <IconGoogleMark /> Google
                </a>
                <a className="logo" href="#" aria-label="Facebook">
                  <IconFacebookMark /> Facebook
                </a>
                <a className="logo" href="#" aria-label="Instagram">
                  <IconInstagramMark /> Instagram
                </a>
              </div>
              <p className="small" style={{ marginTop: 12 }}>
                © {year} Greenstone Driveways
              </p>
            </div>

            <div>
              <p className="small">
                This is a <b>GuardX showroom example website (demo)</b>. No customer data is collected. Any phone numbers,
                addresses, reviews, accreditations, and testimonials shown are illustrative only.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action stack (different shape + animation) */}
      <div className="stickyBar" role="region" aria-label="Quick actions">
        <div className="mini">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span className="pulseDot" aria-hidden="true" />
            <b>Free site survey</b> • fixed quote
          </span>
          <a href={`tel:+44${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
        </div>

        <div className="fabRow">
          <a className="fab" href={`tel:+44${PHONE.replace(/\s/g, "")}`}>
            <IconPhone /> Call
          </a>
          <a className="fab fabPrimary" href="#contact">
            Get a quote <IconArrow />
          </a>
        </div>
      </div>
    </div>
  );
}
