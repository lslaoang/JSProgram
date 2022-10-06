
let day = "Friday";
let activity = ""

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":    
    activity = "work";
    break;

    case "Saturday" :
    case "Sunday" :
        activity = "rest";
        break;
    default :
        activity = "playtime";
        break;
}
console.log(activity);