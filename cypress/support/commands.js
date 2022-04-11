require('cypress-iframe');

//const { MailSlurp } = require("mailslurp-client");
//const mailslurp = new MailSlurp({ apiKey: "7f0b1ff51ceba32c6df054cda9571224a49fda7a9e80cb69017c101dde99c3e1" });
//const emails = await mailslurp.inboxController.getEmails({ inboxId: "09c4e9eb-c73f-47af-a69e-3e39927361f9" });

//const {MailSlurp} = require("mailslurp-client");
//
//const apiKey = "7f0b1ff51ceba32c6df054cda9571224a49fda7a9e80cb69017c101dde99c3e1";
//const inboxId = "09c4e9eb-c73f-47af-a69e-3e39927361f9";
//const mailslurp = new MailSlurp({ apiKey });
//
//Cypress.Commands.add("waitForLatestEmail", () => {
//    return mailslurp.waitForLatestEmail(inboxId);
//)}

//
// cy.mailslurp()
//   .then(mailslurp => mailslurp.createInbox())
//   .then(inbox => {
//     expect(inbox.emailAddress).to.contain("@mailslurp")
//   })