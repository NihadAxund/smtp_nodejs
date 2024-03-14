import nodemailer from 'nodemailer';

async function start() {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "mail@gmail.com",
            pass: "**************"
        }
    });

    const mailOptions = {
        from: 'mail@gmail.com',
        to: "nihataxundzade06@gmail.com",
        subject: 'Reset password',
        text: `otp code`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
}

start();
