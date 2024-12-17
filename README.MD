# Cypress Feedback Form Test

This project contains automated tests using [Cypress](https://www.cypress.io/) to validate the functionality of a feedback form. The goal is to ensure that the form is submitted correctly and that the fields can be cleared as expected.

## Requirements

- **Node.js** (version 12 or higher)
- **Cypress** (version 12.0 or higher)
- **Faker.js** for generating random test data

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
2. Navigate to the project directory:

   ```bash
   cd your-repository
3. Install the dependencies:

   ```bash
   npm install

## Test Structure

### Test File: `feedbackForm.cy.js`

The test file contains two main test cases that check the functionality of the feedback form:

#### 1. **Submit Form**

- The test visits the feedback page (`/feedback.html`).
- It fills in the form with randomly generated data using `faker.js`.
- It submits the form and validates whether the correct thank-you message is displayed.

#### 2. **Clear Form**

- It fills the form with example data.
- It verifies if the reset button works correctly to clear the form.

### Custom Commands

The test uses a custom command `submitForm` to simplify filling in the form fields. This command is imported from an external file (`submitForm.cy.js`).

## Running the Tests

To run the tests in interactive mode:

`npx cypress open`

To run the tests in the terminal:

`npx cypress run`

## Dependencies

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with improvements.
