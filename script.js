// Salary Data (Backend Reference, not shown to users)
const salaryData = {
    "Glassdoor": {
        "United States": 44000,
        "Philippines": 21000,
        "Canada": 37000,
        "United Kingdom": 33243
    },
    "Indeed": {
        "United States": 39000,
        "Philippines": 5300,
        "Canada": 54969,
        "United Kingdom": 26483
    },
    "ZipRecruiter": {
        "United States": 39098,
        "Philippines": 4500,
        "Canada": 33911,
        "United Kingdom": 36698
    }
};

// Calculate Function
document.getElementById('calculate').addEventListener('click', function() {
    const source = document.getElementById('source').value;
    const businessCountry = document.getElementById('businessCountry').value;
    const offshoreCountry = document.getElementById('offshoreCountry').value;
    
    const businessSalary = salaryData[source][businessCountry];
    const offshoreSalary = salaryData[source][offshoreCountry];
    
    const savings = businessSalary - offshoreSalary;

    document.getElementById('result').innerText = 
        `If you hire in ${businessCountry}, the average salary is $${businessSalary.toLocaleString()} per year. 
        If you offshore to ${offshoreCountry}, the average salary is $${offshoreSalary.toLocaleString()} per year. 
        Estimated savings: $${savings.toLocaleString()} per year.`;
});