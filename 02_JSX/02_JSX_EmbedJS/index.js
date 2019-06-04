function getMood() {
    const moods = ['Angry', 'Hungry', '2002Angry', '2019WinningMood', 'AmitShahKahanHai Mood'];
    return moods[Math.floor(Math.random()*moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>Wah Modiji Wah!</h1>
                <img src="https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_400x400.png" />
                <h1>My mood is: {getMood()}</h1>
            
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));