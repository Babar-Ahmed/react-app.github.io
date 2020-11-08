import React, { Component } from 'react'
let curenDate = new Date();
curenDate = curenDate.getHours();
let greethings = '';
const Cssstyle = {
}
if(curenDate >=1 && curenDate <12){
    greethings ="Good Morning";
    Cssstyle.color="green";
}else if(curenDate >=12 && curenDate < 19){
    greethings="Good Afternoon";
    Cssstyle.color="Orange";
}else{
    greethings="Good Night";
    Cssstyle.color="Black";
}

class Greetings extends Component {



    render() {
        return (
            <div>
                <h1>Hello Sir <span style={Cssstyle}>{greethings}</span></h1>
            </div>
        )
    }
}

export default Greetings
