class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'That was more of a crank',
      randomIndex: '' };

    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    {/*what is the best if statement to rendering the quotes?*/}
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 13) });

    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value });

  }
  render() {
    const possibleQuotes = [
    {
      author: 'Dana White',
      text: "This is the Ultimate Fighter. We don’t vote guys off, we beat them off.",
      isTrue: true },

    {
      author: 'GSP',
      text: 'I knew he was hurt when I hit him in the nose and he went AHHHHH…',
      isTrue: true },

    {
      author: 'Ken Shamrock',
      text: 'I’m going to beat you into a living death!',
      isTrue: true },

    {
      author: 'Nick Diaz',
      text: 'Actually on the contrary, my MMA career has gotten in the way of my weed smoking.',
      isTrue: true },

    {
      author: 'Tito Ortiz',
      text: 'God put me on this earth to be a tool.',
      isTrue: true },

    {
      author: 'Tito Ortiz',
      text: 'I train six days, actually six days a week. Five days a week, I\'ll train three days a week. One of those days I will train two days of the week. So, six days a week I will be training.',
      isTrue: true },

    {
      author: 'Tito Ortiz',
      text: 'He\'s reaching for he\'s reaching for those grapes.',
      isTrue: true },

    {
      author: 'Tito Ortiz',
      text: 'Yes it\'ll be in the fall, in April. I start camp probably in the beginning of July.',
      isTrue: true },

    {
      author: 'Mike Goldberg',
      text: 'His precision is…..so precise',
      isTrue: true },

    {
      author: 'Ken Shamrock',
      text: 'I will beat you into the living death',
      isTrue: true },

    {
      author: 'Tim Sylvia',
      text: 'Half of this game is 90% mental.',
      isTrue: true },

    {
      author: 'Renzo Gracie',
      text: 'My honor is my loyalty',
      isTrue: true },

    {
      author: 'Blue Belts',
      text: 'That was more of a crank.',
      isTrue: true }];


    const answer = possibleQuotes.filter(quote => quote.isTrue === true);

    const renderAnswer = answer.map(quote => /*#__PURE__*/React.createElement("p", { key: quote.text }, quote.text));

    const renderAnswers = renderAnswer[this.state.randomIndex];

    const authorAnswer = answer.map(quote => /*#__PURE__*/React.createElement("p", { key: quote.author }, quote.author));

    const authorSolution = authorAnswer[this.state.randomIndex];
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { class: "quote-text" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left" }), /*#__PURE__*/
      React.createElement("span", { id: "text" },
      renderAnswers)), /*#__PURE__*/


      React.createElement("div", { class: "quote-author" }, /*#__PURE__*/
      React.createElement("span", { id: "author" },
      authorSolution)), /*#__PURE__*/


      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("a", {
        href: "twitter.com/intent/tweet",
        class: "button",
        id: "tweet-quote",
        title: "tweet this quote!",
        target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-twitter" })), /*#__PURE__*/

      React.createElement("button", {
        onClick: this.ask,
        class: "button",
        id: "new-quote" }, "New Quote"))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), document.getElementById('root'));