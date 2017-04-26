export default  {
  verbOfTheDay: 'engages',
  quoteOfTheDay: 'A movement in motion stays in motion.',

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    className: 'leftCall',
    heading: 'Join the movement',
    body: 'Yesterday, over 600 cities marched worldwide. '
    + 'Many of these Satellites are signing on to become a permanent part of the March for Science network.'
    + ' To support these Satellites, we’re designing infrastrucutre and resources to connect communities to coordinated actions, needs,'
    + ' and resources. Keep an eye on your <a href="https://satellites.marchforscience.com/satellites">Satellites</a> homepage;'
    + ' we’re rolling out exciting new features in the coming weeks.\n\nOnce you’ve signed up, recruit a few friends to do the same!',
    buttons: [
      {text: "Browse satellites", href: "https://satellites.marchforscience.com/satellites", trackingCode: "left-cta-1"}
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'Learn about what comes next',
    body: 'This is just the beginning.'
    + ' We are building an organization centered on informed advocacy,'
    + ' community building, and accessible education. We’ll work with Satellites and partners to create new programs and scale existing programs aimed at'
    + ' improving the relationship between science and society.',
    buttons: [
      {text: 'Learn more', href: 'vision', trackingCode: "right-cta-1"},
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Read and share \"I Marched For Science,\" which includes a statement on the importance of civic engagement.",
    hash: "#NoSidesInScience",
    button: {text: "Read now", href: "https://www.marchforscience.com/blog/2017/4/23/i-marched-for-science"},
    twitterHash: '#KEEPMARCHING',
    twitterButton: {text: "Tell us how YOU marched for science.", href:"http://twitter.com/home?status=%23keepmarching%20%23marchforscience"},
    twitterSplain: "On April 22, 2017, over 500 Marches worldwide stood up for science. Today is all about celebrating the accomplishments of local communities, pushing the conversation forward,"
    + " and reflecting on the power of this movement. Post pictures of where you marched or the sign you held.",
    twitterTag: "Share your favorite experiences, stories of the people you met, the things you learned, or what you’re inspired to do next.",
  },

    //****************************************/
    //**     More Ways to Get Involved     **//
    //***************************************/
  moreCTAs: [{
      header: "Learn how to give a talk in your local community",
      group: "American Geophysical Union",
      bodyWithHTMLLinks: "Reaching out to local groups is a great way to share your science"
      + " and explain why it’s relevant and important to your community."
      + " View AGU's resources at <a href='http://www.defenders.org/ten-things-you-can-do-help' target='_blank'>www.defenders.org</a>.",
      image: 'images/moreCTA/icon-talk.svg',
      trackingCode: "more-1"
    }
  ]
}
