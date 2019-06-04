// Number picker component
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 7) {
            msg = <div>
                <h2>WAAH MODIJI BADHAI HO</h2>
                <img src="https://media3.giphy.com/media/3o7bu12GHm4G5frn6U/giphy.gif" /> 
            </div>
        } else {
            msg = <p>Sorry bro, 2002 again?</p>
        }
        return (
            <div>
            <h1>Your number is: {num} </h1>
            
            {/* <p>{num === 7 ? 'Waaah Modiji Waaaah!' : 'Unlucky!'}</p> */}
            {msg}
            {/* {
                //num === 7 
                //? <img src="https://media3.giphy.com/media/3o7bu12GHm4G5frn6U/giphy.gif" /> 
                //: null
                //num === 7 &&
                //<img src="https://media3.giphy.com/media/3o7bu12GHm4G5frn6U/giphy.gif" /> 
            //
            } */}
            </div>
        );
    }
}


ReactDOM.render(<NumPicker />, document.getElementById('root'));