/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.user;
const gmailPassword = functions.config().gmail.pass;
const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.onDataAdded = functions.database.ref('/users/{uid}').onWrite(async (change) => {

    const val = change.after.val();

    const mailOptions = {
        from: 'anthony.bergen@giftedsoftware.com',
        to: 'anthony.bergen@giftedsoftware.com'
    };

    // Building Email message.
    mailOptions.subject = 'New Contact - Murphy Septic Inspect';
    mailOptions.text = `A new user has submitted contact information on your website murphysepticinspect.com:\n \n  Contact Name: ${val.name} \n Contact Email: ${val.email} \n Contact Phone: ${val.phone} \n Message: ${val.message}`

    try {
        await mailTransport.sendMail(mailOptions);
        functions.logger.log(
            `Contact Submission email sent to:`,
            val.email
        );
    } catch (error) {
        functions.logger.error(
            'There was an error while sending the email:',
            error
        );
    }
    return null;
});