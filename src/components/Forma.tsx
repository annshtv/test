import styles from "./Form.module.css";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import { useState} from "react";

function Forma() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Get in touch</h2>
      <p className={styles.formSubtitle}>Send your message to us</p>

      <div className={styles.divider}></div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="Phone"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              placeholder="Subject..."
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Your message goes here..."
            required
          />
        </div>
      </form>
      <div className={styles.txt}>
        <label htmlFor="required" className={styles.label1}>
          required <span className={styles.required}>*</span>
        </label>
        <ButtonSubscribe onClick={handleSubmit} children={"SEND MESSAGE"}></ButtonSubscribe>
        <p>
          Viverra at port <br></br> accumsan.{" "}
          <span className={styles.span}>Orci non</span>
        </p>
      </div>
    </div>
  );
}

export default Forma;
