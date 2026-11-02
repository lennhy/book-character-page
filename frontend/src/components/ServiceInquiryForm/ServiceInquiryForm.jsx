import React, { useState } from "react";

/*
  contactform.jsx
  ------------------------------------------------------------
  contact form that sends submissions straight to your inbox
  through web3forms. no email app needed on the visitor's side.

  the access key is read from an environment variable:
  - locally: put REACT_APP_WEB3FORMS_KEY=your-key in a .env file
  - on aws amplify: add REACT_APP_WEB3FORMS_KEY in environment variables
*/

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

const projectTypes = [
  "commercial / brand video",
  "ai vfx",
  "other",
];

const emptyForm = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function ServiceInquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("please fill in your name, email and message.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // honeypot: real people never see or tick this box, bots often do
    const botcheck = e.target.elements.botcheck.checked;
    if (botcheck) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError("form is not set up yet (missing access key).");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `project inquiry: ${form.projectType || "general"} from ${form.name}`,
          from_name: "polyverge website",
          name: form.name,
          email: form.email,
          project_type: form.projectType || "not specified",
          budget: form.budget || "not specified",
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setError(data.message || "something went wrong. please try again.");
      }
    } catch {
      setStatus("error");
      setError("couldn't send right now. please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <main style={styles.page}>
        <div style={{ ...styles.card, textAlign: "center" }}>
          <h1 style={styles.heading}>message sent</h1>
          <p style={styles.sub}>
            thanks for reaching out. i'll get back to you soon.
          </p>
          <button style={styles.secondary} onClick={() => setStatus("idle")}>
            send another message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit} noValidate>
        <h1 style={styles.heading} >let's work together</h1>
        <p style={styles.sub}>
          tell me about your project and i'll get back to you.
        </p>

        {/* hidden spam trap — keep display: none */}
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <label style={styles.label}>
          name *
          <input
            style={styles.input}
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="your name"
          />
        </label>

        <label style={styles.label}>
          email *
          <input
            style={styles.input}
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
          />
        </label>

        <div style={styles.row}>
          <label style={{ ...styles.label, flex: 1 }}>
            project type
            <select
              style={styles.input}
              value={form.projectType}
              onChange={update("projectType")}
            >
              <option value="">select one</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label style={{ ...styles.label, flex: 1 }}>
            budget
            <input
              style={styles.input}
              type="text"
              value={form.budget}
              onChange={update("budget")}
              placeholder="e.g. $3000 – $5000"
            />
          </label>
        </div>

        <label style={styles.label}>
          message *
          <textarea
            style={{ ...styles.input, minHeight: 140, resize: "vertical" }}
            value={form.message}
            onChange={update("message")}
            placeholder="what are you looking to create? include dates, locations or links if you have them."
          />
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button
          type="submit"
          style={{ ...styles.primary, opacity: status === "sending" ? 0.6 : 1 }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "sending..." : "send message"}
        </button>
      </form>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0d",
    color: "#f2f2f2",
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    padding: "48px 24px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    marginTop:"60px"
  },
  card: {
    width: "100%",
    maxWidth: 640,
    background: "#151519",
    border: "1px solid #24242b",
    borderRadius: 14,
    padding: "32px 28px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  heading: {
    fontSize: "clamp(26px, 4vw, 36px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0,
    textTransform: "uppercase"
  },
  sub: {
    color: "#9a9aa3",
    margin: "-8px 0 4px",
  },
  row: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 13,
    color: "#9a9aa3",
    minWidth: 200,
    textAlign: "left"
  },
  input: {
    background: "#0b0b0d",
    border: "1px solid #2e2e36",
    borderRadius: 8,
    padding: "12px 14px",
    color: "#f2f2f2",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
  },
  error: {
    color: "#ff6b6b",
    fontSize: 14,
    margin: 0,
  },
  primary: {
    padding: "14px 18px",
    background: "#f2f2f2",
    color: "#0b0b0d",
    border: "none",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
  },
  secondary: {
    padding: "14px 18px",
    background: "transparent",
    color: "#f2f2f2",
    border: "1px solid #3a3a44",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    alignSelf: "center",
  },
};


