'use strict';

module.exports = (date, age, isWorking) => {
    const day = date.getUTCDay();
    const hour = date.getUTCHours();

    const ageUnder20Rule =  ((age <= 20) && (10 <= hour && hour < 13)) || isWorking;
    const ageOver65Rule  =  ((age >= 65) && (7 <= hour && hour < 10)) || isWorking;
    const ageOthersRule = (20 < age && age < 65)

    const generalWeekendRule = !(day === 0 || day === 6)
    const generalNightRule = !(hour >= 18 && hour < 2)

    return (ageUnder20Rule || ageOver65Rule || ageOthersRule) && (generalWeekendRule && generalNightRule)

}