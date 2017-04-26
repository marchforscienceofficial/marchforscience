export default  {
  verbOfTheDay: 'connects',
  quoteOfTheDay: "Support science in your community.",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    //TODO: groups should be in bold
    className: 'leftCall',
    heading: 'MARCH FOR CLIMATE, JOBS & JUSTICE',
    body: "“Everything we have struggled to move forward in the United States is in peril."
    + " Our loved ones feel under siege, and those in power in Washington are advancing a dark and dangerous vision of America that we know is untrue."
    + " To change everything, we need everyone. Join the Peoples Climate Movement this April 29th in Washington,"
    + " D.C. and across the country to stand up for our communities and climate.” - The People’s Climate Movement. Find the March in your city and hit the streets.",
    buttons: [
      {text: "LEARN MORE", href: "https://peoplesclimate.org/"},
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'KEEP THE MOMENTUM GOING',
    body: "To celebrate the last day of our Week of Action, we’re reconnecting with our communities."
    + " Go to a science museum, community garden, environmental clean-up, or local science-related meetup."
    + " Celebrate the start of a movement by supporting the local people and groups that are already working to make a difference."
    + " Don’t forget to sign up for your Satellite and read more about what’s next.",
    buttons: [
      {text: "WHAT’S NEXT - COMING SOON!", href: ""},
      // {text: "explore the tips - need link", href: ""}
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact your local officials with a digital postcard that states why you marched for science and why she should support scientific institutions and science-based policies.",
    hash: "#NoSidesInScience",
    button: {text: "contact local officials now", href: "http://p2a.co/VBQCsMN"},
    twitterHash: '#SCIENCEINACTION',
    twitterButton: {text: "Show off your local community!", href:"http://twitter.com/home?status=%23scienceinaction%20%23marchforscience"},
    twitterSplain: "This is a grassroots movement and change starts at home. Tell us how your community is channeling the March for Science momentum and what you plan to do next. "
    + "Get the word out, support your neighborhood museums or Climate March, and join the movement!",
    twitterTag: "Share photos from your local science initiatives or actions, your ideas for long-term strategies, and highlights from the Week of Action.",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Inspire the Next Generation of Scientists and Engineers by Mentoring with the New York Academy of Sciences",
    group: "New York Academy of Sciences",
    bodyWithHTMLLinks: "<a href='http://www.nyas.org/STEMmentor' target='_blank'>Sign up to become a mentor</a>."
    + " Providing role models is crucial to encouraging young people particularly young women and students from under-represented groups,"
    + " to pursue careers in science, technology, engineering, and math (STEM)."
    + " Just as important is providing early career STEM professionals with guidance and mentorship to help them navigate career options and hurdles."
    + " That's why the New York Academy of Sciences believes in the power of mentorship."
    + " Learn more at <a href='http://www.nyas.org/STEMmentor' target='_blank'>www.nyas.org</a>.",
    image: 'images/moreCTA/books-01.svg',
  }, {
    header: "Learn how to engage with scientific societies to support action",
    group: "Future of Research",
    bodyWithHTMLLinks: "We’re helping scientists to engage with scientific societies and find out how to advance policy."
    + " This is designed to be open and transparent to help scientists see which societies are facilitating advocacy by their members,"
    + " and to encourage members to discuss policy with their societies."
    + " Check out the facebook group <a href='https://www.facebook.com/ScientistsSpeakingUp' target='_blank'>Scientists Speaking Out</a> for details.",
    image: 'images/moreCTA/molecule-01.svg',
  }, {
    header: "Participate in communication and advocacy training",
    group: "Union of Concerned Scientists",
    bodyWithHTMLLinks: "UCS will be hosting a webinar on May 18 for early career scientists on how to identify resources"
    + " and connect with mentors involved in public engagement and science advocacy. For more information on that and other seminars aimed at"
    + " training scientists to talk to the media, communicate science, write op-eds and influence decision-makers"
    + " check out <a href='http://www.ucsusa.org/action/science_network/science-network-workshop-series.html#.WQBNFlPhCL-' target='_blank'>www.ucsusa.org</a>",
    image: 'images/moreCTA/utensils-01.svg',
  }]
}

