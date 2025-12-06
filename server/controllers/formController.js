import Form from "../models/Form.js";

export const submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newForm = await Form.create({ name, email, message });

    return res.status(201).json({
      message: "Form submitted successfully!",
      data: newForm,
    });
  } catch (err) {
    console.error("Submit form error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.findAll();
    return res.status(200).json(forms);
  } catch (err) {
    console.error("Get forms error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};
