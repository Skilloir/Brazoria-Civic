const officials = [
  {
    name: 'L.M. "Matt" Sebesta, Jr.',
    searchName: 'Matt Sebesta',
    slug: 'matt-sebesta',
    role: 'County Judge',
    searchTerms: 'County Judge',
    summary: 'Presiding officer of Commissioners Court and County Emergency Management Director.',
    tldr: 'Texas A&M civil engineering graduate; Angleton mayor (1998–2002) and Precinct 2 commissioner (2007–2014).',
    area: 'Countywide',
    focus: 'Voted in favor of economic development and tax abatements; verify individual roll-call votes in court records.',
    quote: 'It is an honor and a privilege to serve the citizens of Brazoria County.',
    quoteSource: 'County Judge profile',
    evidenceNote: 'The August 2026 apology and $2,500 donation to BACH are reported claims. Use the linked station coverage and court records to confirm context and dates; this page does not supply a verbatim apology quote.',
    proofUrl: 'https://abc13.com/post/brazoria-county-judge-apologizes-offensive-comments-commissioners-court-meeting/19754563/',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/county-judge'
  },
  {
    name: 'Jay Burridge',
    slug: 'jay-burridge',
    role: 'Commissioner · Precinct 1',
    searchTerms: 'Commissioner Precinct 1',
    summary: 'Represents Precinct 1, including Freeport, Clute, and Lake Jackson.',
    tldr: 'Commissioner for Brazoria County’s coastal industrial and port communities.',
    area: 'Freeport, Clute, and Lake Jackson',
    focus: 'Port accessibility, road repairs, and industrial zoning infrastructure.',
    evidenceNote: 'These are civic topics to track, not verified statements of the commissioner’s priorities. Check agendas, minutes, and project records for individual decisions and outcomes.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-1'
  },
  {
    name: 'Ryan Cade',
    slug: 'ryan-cade',
    role: 'Commissioner · Precinct 2',
    searchTerms: 'Commissioner Precinct 2',
    summary: 'Represents Precinct 2, including Angleton and central Brazoria County.',
    tldr: 'Commissioner for Angleton and central county communities.',
    area: 'Angleton and central Brazoria County',
    focus: 'Drainage projects, county facilities, and central precinct growth management.',
    evidenceNote: 'These are civic topics to track, not verified statements of the commissioner’s priorities. Check agendas, minutes, and project records for individual decisions and outcomes.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-2'
  },
  {
    name: 'Stacy L. Adams',
    slug: 'stacy-adams',
    role: 'Commissioner · Precinct 3',
    searchTerms: 'Commissioner Precinct 3',
    summary: 'Represents Precinct 3, including Pearland and Alvin.',
    tldr: 'Commissioner for the county’s northern suburban communities.',
    area: 'Pearland and Alvin',
    focus: 'Suburban transit corridors, public safety funding, and northern growth management.',
    evidenceNote: 'These are civic topics to track, not verified statements of the commissioner’s priorities. Check agendas, minutes, and project records for individual decisions and outcomes.',
    profile: 'https://www.brazoriacountytx.gov/government/commissioners-court/commissioner-precinct-3'
  },
  {
    name: 'David Linder',
    slug: 'david-linder',
    role: 'Commissioner · Precinct 4',
    searchTerms: 'Commissioner Precinct 4',
    summary: 'Represents Precinct 4, including West Columbia, Sweeny, and western Brazoria County.',
    tldr: 'Commissioner for western county and rural communities.',
    area: 'West Columbia, Sweeny, and western Brazoria County',
    focus: 'Rural road preservation, flood mitigation, and local community services.',
    evidenceNote: 'These are civic topics to track, not verified statements of the commissioner’s priorities. Check agendas, minutes, and project records for individual decisions and outcomes.',
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
        <div class="card-title-group">
          <h3>${official.name}</h3>
          <a class="deeper-dive-link" href="deep-dive/index.html?official=${official.slug}">Deeper Dive <span aria-hidden="true">→</span></a>
        </div>
        <span class="role-badge">${official.role}</span>
      </div>
      <p class="responsibility"><strong>Public role:</strong> ${official.summary}</p>
      <p class="tldr-box"><strong>At a glance:</strong> ${official.tldr}</p>
      <p class="official-area"><strong>Represented area:</strong> ${official.area}</p>
      <p class="official-focus"><strong>Areas to track:</strong> ${official.focus}</p>
      ${official.quote ? `<blockquote class="quote-box"><p>“${official.quote}”</p><cite>${official.quoteSource} · <a href="${official.profile}" target="_blank" rel="noopener noreferrer">Brazoria County</a></cite></blockquote>` : ''}
      <details class="transcript-dropdown">
        <summary>Evidence and context</summary>
        <p>${official.evidenceNote}</p>
        ${official.proofUrl ? `<a class="proof-link" href="${official.proofUrl}" target="_blank" rel="noopener noreferrer">ABC13 Commissioners Court apology coverage (video / transcript) <span aria-hidden="true">↗</span></a>` : ''}
      </details>
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