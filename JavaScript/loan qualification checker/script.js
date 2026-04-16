// Declare minimum income and credit score requirements for a duplex loan
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

// Declare minimum income and credit score requirements for a condo loan
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

// Declare minimum income and credit score requirements for a car loan
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

// Define a function that returns a loan eligibility message based on income and credit score
function getLoanMessage(annualIncome, creditScore) {

    // Check if the applicant meets the duplex loan requirements (highest tier)
    if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
        return "You qualify for a duplex, condo, and car loan."

        // Check if the applicant meets the condo loan requirements (mid tier)
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."

        // Check if the applicant meets the car loan requirements (lowest tier)
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."

        // Applicant does not meet any loan requirements
    } else {
        return "You don't qualify for any loans."
    }
}

// Call getLoanMessage with different income and credit score combinations
const duplexLoanMsg = getLoanMessage(85000, 850); // Qualifies for all loans
const condoLoanMsg = getLoanMessage(65000, 690);  // Qualifies for condo and car loan
const carLoanMsg = getLoanMessage(45000, 660);    // Qualifies for car loan only
const noLoanMsg = getLoanMessage(25000, 550);     // Does not qualify for any loans

// Display each loan eligibility message
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);