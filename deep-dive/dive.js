const officials = {
  'matt-sebesta': {
    name: 'L.M. "Matt" Sebesta, Jr.',
    role: 'County Judge',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/county-judge',
    strengths: [
      'The county profile reports a Texas A&M civil engineering degree and professional engineer and land surveyor licenses.',
      'The county profile describes prior service on Angleton City Council, as Angleton mayor, and as a county commissioner before becoming County Judge.',
      'The county lists his current duties as presiding over Commissioners Court, serving as chief county administrator, and directing emergency management.'
    ]
  },
  'jay-burridge': {
    name: 'Jay Burridge',
    role: 'Commissioner · Precinct 1',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-1',
    strengths: [
      'The county profile reports U.S. Navy service and experience as a Master Texas Peace Officer.',
      'The county profile says he taught the D.A.R.E. program in Brazoria County for more than a decade.',
      'The county lists Engineering and Parks as his Commissioners Court liaison areas.'
    ]
  },
  'ryan-cade': {
    name: 'Ryan Cade',
    role: 'Commissioner · Precinct 2',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-2',
    strengths: [
      'The county profile reports experience operating an insurance business and a construction company before serving in office.',
      'The county profile describes work in commercial construction planning, project management, permitting, utilities, and finance.',
      'The county biography describes his stated priorities as prudent spending and efficient county operations; these are stated goals, not measured outcomes.'
    ]
  },
  'stacy-adams': {
    name: 'Stacy Adams',
    role: 'Commissioner · Precinct 3',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-3',
    strengths: [
      'The county profile reports a finance degree from Sam Houston State University and prior business ownership.',
      'The county profile reports prior elected service as a drainage commissioner before joining Commissioners Court.',
      'The county lists liaison work with the Library System, Information Systems, and the 288 Corridor Development Team, among other regional roles.'
    ]
  },
  'david-linder': {
    name: 'David Linder',
    role: 'Commissioner · Precinct 4',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-4',
    strengths: [
      'The county profile reports more than 30 years of business experience and 20 years of Texas peace-officer service.',
      'The county biography describes prior work as an Angleton patrolman and Brazoria County deputy constable.',
      'The county lists Airport, Environmental Health, Purchasing, and Child Protective Services as his Commissioners Court liaison areas.'
    ]
  }
};

const selectedKey = new URLSearchParams(window.location.search).get('official');
const official = officials[selectedKey];

if (!official) {
  window.location.replace('../index.html');
} else {
  document.title = `${official.name} | Brazoria County Civic Record`;

  const heading = document.createElement('div');
  const name = document.createElement('h1');
  name.textContent = official.name;
  const role = document.createElement('p');
  role.className = 'official-role';
  role.textContent = official.role;
  heading.append(name, role);
  document.getElementById('official-heading').replaceWith(heading);

  const strengthsList = document.createElement('ul');
  strengthsList.className = 'evidence-checklist';
  official.strengths.forEach((strength) => {
    const item = document.createElement('li');
    item.textContent = strength;
    strengthsList.append(item);
  });
  document.getElementById('official-strengths').replaceWith(strengthsList);
  document.getElementById('official-source').href = official.profile;

  const videoQuery = encodeURIComponent(`${official.name} Brazoria County Commissioners Court`);
  document.getElementById('video-search').href = `https://www.youtube.com/results?search_query=${videoQuery}`;
}
