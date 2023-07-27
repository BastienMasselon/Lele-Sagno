export const makeDatePrettier = (date) => {
    const dateObj = new Date(date);
    const formatedDate = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: 'long',day: '2-digit'}).format(dateObj);
    return formatedDate
}