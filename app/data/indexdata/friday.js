export default  {
  verbOfTheDay: 'advocates',
  quoteOfTheDay: "Science is a work in progress.",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    //TODO: groups should be in bold
    className: 'leftCall',
    heading: 'SUPPORT PROFESSIONAL ADVOCACY SOCIETIES',
    body: "Society and scientific institutions often fail to include and value the contributions of scientists from underrepresented groups."
    + " Historically and today, some scientific endeavors have been used to harm and oppress marginalized communities."
    + " To stand in solidarity, we support professional societies focused on advancing historically underrepresented scientists and science advocates."
    + " The success of these societies is everyone’s success, so spend your time today supporting the work necessary to center the future of science on inclusion,"
    + " diversity, equity, and accessibility.",
    buttons: [
      {text: "SUPPORT NOW", href: "http://www.marchforscience.com/blog/2017/4/24/supporting-professional-advocacy-organizations", trackingCode: "left-cta-1"},
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'CELEBRATE STORIES OF SCIENCE',
    body: "Through the hard work of our 500+ Satellite Marches, we’ve built a platform for scientists and individuals everywhere to share their stories."
    + " We’re capturing these stories and working with <a href='http://thepeoplesscience.org/' target='_blank'>The People’s Science</a> to distribute them widely."
    + " Learn about our new project “People for Science” and the associated “I Am A Scientist” campaign to break stereotypes about and by scientists in classrooms",
    buttons: [
      {text: "learn more", href: "http://marchforscience.com/blog/2017/4/24/introducing-the-people-for-science-project", trackingCode: "right-cta-1"},
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact your governor with a digital postcard that states "
    + "why you marched for science and why they should support scientific institutions and science-based policies."
    + " <a href='http://www.marchforscience.com/blog/2017/4/24/i-marched-for-science-contacting-global-leaders' target='_blank'>"
    + "Click here if you are based outside the US!</a>",
    hash: "#NoSidesInScience",
    button: {text: "contact your governor now", href: "http://p2a.co/rpirndL"},
    twitterHash: '#FUTUREOFSCIENCE #MARGINSCI',
    twitterButton: {text: "What do you want the future to be?", href:"http://twitter.com/home?status=%23futureofscience%20%23marginsci%20%23marchforscience"},
    twitterSplain: "How is science likely to change in the coming years? How do you hope it might change?"
    + " Share ideas on future of science and strategies for ensuring that those who stand to be most negatively affected by lack of evidence-based policy"
    + " are supported and heard in the next wave of science.",
    twitterTag: "Share your personal stories and experiences, resources, and reflections at the intersection of science, society, and the future.",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Sign a petition calling on the next Commissioner of the FDA to preserve the Office of Women's Health",
    group: "National Women's Health Network",
    bodyWithHTMLLinks: "Put the health and safety of women ahead of corporate profits or political ideology."
    + " <a href='https://www.nwhn.org/citizens-petition-to-the-commissioner-of-the-fda/'>Sign NWHN's petition here.</a>",
    image: 'images/moreCTA/dropper.svg',
    trackingCode: "more-1"
  }, {
    header: "Sign a petition to advance principles of scientific stewardship",
    group: "The Coalition to Promote Research",
    bodyWithHTMLLinks: "The Coalition to Promote Research is asking scientists to sign a petition called “Advancing Principles of Scientific Stewardship.”"
    + " The petition urges Congress to continue supporting scientific merit review to judge the quality and relevance of research proposals;"
    + " federal science funding agencies’ efforts to assure the quality of federally supported research and its applicability to agencies’ missions and priorities;"
    + " and adherence to and promotion of the highest standards of scientific integrity and transparency in developing and making scientific data available to the public."
    + " <a href='http://www.cossa.org/coalitions/cpr-2/' target='_blank'>Sign the petition at www.cossa.org</a>!",
    image: 'images/moreCTA/plug-01.svg',
    trackingCode: "more-2"
  }, {
    header: "Help inform Congress about the importance of nuclear power",
    group: "Generation Atomic",
    bodyWithHTMLLinks: "<a href='http://www.generationatomic.org' target='_blank'>Download the Atomic Action App</a> to connect and inform congress of the crucial necessity of nuclear power.",
    image: 'images/moreCTA/atom-01.svg',
    trackingCode: "more-3"
  }]
}

