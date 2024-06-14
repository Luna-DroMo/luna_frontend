export function ClassLogo({text, color='lunapurple'}){

    const width = 8
    const height = width
    let words = text.split(' ');
    if (words.length > 2) {
         words = words.slice(0, 2); // Return the first 2 values
      }
  
    // Map over the words and extract the first letter of each word
    const firstLetters = words.map(word => word.charAt(0).toUpperCase());
    
    return (
        <div className={` my-1 bg-green w-${width} h-${height} flex items-center justify-center rounded-full bg-${color} text-white`}>
            <p className="align-middle">{firstLetters.join('')}</p>
            
        </div>
        
        
    )
}