
// Arrays of data for the message generator
const actions = [
    "Believe in yourself",
    "Take a bold step",
    "Embrace challenges",
    "Dream big",
    "Stay focused",
  ];
  
  const subjects = [
    "your goals",
    "your passion",
    "your inner strength",
    "the opportunities ahead",
    "the process of growth",
  ];
  
  const outcomes = [
    "and success will follow.",
    "and you'll inspire others.",
    "and you'll achieve greatness.",
    "and you'll make a difference.",
    "and you'll overcome any obstacle.",
  ];
  
  // Function to generate a random number based on array length
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  
  // Function to generate a random message
  const generateMessage = () => {
    const action = actions[getRandomIndex(actions)];
    const subject = subjects[getRandomIndex(subjects)];
    const outcome = outcomes[getRandomIndex(outcomes)];
  
    return `${action} ${subject} ${outcome}`;
  };
  
  // Run the program and display the output
  console.log("Your inspirational message:");
  console.log(generateMessage());
  