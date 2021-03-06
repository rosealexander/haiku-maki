const getDate = () => {

    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = d.getDate();
    const hour = d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    const min = d.getMinutes();

    return `${months[d.getMonth()]} 
            ${day}${day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th'}`
             // at ${hour}:${min}${d.getHours() === 0 || d.getUTCHours() > 12 ? 'am' : 'pm'}`
}

export default getDate
