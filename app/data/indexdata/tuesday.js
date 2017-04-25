export default  {
  verbOfTheDay: "empowers",
  quoteOfTheDay: "Science is everywhere. Let’s keep it that way.",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    //TODO: groups should be in bold
    className: 'leftCall',
    heading: 'SIGN THE ENVIRONMENTAL VOTERS’ PLEDGE',
    body: "We’ve partnered with <a href='http://www.environmentalvoter.org' target='_blank'>Environmental Voter Project</a> to make it easy for you to register to vote. "
    + "Once you’ve registered, take a moment to learn about the ways that science-backed policy can help the environment."
    + " When you’re ready, you can sign our pledge to commit to staying informed and casting votes that prioritize science-based environmental action.",
    buttons: [
      {text: "register now", href: "http://marchforscience.turbovote.org "},
      {text: "SIGN THE PLEDGE", href: "https://act.myngp.com/forms/5905328088092313600"}
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'REDUCE YOUR FOOTPRINT',
    body: "Every day is filled with countless small choices that you can make to reduce your carbon footprint."
    + " We’ve partnered with <a href='https://www.cooleffect.org/' target='_blank'>Cool Effect</a>"
    + " - an organization that identifies and supports the most promising projects to battle climate change. "
    + "You can join their community and pick the exact project that you want to support from their impressive portfolio of global carbon reducing options.",
    buttons: [
      {text: 'SUPPORT THE CAUSE', href: 'https://www.cooleffect.org/'},
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact your local officials (council members,"
    + " your mayor, county executives) with a digital postcard explaining why they should support scientific institutions and science-based policies.",
    hash: "#NoSidesInScience",
    button: {text: "contact now", href: "http://p2a.co/20umEex"},
    twitterHash: '#EVERYDAYSCIENCE',
    twitterButton: {text: "How did you use science today?", href:"http://twitter.com/home?status=%23everydayscience%20%23marchforscience"},
    twitterSplain: "When something is with us all the time, we can sometimes forget it's there. Science is all around us: the ways we eat, get to work, communicate, and importantly,"
    + " the way we protect our planet.",
    twitterTag: "Share the ways that science helped you today. Bonus points for using science to keep Earth healthy and strong!",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Email your legislators to support science",
    group: "Academics for the Future of Science",
    bodyWithHTMLLinks: "Take two minutes to use our user-friendly tool"
    + " to ask your representatives to support US science during this critical time at <a href='https://save-science.org' target='_blank'>save-science.org</a>."
    + " We have a pre-filled message with professional language but encourage you to add your own personal reasons for supporting science if you wish.",
    image: 'images/moreCTA/journal-01.svg',
  }, {
    header: "Send a “Science is Essential” postcard to your legislator",
    group: "American Geophysical Union",
    bodyWithHTMLLinks: "You can <a href='https://sharingscience.agu.org/files/2017/03/MarchForScience_Poscard_FINALnocrops.pdf' target='_blank'>print this postcard</a> "
    + "or make your own. Fill it out and send it to your legislators to let them know how important science is to you! "
    + "Check out other wasy to be involved at <a href='http://sharingscience.agu.org/ways-to-reach-out/' target='_blank'>www.agu.org</a>",
    image: 'images/moreCTA/rocket.svg',
  }, {
    header: "Join APA's action network",
    group: "American Psychological Association",
    bodyWithHTMLLinks: "Use your voice to weigh in opposition to the skinny budget proposal which includes large cuts to science, "
    + "education, and programs for the underserved at <a href='http://www.apa.org/about/gr/advocacy/network.aspx' target='_blank'>www.apa.org</a>.",
    image: 'images/moreCTA/satellite-01.svg',
  },
    {
      header: "Ask Congress to pass a 2017 budget that funds science",
      group: "Biophysical Society",
      bodyWithHTMLLinks: "Lend your voice to the cause by visiting <a href=' http://www.biophysics.org/Policy/AdvocacyAction/tabid/443/Default.aspx' target='_blank'>www.biophysics.org</a>.",
      image: 'images/moreCTA/medical-01.svg',
    },
    {
      header: "Endocrinologists - Write your member of Congress about the importance of NIH funding",
      group: "Endocrine Society",
      bodyWithHTMLLinks: "Take a moment to write to your member of Congress about the importance of "
      + "NIH funding for endocrine research and a host of other endocrine-related issues. "
      + "Get involved at <a href='http://www.endocrine.org/advocacy' target='_blank'>www.endocrine.org/advocacy</a>. For other activities, check out <a href='https://www.endocrine.org/marchforscience'>www.endocrine.org/marchforscience</a>.",
      image: 'images/moreCTA/heart-01.svg',
    }],
}
