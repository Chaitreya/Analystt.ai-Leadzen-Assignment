import {useState} from 'react'

function Rows(props) {

    const active = "grid grid-cols-5 justify-center";
    const hide = "hidden";

    const [details,setDetails] = useState(hide);



    const [buttonState,setButtonState] = useState(false)

    function handleClick(){
        if(buttonState === false){
            setButtonState(true);
        }
        else{
            setButtonState(false);
        }

        if(details === hide){
            setDetails(active);
        }
        else{
            setDetails(hide);
        }
    }



    return (
        <div className="bg-white mx-2 my-3 justify-center items-center rounded-xl drop-shadow-xl p-2">
            <div className="grid grid-cols-5 justify-center items-center">
                <p className="p-2 px-20 text-center font-semibold text-lg">{props.companyName}</p>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold">Contact</h1>
                    <h2 className="text-center">{props.name}</h2>
                </div>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold">City</h1>
                    <h2 className="text-center">{props.city}</h2>
                </div>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold">Website</h1>
                    <h2 className="text-center">{props.website}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-center font-semibold bg-red-500 text-white rounded-xl p-2 border-2 border-red-500 hover:bg-white hover:text-red-500 duration-200" onClick={handleClick}>{buttonState ? `Hide Details` :`View Details`}</button>
                </div>
            </div>
            <div className={details} >
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold p-2">Catch Phrase</h1>
                    <h2 className="text-center">{props.catchPharse}</h2>
                    <h1 className="text-center font-semibold p-2">Business</h1>
                    <h2 className="text-center">{props.bs}</h2>
                </div>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold p-2">Username</h1>
                    <h2 className="text-center">{props.username}</h2>
                    <h1 className="text-center font-semibold p-2">Email Address</h1>
                    <h2 className="text-center">{props.email}</h2>
                </div>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold p-2">Street</h1>
                    <h2 className="text-center">{props.street}</h2>
                    <h1 className="text-center font-semibold p-2">Suite</h1>
                    <h2 className="text-center">{props.suite}</h2>
                    <h1 className="text-center font-semibold p-2">Zipcode</h1>
                    <h2 className="text-center">{props.zipcode}</h2>
                </div>
                <div className="p-2 px-20">
                    <h1 className="text-center font-semibold p-2">Phone Number</h1>
                    <h2 className="text-center">{props.phone}</h2>
                </div>
            </div>
        </div>


    )

}

export default Rows;