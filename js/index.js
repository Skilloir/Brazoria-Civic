const officials = [
  {
    name: 'L.M. "Matt" Sebesta, Jr.',
    searchName: 'Matt Sebesta',
    role: 'County Judge',
    searchTerms: 'County Judge',
    summary: 'Presides over Commissioners Court, serves as chief county administrator, and directs emergency management.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/county-judge'
  },
  {
    name: 'Jay Burridge',
    role: 'Commissioner · Precinct 1',
    searchTerms: 'Commissioner Precinct 1',
    summary: 'Represents Precinct 1 on Commissioners Court. The county lists Engineering and Parks as his court liaison areas.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-1'
  },
  {
    name: 'Ryan Cade',
    role: 'Commissioner · Precinct 2',
    searchTerms: 'Commissioner Precinct 2',
    summary: 'Represents Precinct 2 on Commissioners Court and participates in countywide court decisions.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-2'
  },
  {
    name: 'Stacy Adams',
    role: 'Commissioner · Precinct 3',
    searchTerms: 'Commissioner Precinct 3',
    summary: 'Represents Precinct 3 on Commissioners Court and participates in countywide court decisions.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-3'
  },
  {
    name: 'David Linder',
    role: 'Commissioner · Precinct 4',
    searchTerms: 'Commissioner Precinct 4',
    summary: 'Represents Precinct 4 on Commissioners Court. The county lists Airport, Environmental Health, Purchasing, and Child Protective Services as his court liaison areas.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-4'
  }
];

const cardContainer = document.getElementById('official-cards');
const searchInput = document.getElementById('official-search');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const courtRecordsUrl = 'https://brazoriacountytx.legistar.com/';

function makeOfficialCard(official) {
  const searchName = official.searchName || official.name;
  const youtubeQuery = encodeURIComponent(`${searchName} Brazoria County Commissioners Court`);
  const transcriptQuery = encodeURIComponent(`site:youtube.com/watch "${searchName}" "Brazoria County" transcript`);

  return `
    <article class="official-card">
      <div class="card-header">
        <h3>${official.name}</h3>
        <span class="role-badge">${official.role}</span>
      </div>
      <p class="responsibility"><strong>Public role:</strong> ${official.summary}</p>
      <p class="card-source">Officeholder and role listed on the official Brazoria County page.</p>
      <div class="card-actions">
        <a href="${official.profile}" target="_blank" rel="noopener noreferrer">Official county page <span aria-hidden="true">↗</span></a>
        <a href="${courtRecordsUrl}" target="_blank" rel="noopener noreferrer">Court agendas &amp; minutes <span aria-hidden="true">↗</span></a>
        <a class="video-search" href="https://www.youtube.com/results?search_query=${youtubeQuery}" target="_blank" rel="noopener noreferrer">Search public videos <span aria-hidden="true">↗</span></a>
        <a class="video-search" href="https://www.google.com/search?q=${transcriptQuery}" target="_blank" rel="noopener noreferrer">Search indexed transcripts <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
}

function renderOfficials(query = '') {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = officials.filter((official) =>
    `${official.name} ${official.role} ${official.searchTerms}`.toLocaleLowerCase().includes(normalizedQuery)
  );

  cardContainer.innerHTML = matches.map(makeOfficialCard).join('');
  resultsCount.textContent = `${matches.length} of ${officials.length} officials`;
  noResults.hidden = matches.length !== 0;
}

renderOfficials();
searchInput.addEventListener('input', (event) => renderOfficials(event.target.value));

let currentScale = 1;
const setFontScale = (scale) => {
  currentScale = Math.max(0.8, Math.min(1.4, Math.round(scale * 10) / 10));
  document.documentElement.style.setProperty('--font-scale', currentScale);
};

document.getElementById('btn-font-increase').addEventListener('click', () => setFontScale(currentScale + 0.1));
document.getElementById('btn-font-decrease').addEventListener('click', () => setFontScale(currentScale - 0.1));

const contrastButton = document.getElementById('btn-contrast-toggle');
contrastButton.addEventListener('click', () => {
  const isEnabled = document.body.classList.toggle('high-contrast');
  contrastButton.setAttribute('aria-pressed', String(isEnabled));
});