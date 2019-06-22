class Machine extends React.Component {
    render() {
        let msg;
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        
        return(
            <div>
                <p>{s1} {s2} {s3}<br/></p>
                <p>{winner ? 'Winner': 'Loser'}</p>
            </div>
        );
            
    }
}
