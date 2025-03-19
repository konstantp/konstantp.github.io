const { algoliasearch, instantsearch } = window;
const searchClient = algoliasearch('4PGH0GU9LE', '2e776d6a30816c614266592297c5f3e2');
const search = instantsearch({
    indexName: 'prod_PAGES',
    searchClient,
    future: {
        preserveSharedStateOnUnmount: true
    }
});
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox'
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: (hit, { html, components })=>html`
        <article>
          <div>
              <h1><a href="${hit.url}" target="_blank">${components.Highlight({
                    hit,
                    attribute: 'seo.title'
                })}</a></h1>
            <p>
              ${components.Highlight({
                    hit,
                    attribute: 'seo.description'
                })}
            </p>
            <p><a href="${hit.url}" target="_blank">${components.Highlight({
                    hit,
                    attribute: 'url'
                })}</a></p>
          </div>
        </article>
      `
        }
    }),
    instantsearch.widgets.configure({
        hitsPerPage: 10
    }),
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
]);
search.start();

//# sourceMappingURL=konstantp.github.io.816e7b21.js.map
