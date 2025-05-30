// /api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, category, message } = req.body;

    // You could store the data in a database or send an email here.
    console.log('Received contact form:', {
      firstName,
      lastName,
      email,
      phone,
      category,
      message,
    });

    // For now, just send a success message
    return res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
