import { SignupReminderBanner } from "@/components/Banners";

export function Add(list1, list2){

  
  // Check if both lists have the same length
  if (list1.length !== list2.length) {
    return <div>Lists must have the same length</div>;
  }
  
  // Perform addition
  const result = list1.map((num, index) => num + list2[index]);
  
  return(result);
};

export function Subtract(list1, list2){

  
  // Check if both lists have the same length
  if (list1.length !== list2.length) {
    return <div>Lists must have the same length</div>;
  }
  
  // Perform addition
  const result = list1.map((num, index) => num - list2[index]);
  
  return (result);
};



export function hasNullValue(obj) {
    return Object.values(obj).some(value => value === null);
  }


