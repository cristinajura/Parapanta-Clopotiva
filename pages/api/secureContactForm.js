export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "para.transilvania@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "para.transilvania@gmail.com",
    to: "parapanta.transilvania@gmail.com",
    subject: `Message to Parapanta Clopotiva from: ${req.body.first.replace(
      /<[^>]*>/g,
      ""
    )} ${req.body.last.replace(/<[^>]*>/g, "")}`,
    message: req.body.message.replace(/<[^>]*>/g, ""),
    html: `<p>Name: ${req.body.first.replace(
      /<[^>]*>/g,
      ""
    )} ${req.body.last.replace(/<[^>]*>/g, "")}</p><p>Email: ${
      req.body.email
    }</p><p>Telephone: ${
      req.body.telephone
    }</p><p>Message: ${req.body.message.replace(/<[^>]*>/g, "")}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(404).json({
        error: `Connection refused at ${err.address}`,
      });
      console.log(err);
    } else {
      res.status(200).json({
        success: `Message delivered to ${info.accepted}`,
      });
      console.log(info);
    }
  });
}
