var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        ReactJs Dallas
      </div>
    );
  }
});

var Link = React.createClass({
  getInitialState: function() {
    return {
      mouseOver: false,
    };
  },

  _handleMouseOver: function() {
    this.setState({ mouseOver: true });
  },

  _handleMouseLeave: function() {
    this.setState({ mouseOver: false });
  },

  render: function() {
    return (<a href={this.props.to} target="_blank" style={{ color: '#ff4081', textDecoration: this.state.mouseOver ? 'underline' : 'none' }} onMouseOver={this._handleMouseOver} onMouseLeave={this._handleMouseLeave}>
      {this.props.text}
    </a>);
  }
});

var Talk = React.createClass({
  render: function () {
    return (
      <div>
        <h2>
          {this.props.dateTime}
          <span className="location">
           - {this.props.location} (<Link to={this.props.mapLink} text="map" />)
          </span>
        </h2>
        <div className="topic">
          {this.props.topic} 
          <br />
          ({this.props.by})
        </div>
      </div>
    )
  }
});

var Body = React.createClass({
  render: function() {
    return (
      <div className="meetups">
        <Talk
          dateTime="Tue March 8th @ 6:45pm"
          location="2611 Internet Blvd, Suite 120, Frisco, TX"
          mapLink="https://www.google.com/maps?f=q&hl=en&q=2611+Internet+Blvd,+Suite+120,+Frisco,+TX,+us"
          topic="Introduction to React"
          by="Morry Kang, Software Engineer"
        />
        <Talk
          dateTime="Tue April 12th @ 6:45pm"
          location="2611 Internet Blvd, Suite 120, Frisco, TX"
          mapLink="https://www.google.com/maps?f=q&hl=en&q=2611+Internet+Blvd,+Suite+120,+Frisco,+TX,+us"
          topic="State Management in React"
          by="Geoffery Abdullah, Software Engineer"
        />
      </div>
    );
  }
});

var Note = React.createClass({
  render: function() {
    return (
      <div className="note">
        We love Facebook's ReactJS, open-source projects, and developing apps for the web. Whether you are a seasoned veteran or a newbie to React, 
        join us to learn more about why React is gaining traction among developers around the world. Come for the free food and drink, 
        stay for the great conversation and learning! Hosted by <Link to="https://www.call-em-all.com/" text="Call-Em-All" /> and <Link to="http://www.tourconnect.com/" text="TourConnect" />, companies who created the popular open-source project <Link to="http://www.material-ui.com/#/" text="Material-UI"/> and who use ReactJS every day.
        <br />
        <br />
        Follow us on <Link to="https://twitter.com/ReactJSDallas" text="Twitter" /> and <Link to="https://www.facebook.com/reactjsdallas" text="Facebook" /> to keep up with the Jones's!
      </div>
      
    );
  }
});

ReactDOM.render(
    <div>
      <Header />
      <Body />
      <Note />
    </div>,
    document.getElementById('content')
  );
