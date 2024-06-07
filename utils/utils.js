import {SignupReminderBanner} from "@/components/Banners"

export function Add(list1, list2) {
    // Check if both lists have the same length
    if (list1.length !== list2.length) {
        return <div>Lists must have the same length</div>
    }

    // Perform addition
    const result = list1.map((num, index) => num + list2[index])

    return result
}

export function Subtract(list1, list2) {
    // Check if both lists have the same length
    if (list1.length !== list2.length) {
        return <div>Lists must have the same length</div>
    }

    // Perform addition
    const result = list1.map((num, index) => num - list2[index])

    return result
}

export function hasNullValue(obj) {
    return Object.values(obj).some((value) => value === null)
}

export function basicDateFormat(dateTimeString) {
    return dateTimeString.split("T")[0]
}


export function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
  
    return true;
  }

export function getNextWeekdayDate(targetWeekday, maxDateStr){
    const currentDate = new Date();
    const maxDate = new Date(maxDateStr)

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    let nextDate = new Date(currentDate);
  
    // Calculate days until the next target weekday
    const daysUntilNextTarget = (+targetWeekday + 7 - currentDate.getDay()) % 7;
    
    // If the target weekday is today, set it to the next occurrence
    nextDate.setDate(currentDate.getDate() + (daysUntilNextTarget || 7));
  
    // Check if the calculated date is beyond the specified maximum date
    if (maxDate && nextDate > maxDate) {
      return maxDate.toString(); // or handle this case as needed
    }
  
    return nextDate.toString();
  };