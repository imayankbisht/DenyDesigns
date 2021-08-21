import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>COMPANY</h3>
        <ul className="footer_ul">
          <li>Shipping</li>
          <li>Return Policy</li>
          <li>Work With Us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div>
        <h3>FOLLOW US OUT THERE</h3>
        <ul className="footer_ul">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Pintrest</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div>
        <h3>THANK YOU</h3>
        <ul className="footer_ul">
          <li>
            There are many variations of passages of Lorem Ipsum available.
          </li>
        </ul>
      </div>
      <div>
        <h3>NEWSLETTER</h3>
        <section>
          <input
            className="footer_input"
            type="email"
            placeholder="your@gmail.com"
          />
          <button className="footer_btn">SUBSCRIBE</button>
        </section>
      </div>
    </div>
  );
}
