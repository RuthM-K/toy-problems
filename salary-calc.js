function calculateNetSalary() {
    // Input basic salary and benefits as numbers
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
  
    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Please enter valid numbers for basic salary and benefits.");
      return;
    }
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Payee (Tax)
    const taxPercentage = 0.3; // 30% tax rate
    const payee = grossSalary * taxPercentage;
  
    // Calculate NHIF Deductions
    const nhifPercentage = 0.05; // 5% NHIF rate
    const nhifDeductions = grossSalary * nhifPercentage;
  
    // Calculate NSSF Deductions
    const nssfPercentage = 0.1; // 10% NSSF rate
    const nssfDeductions = grossSalary * nssfPercentage;
  
    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    // Display the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  // Call the function to calculate net salary
  calculateNetSalary();
  