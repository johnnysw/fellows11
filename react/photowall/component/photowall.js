var ImgFigure = React.createClass({
    render : function(){
        return (
            <figure className="img-figure">
                <img src={"img/" + this.props.data.fileName}/>
                <figcaption>
                    <h2>{this.props.data.title}</h2>
                    <h4></h4>
                </figcaption>
            </figure>
        );
    }
});

var Controller = React.createClass({
    render : function(){
        return (
            <span></span>
        );
    }
});

var Photowall = React.createClass({
    render : function(){
        var imgArr = [];
        var ctrlArr = [];
        imgDatas.forEach(function(value, index){
            imgArr.push(<ImgFigure key={index} data={value}/>);
            ctrlArr.push(<Controller key={index}/>);
        });
        return (
            <section className="stage">
                <section>
                    {imgArr}
                </section>
                <nav>
                    {ctrlArr}
                </nav>
            </section>
        );
    }
});

ReactDOM.render(
    <Photowall/>,
    document.getElementById("photowall")
);

function getRandom(low, high){
    return Math.ceil(Math.random() * (high - low) + low);
}
