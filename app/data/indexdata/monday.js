export default  {
  verbOfTheDay: "discovers",
  quoteOfTheDay: "What can we learn next?",

  //**************************/
  //**   Call To Action   **//
  //************************/
  CTAs: [{
    className: 'leftCall',
    heading: 'PROMOTE SCIENCE OUTREACH IN YOUR COMMUNITY',
    body: '"Take today to plan ways to promote science education in your community. '
    + 'Coordinate a Meet & Greet between local graduate students and a Big Brothers/Sister organization.'
    + ' Start or join a science-themed book club on <a href="http://www.meetup.com" target="_blank">Meetup</a>. Or, check out National Council for Science and the Environment'
    + ' (NCSE)’s toolkit for planning a teach-in in your area. Need help? Connect with existing organizations that might be'
    + ' able to support you (e.g. <a href="https://tasteofscience.org/" target="_blank">Taste of Science</a>,'
    + ' local science museums,  <a href="http://www.getoutthescience.org/" target="_blank">Get out the Science</a>)'
    + ' and reach out to your <a href="https://satellites.marchforscience.com/satellites">Local Satellite</a> to get started today.',
    buttons: [
      {text: "teach-in toolkit", href: "https://www.ncseglobal.org/ncse-science-teach-in-toolkit"}
    ],
    image: "images/icon-globe.svg",
  }, {
    className: 'rightCall',
    heading: 'PLAN A SCIENCE GAME NIGHT',
    body: 'Invite your friends over or stay-in with your loved ones and make it a game night, science-style. '
    + 'Try your hand at <a href="https://phylogame.org" target="_blank">“Phylo”</a> a card game that dives into the wonders of biodiversity.'
    + ' Host a beginner’s hack-a-thon with <a href="https://scratch.mit.edu" target="_blank">MIT’s Scratch</a>.'
    + ' Or try one of the other incredible science-inspired board or video games in our list below!',
    buttons: [
      {text: 'PICK A GAME NIGHT', href: ''},
    ],
    image: "images/icon-bulb.svg",
  }],

  //****************************************/
  //**     Megaphone & Twitter           **//
  //***************************************/
  megaphone: {
    text: "Contact friends, colleagues, neighbors and family members about the importance of advocating for scientific institutions and science-based policies by sharing the Week of Action link"
    + " on social media and encouraging them to engage their elected officials.",
    hash: "#NoSidesInScience",
    button: {text: "share now", href: "http://twitter.com/home?status=%23nosidesinscience%20%23marchforscience"},
    twitterHash: '#KIDSCIENTISTS',
    twitterButton: {text: "Share your stories of childhood curiosity!", href:"http://twitter.com/home?status=%23kidscientists%20%23marchforscience"},
    twitterSplain: "Remember your middle school science fair project? Or the “but why” questions that perplexed the adults when you were a kid? "
    + "Did you have ambitions to be an astronaut or a paleontologist when you grew up? Today we’re reminding ourselves of the deep-rooted curiosity we all share!",
    twitterTag: "Share stories and images of your childhood or your children‘s early “scientist” moments!.",
  },

  //****************************************/
  //**     More Ways to Get Involved     **//
  //***************************************/
  moreCTAs: [{
    header: "Connect with your local community",
    group: "American Geophysical Union",
    bodyWithHTMLLinks: "You’ve made the decision to talk with non-scientists about what you do. Great! But where do you start? "
    + "Check out AGU's resources and examples of the types of opportunities that you may want to pursue at"
    + " <a href=' http://sharingscience.agu.org/ways-to-reach-out' target='_blank'>www.sharingscience.agu.org</a>.",
    image: 'images/moreCTA/protractor-01.svg',
  },{
    header: "Webinar: Taking Action to Support Evidence-Based Vaccine Policies",
    group: "Secular Coalition for America",
    bodyWithHTMLLinks: "On Monday, April 24 at 12 PM ET, "
    + "the Secular Coalition for America will host a webinar discussing strategies to engage and "
    + "support evidence-based vaccine policies at the local and national level. Sign up to join the webinar at "
    + "<a href='https://secularcoalition.clickmeeting.com/taking-action-to-support-evidence-based-vaccine-policies-on-the-national-local-level/register?_ga=1.139125236.618533041.1487956031'  target='_blank'>"
    + "www.secularcoalition.clickmeeting.com</a>.",
    image: 'images/moreCTA/shots-01.svg',
  }, {
    header: "Teach friends and students about science while playing a board game!",
    group: "Genetics Society of America",
    bodyWithHTMLLinks: "Play the card game Model Organism Phylo! This is an engaging classroom (or living room) activity about science practice, biology research, and model organisms. This card game can be used as an educational resource, as-is;"
    + " or it can develop into a creative class project where students design modifications"
    + " or expansion packs to introduce additional genetic-themed concepts. "
    + "Learn more at <a href='http://genestogenomes.org/playing-a-game-with-basic-research/' target='_blank'>genestogenomes.org</a>.",
    image: 'images/moreCTA/petridish.svg',
  }],
}
