// returning day of the week which is visible in header of list item
export default function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

// create image URL
export const createImageUrl = (path) => {
    if(path !== "") {
        return `https://openweathermap.org/img/w/${path}.png`;
    } else {
        return `https://openweathermap.org/img/w/demo.png`
    }
}

// displaying alert
export const showAlert = (message) => {
    alert(message)
}

// checking if a string is empty
export const isEmpty = (text) => {
    return text.length === 0;
}