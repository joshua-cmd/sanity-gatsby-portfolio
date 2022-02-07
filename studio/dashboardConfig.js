export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62019f002d21a9806eaeb49b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8c14z9xe',
                  apiId: 'a2024843-9da4-4b42-8772-113278848972'
                },
                {
                  buildHookId: '62019f0049eafd7cb34e9d4c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-95qp94hn',
                  apiId: '8664e17f-f137-4610-b4b8-448876e9aec9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshua-cmd/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-95qp94hn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
