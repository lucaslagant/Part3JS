let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

for (let i = 0; i < days.length; i++) {

    if ((days[i] === 'Samedi') || (days[i] === 'Dimanche')) {
        document.write(days[i].bold() + " ");

    } else {
        document.write(days[i] + " ");
    }
}