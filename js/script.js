function calculateAge() {
    const day = parseInt(document.getElementById('birthDay').value);
    const month = parseInt(document.getElementById('birthMonth').value);
    const year = parseInt(document.getElementById('birthYear').value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const diffInMilliseconds = today - birthDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Accounting for leap years
    const age = Math.floor(diffInMilliseconds / millisecondsInYear);

    document.getElementById('result').innerText = `You are ${age} years old.`;
}