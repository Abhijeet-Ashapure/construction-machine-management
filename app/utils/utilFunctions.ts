// returning day of the week which is visible in header of list item
export default function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

// displaying alert
export const showAlert = (message) => {
    alert(message)
}

// checking if a string is empty
export const isEmpty = (text) => {
    return text.length === 0;
}