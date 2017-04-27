export default  {
  verbOfTheDay: "creates",
  quoteOfTheDay: "Science is for everyone.",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    //TODO: groups should be in bold
    className: 'leftCall',
    heading: 'PARTICIPATE IN A CITIZEN SCIENCE PROJECT',
    body: "Citizen science - or science that happens outside of traditional institutions - has been happening throughout most of human history. "
    + "Technology has opened up a new world of ways everyone can be a researcher or part of a research team. "
    + "Check out the list of opportunities at <a href='http://scistarter.com' target='_blank'>SciStarter</a> below"
    + " - and explore your local communities for ways to join (or start!) citizen science organizations.",
    buttons: [
      {text: "PARTICIPATE NOW", href: "https://scistarter.com/just-add-citizen-science", trackingCode: "left-cta-1"},
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'EXPLORE SCIENCE & ART, FILM & MUSIC',
    body: "STEM stands for Science, Technology, Engineering and Mathematics."
    + " Because of the importance of creativity for the critical mind, we've begun adding \"Art\" to the equation, and started promoting STEAM."
    + " We’ve compiled a list of exciting groups that produce STEAM projects so that you can learn about their mission, get involved, and simply enjoy.",
    buttons: [
      {text: "explore now", href: "http://marchforscience.com/blog/exploring-steam-programs", trackingCode: "right-cta-1"}

    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact the President of the United States with a digital postcard"
    + " that states why you marched for science and why they should support scientific institutions and science-based policies."
    + " Based outside of the United States?"
    + " <a href='http://www.marchforscience.com/blog/2017/4/24/i-marched-for-science-contacting-global-leaders' target='_blank'>Click here for instructions!</a>",
    hash: "#NoSidesInScience",
    button: {text: "contact the US president now", href: "http://p2a.co/20umEex"},
    twitterHash: '#STEAM #CITSCI',
    twitterButton: {text: "Share ways science lives outside the lab.", href:"http://twitter.com/home?status=%23steam%20%23citsci%20%23marchforscience"},
    twitterSplain: "Today is all about dismantling the perceived barriers surrounding science and what it means to be a \"scientist\"."
    + " How have you made science your own? How has science inspired the way that you express yourself?",
    twitterTag: "Share citizen science projects, science art, and other ideas that expand what science can do (and who can do it!)",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Share these awesome rap videos about S.T.E.A.M.",
    group: "Steam 16",
    bodyWithHTMLLinks: "<a href='https://www.steam16.com' target='_blank'>Steam 16 students</a> created videos, helping them express what they learned a about S.T.E.A.M. subjects.",
    image: 'images/moreCTA/saturn-01.svg',
    trackingCode: "more-1"
  }, {
    header: "Ask me Anything Forum",
    group: "Public Library of Science",
    bodyWithHTMLLinks: "PLOS will be hosting an <a href='https://www.reddit.com/r/science/wiki/scienceamaseries' target='_blank'>\"Ask Me Anything\"</a>"
    + " forum on <a href='https://www.reddit.com/r/science/' target='_blank'>Reddit Science</a> with members from the March for Science."
    + " Join the forum at 1pm ET on Wednesday April 26."
    + " Participants include Rachael Holloway, diversity director MFS Washington DC; and Kristen Ratan,"
    + " lead organizer MFS San Francisco. More details about the PLOS Reddit Science AMA series, "
    + "including both past and upcoming AMAs, visit <a href='https://www.reddit.com/r/science/wiki/scienceamaseries' target='_blank'>www.reddit.com</a>.",

    image: 'images/moreCTA/icon-talk.svg',
    trackingCode: "more-2"
  }, {
    header: "Join \"Sense About Science\" in recognizing lesser known scientists every Wednesday!",
    group: "Sense About Science USA",
    bodyWithHTMLLinks: "Starting on Wednesday, <a href='http://senseaboutscienceusa.org/' target='_blank'>Sense About Science USA</a> will highlight a #SuperScientist. "
    + "This person may be breaking into a certain field of science (like Abigail Harrison of Mars Generation)"
    + " or already have made his/her mark on science (like Rosalind Franklin)."
    + " Follow the campaign on twitter using the hashtag #SuperScientist.",
    image: 'images/moreCTA/atom-01.svg',
    trackingCode: "more-3"
  },
    {
      header: "Create and share poems from scientific texts",
      group: "Wick Poetry Center",
      bodyWithHTMLLinks: "During the March at the #POETSFORSCIENCE Tent, Wick Poetry Center taught participants how to make “found” poems from science-based texts."
      + " Check out these <a href='http://science.travelingstanzas.com' target='_blank'>\"Emerge\" poems</a> or create your own and share at "
      + "<a href='http://twitter.com/home?status=%23poetsforscience' target='_blank'>#PoetsForScience</a>.",
      image: 'images/moreCTA/battery-01.svg',
      trackingCode: "more-4"
    }, {
      header: "Webinar on Plants with Superpowers",
      group: "Biology Fortified",
      bodyWithHTMLLinks: "<a href='https://www.biofortified.org' target='_blank'>Biology Fortified</a> will host a live"
      + " <a href='https://www.biofortified.org/plants-superpowers/' target='_blank'>public webinar at 3:30 EDT April 26 on GMOs</a>."
      + " In this webinar, Biology Fortified will show how biotechnology can be used to give plants superpowers."
      + " We will discuss plant breeding methods, current and future GMO traits, GMO safety, and regulation of biotechnology in the United States."
      + " There will be an opportunity to ask questions during and a er the webinar, and the video will be available for later viewing.",
      image: 'images/moreCTA/flowerbattery.svg',
      trackingCode: "more-5"
    }],
}
