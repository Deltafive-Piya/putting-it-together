// import React from "react";
//REMEMBER- Now that you're wanting to set the age to a STATE, Add this declaration and remove the commented one above
import React, {useState} from 'react'; 

const PersonCard = (props) => {
	const { firstName, lastName, hairColor } = props; // REMEMBER! These properties are each OBJECT DESTRUCTURING ASSIGNMENTS destructuring the props from the personCard

	/* For functional birthday button, need to:
    Make a state to hold the age
    Make the onClick functionality
*/
    // Make a state
    const [age, setAge] = useState(props.age); //Needs defining up top...

    // OnClick functionality
    const BirthdayTime = () => {
        setAge(age + 1);
    }

	return (
		<div>
			<h2>
				{firstName} {lastName}
			</h2>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
            <button onClick ={BirthdayTime}> One step closer to nothingness? </button> 
		</div>
	);
};

export default PersonCard;
