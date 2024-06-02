import Contact from '../models/contactModel.js'


export const contact = async(req, res) => {
    try {
      const contactData = new Contact(req.body);
      if (!contactData) {
        return res.status(400).json({ msg: "contact not found !!" });
      }
      const savedContact = await contactData.save();
      res.status(200).json({savedContact});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };