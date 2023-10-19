import { getThemeColor } from "../lib/helper";

const Contact = () => {
  return (
    <div
      className="card"
      style={{
        background: getThemeColor("dark", "contentBackground"),
      }}
    >
      Contact
    </div>
  );
};

export default Contact;
