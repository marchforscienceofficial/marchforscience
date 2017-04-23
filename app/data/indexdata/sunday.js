export default  {
  verbOfTheDay: 'engages',
  quoteOfTheDay: 'A movement in motion stays in motion.',

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    className: 'leftCall',
    heading: 'join the science network',
    body: 'This is just the beginning. Many Satellites are signing on to become a permanent part of the March for Science network.'
    + ' You can create an account and register to get updates nationwide and in your local community.'
    + ' Keep an eye on your Satellite’s homepage; we’re rolling out exciting new features to keep you informed and connected in the coming weeks!',
    buttons: [
      {text: "browse satellites", href: "satellites"}
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'Listen to the post-march podcast',
    body: 'March for Science and the Taste of Science are co-hosting a podcast at the Carnegie Institute. '
    + 'Tune in to listen to organizers and community members share stories from the March and their vision for the future.',
    buttons: [
      {text: 'listen now', href: ''},
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact your local officials (council members,"
    + " your mayor, county executives) with an MFS postcard explaining why they should support scientific institutions and science-based policies.",
    hash: "#NoSidesInScience",
    button: {text: "contact now", href: ""},
    twitterHash: '#KEEPMARCHING',
    twitterButton: {text: "Tell us how YOU marched for science.", href:""},
    twitterSplain: "On April 22, 2017, over 500 Marches worldwide stood up for science. Today is all about celebrating the accomplishments of local communities, pushing the conversation forward,"
    + " and reflecting on the power of this movement. Post pictures of where you marched or the sign you held.",
    twitterTag: "Share your favorite experiences, stories of the people you met, the things you learned, or what you’re inspired to do next.",
  },

    //****************************************/
    //**     More Ways to Get Involved     **//
    //***************************************/
  moreCTAs: [{
      header: "Defend the role of science in a new political era - An open letter to President Trump and the 115th Congress",
      group: "Union of Concerned Scientists",
      bodyWithHTMLLinks: "Join Nobel Laureates, prominent scientists, "
      + "and fellow experts on an open letter outlining expectations"
      + " for the use of science in the Trump administration at "
      + "<a href='http://www.ucsusa.org/center-science-and-democracy/tweet-your-senator-protect-science-based-safeguards?autologin=true#.WPKHQVMrIxF'>www.ucsusa.org</a>.",
      image: 'images/moreCTA/journal-01.svg',
    }, {
      header: "Join a science teach-in!",
      group: "National Center for Science Education (NCSE)",
      bodyWithHTMLLinks: "NCSE has developed Science Teach-In Toolkits to help scientists share knowledge and raise awareness about science and its value to society."
      + " View the toolkit at <a href='http://sharingscience.agu.org/ways-to-reach-out/'>sharingscience.agu.org</a>.",
      image: 'images/moreCTA/apple.svg',
    }, {
      header: "Learn how to give a talk in your local community",
      group: "American Geophysical Union",
      bodyWithHTMLLinks: "Reaching out to local groups is a great way to share your science"
      + " and explain why it’s relevant and important to your community."
      + " View AGU's resources at <a href='http://www.defenders.org/ten-things-you-can-do-help'>www.defenders.org</a>.",
      image: 'images/moreCTA/icon-talk.svg',
    }],
}
