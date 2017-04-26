export default  {
  verbOfTheDay: 'advocates',
  quoteOfTheDay: "Science isn’t finished until you share it.",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    //TODO: groups should be in bold
    className: 'leftCall',
    heading: 'JOIN THE CONVERSATION',
    body: "To bridge the gap between scientists and the public, we need a direct interface that humanizes scientists, "
    + "promotes dialogue, and creates a consistent access point for research without jargon. "
    + "<a href='http://thepeoplesscience.org' target='_blank'>The People’s Science</a> is launching a new platform today called “The Field” - and wants your help!"
    + " Researchers can post short, engaging summaries of their papers and centralize their outreach efforts."
    + " Anyone can follow labs and scientists to keep track of new findings and discuss posts."
    + " <a href='https://marchforscience.com/blog/2017/4/24/introducing-the-people-for-science-project' target='_blank'>"
    + "Create an account and help change the way we talk about science</a>.",
    buttons: [
      {text: "sign up", href: "https://marchforscience.com/blog/2017/4/24/introducing-the-people-for-science-project"},
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'HONE YOUR SKILLS',
    body: "Effective communication is critical to improving the relationship between science and society."
    + " It’s half how you talk and half how you listen. Practice your communication strategy by pitching a science-inspired story to Story Collider."
    + " Then refine your radar for detecting low quality content by exploring the tips from Norton Press.",
    buttons: [
      {text: "tell your story", href: "https://goo.gl/forms/bb6Z0f57KvlzNMgu2"},
      // {text: "explore the tips - need link", href: ""}
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact your federal officials (Congressperson, Senators) with a digital postcard that states "
    + "why you marched for science and why they should support scientific institutions and science-based policies."
    + " <a href='http://www.marchforscience.com/blog/2017/4/24/i-marched-for-science-contacting-global-leaders' target='_blank'>"
    + "Click here if you are based outside the US!</a>",
    hash: "#NoSidesInScience",
    button: {text: "contact now", href: "http://p2a.co/wTZtgK9"},
    twitterHash: '#SCICOMM #SHAREYOURSCIENCE',
    twitterButton: {text: "Share your science stories.", href:"http://twitter.com/home?status=%23scicomm%20%23shareyourscience%20%23marchforscience"},
    twitterSplain: "Today the conversation is all about the way we talk about science. From TV Shows to books to talks to creative media,"
    + " there are countless ways that people share the things we’ve learned."
    + " There are also countless obstacles to doing so effectively, and researchers who study how to overcome them.",
    twitterTag: "Share your science communication stories, leaders, challenges, and ideas. And of course - share your science.",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Earth and Space Scientists - Share your story of your science and its impact",
    group: "American Geophysical Union",
    bodyWithHTMLLinks: "Sharing stories about your science and its impacts is a vivid and compelling way to inform the public, the media,"
    + " and policy makers of why your science matters. By telling stories to AGU that we can share more widely,"
    + " you help to guarantee that science informs policy decisions and maintains its critical and integral role in public discourse."
    + " Share your story at <a href='https://sharingscience.agu.org/story' target='_blank'>sharingscience.agu.org</a>.",
    image: 'images/moreCTA/telescope-01.svg',
  }, {
    header: "Share why you support Whistle-Blowers",
    group: "Government Accountability Project",
    bodyWithHTMLLinks: "In the week after the March for Science, the Government Accountability Project is asking you"
    + " to help us shift the paradigm around whistle-blowing and create a culture of support by taking action."
    + " <a href='http://twitter.com/home?status=%40GovAcctProj%20%23TeamTruth' target='_blank'>Tweet to @GovAcctProj using the hash-tag #TeamTruth</a>"
    + " and tell us why whistle-blowers are important to you."
    + " Help build the movement by @ing five friends and ask them to share their own reasons. Make the campaign go viral! We'll retweet you."
    + " Then visit <a href='http://www.whistleblower.org'>http://www.wistleblower.org</a> to get a free Whistle-blowing Wallet Card. Print one and give one to a friend!",
    image: 'images/moreCTA/data.svg',
  }, {
    header: "Thank a government scientist!",
    group: "Union of Concerned Scientists",
    bodyWithHTMLLinks: "Use the resources at "
    + "<a href='http://www.ucsusa.org/center-science-and-democracy/thank-a-government-scientist#.WPKGw1MrIxG' target='_blank'>www.ucsusa.org</a>"
    + " to send a Tweet or Facebook message to #ThankAGovScientist"
    + " to the agencies of your choice or a federal scientist you know personally. Thank a scientist today!",
    image: 'images/moreCTA/peeps.svg',
  },
    {
      header: "Webinar on Plants with Superpowers",
      group: "Biology Fortified",
      bodyWithHTMLLinks: "<a href='https://www.biofortified.org' target='_blank'>Biology Fortified</a> will host a live<a href='https://www.biofortified.org/plants-superpowers/' target='_blank'> public webinar at 3:00 EDT April 27 on GMOs</a>."
      + " In this webinar, Biology Fortified will show how biotechnology can be used to give plants superpowers."
      + " We will discuss plant breeding methods, current and future GMO traits, GMO safety, and regulation of biotechnology in the United States."
      + " There will be an opportunity to ask questions during and a er the webinar, and the video will be available for later viewing.",
      image: 'images/moreCTA/flowerbattery.svg',
    }]
}

